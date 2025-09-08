import { NextResponse } from "next/server";

// Simple in-memory cache per runtime instance
type CacheEntry = {
  value: { name: string; version: string | null }
  expiresAt: number
  pending?: Promise<{ name: string; version: string | null }>
}

const CACHE = new Map<string, CacheEntry>()
const TTL_MS = 5 * 60 * 1000 // 5 minutes

async function fetchVersion(name: string): Promise<{ name: string; version: string | null }> {
  const registryUrl = `https://registry.npmjs.org/${encodeURIComponent(name)}/latest`
  const res = await fetch(registryUrl, {
    // Bypass Next's internal caching; we control TTL here
    cache: "no-store",
    headers: { "User-Agent": "adminizer-website/1.0" },
  })
  if (!res.ok) throw new Error(`Failed to fetch ${name}: ${res.status}`)
  const data = await res.json()
  const version = data?.version ?? data?.["dist-tags"]?.latest ?? null
  return { name, version }
}

// GET /api/npm-version?name=package-name
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get("name") || "adminizer"

    const now = Date.now()
    const cached = CACHE.get(name)

    // Serve fresh cache if valid
    if (cached && cached.expiresAt > now) {
      return new NextResponse(JSON.stringify(cached.value), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          // Clients may cache briefly, but backend already caches for 5m
          "Cache-Control": "public, max-age=60, stale-while-revalidate=60",
        },
      })
    }

    // If a request is already in flight, await it (dedupe)
    if (cached?.pending) {
      const value = await cached.pending
      return NextResponse.json(value, {
        headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=60" },
      })
    }

    // Start a fresh fetch and store as pending
    const pending = fetchVersion(name)
    CACHE.set(name, {
      value: cached?.value ?? { name, version: null }, // possibly stale placeholder
      expiresAt: now - 1, // mark as expired until fulfilled
      pending,
    })

    try {
      const value = await pending
      CACHE.set(name, { value, expiresAt: Date.now() + TTL_MS })
      return NextResponse.json(value, {
        headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=60" },
      })
    } catch (err) {
      // On error, serve stale if available
      if (cached?.value) {
        return NextResponse.json(cached.value, {
          headers: { "Cache-Control": "public, max-age=30" },
        })
      }
      throw err
    }
  } catch (e) {
    return NextResponse.json(
      { error: "Unexpected error fetching npm version" },
      { status: 500 },
    )
  }
}
