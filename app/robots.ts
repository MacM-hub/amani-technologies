import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://amani-technologies.com/sitemap.xml",
    host: "https://amani-technologies.com",
  }
}
