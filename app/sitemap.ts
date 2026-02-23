import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://zyklabs.in',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Add additional URLs here as the site grows (e.g., /services, /work, /blog)
    ]
}
