import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE = "https://amani-technologies.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${BASE}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/mentions-legales/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]
}
