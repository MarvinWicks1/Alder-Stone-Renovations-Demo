import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/projects",
    "/process",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-05-31"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
