import { MetadataRoute } from 'next'

const baseUrl = 'https://formtools.site'

const imageTools = [
    "/resize-image-20kb",
    "/resize-image-30kb",
    "/resize-image-50kb",
    "/resize-image-100kb",
    "/image-resizer",
    "/signature-under-20kb",
    "/passport-photo-size-maker",
    "/passport-photo-maker",
]

const pdfTools = [
    "/compress-pdf-20kb",
    "/compress-pdf-50kb",
    "/compress-pdf-100kb",
    "/compress-pdf-for-ssc-form",
    "/compress-pdf-for-railway-form",
    "/compress-percent",
]

const popularUseCases = [
    "/photo-under-50kb-ssc",
    "/signature-resize",
    "/compress-pdf-200kb",
]

export default function sitemap(): MetadataRoute.Sitemap {

    const allRoutes = [
        '',
        ...imageTools,
        ...pdfTools,
        ...popularUseCases,
    ]

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}