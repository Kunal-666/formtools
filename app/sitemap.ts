import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://formtools.site'

    // Static pages
    const staticRoutes = [
        '',
        '/compress-image',
        '/compress-pdf',
        '/passport-photo',
    ]

    const staticUrls = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.9,
    }))

    // Example: future dynamic tools (if stored in DB/API)
    // const tools = await fetchTools()
    // const dynamicUrls = tools.map(tool => ({
    //   url: `${baseUrl}/${tool.slug}`,
    //   lastModified: new Date(tool.updatedAt),
    // }))

    return [
        ...staticUrls,
        // ...dynamicUrls
    ]
}