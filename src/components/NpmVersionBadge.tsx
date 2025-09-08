"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

type Props = {
  name?: string
}

export default function NpmVersionBadge({ name = "adminizer" }: Props) {
  const [version, setVersion] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(`/api/npm-version?name=${encodeURIComponent(name)}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as { name: string; version: string | null }
        if (!cancelled) setVersion(data.version ?? null)
      } catch (e) {
        if (!cancelled) setError("failed")
      }
    }

    load()
    const id = setInterval(load, 5 * 60 * 1000) // refresh every 5 minutes
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [name])

  const href = `https://www.npmjs.com/package/${name}`
  const label = version ? `npm v${version}` : error ? "npm (unavailable)" : "npm (loading…)"

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Badge variant="secondary" className="gap-1 cursor-pointer">
        {label}
      </Badge>
    </Link>
  )
}

