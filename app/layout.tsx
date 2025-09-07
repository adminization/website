import type { Metadata } from "next";
import "../src/index.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Adminizer - Modern Admin Panel for Node.js",
  description:
    "Framework-agnostic, open-source admin panel for Node.js with TypeScript backend and React frontend. Build robust dashboards with ease.",
  openGraph: {
    title: "Adminizer - Modern Admin Panel for Node.js",
    description:
      "Framework-agnostic, open-source admin panel for Node.js with TypeScript backend and React frontend. Build robust dashboards with ease.",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  authors: [{ name: "Adminizer" }],
  keywords: [
    "admin panel",
    "nodejs",
    "typescript",
    "react",
    "dashboard",
    "open source",
    "framework agnostic",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
