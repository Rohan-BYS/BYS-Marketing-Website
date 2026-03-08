import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
    schema?: Record<string, any> | any[];
    keywords?: string;
    noIndex?: boolean;
}

export default function SEOHead({
    title,
    description,
    url = 'https://bys.marketing',
    image = 'https://bys.marketing/og-image.jpg',
    schema,
    keywords = 'Digital Marketing, Web Development, SEO, BYS Marketing',
    noIndex = false
}: SEOHeadProps) {
    console.log('SEOHead Rendering:', { title, description, keywords });
    const fullTitle = `${title} | BYS Marketing`;

    return (
        <Helmet>
            <title data-rh="true">{fullTitle}</title>
            {noIndex && <meta data-rh="true" name="robots" content="noindex, nofollow" />}
            <meta data-rh="true" name="description" content={description} />
            <meta data-rh="true" name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta data-rh="true" property="og:type" content="website" />
            <meta data-rh="true" property="og:url" content={url} />
            <meta data-rh="true" property="og:title" content={fullTitle} />
            <meta data-rh="true" property="og:description" content={description} />
            <meta data-rh="true" property="og:image" content={image} />

            {/* Twitter */}
            <meta data-rh="true" property="twitter:card" content="summary_large_image" />
            <meta data-rh="true" property="twitter:url" content={window.location.href} />
            <meta data-rh="true" property="twitter:title" content={fullTitle} />
            <meta data-rh="true" property="twitter:description" content={description} />
            <meta data-rh="true" property="twitter:image" content={image} />

            {/* Canonical Link */}
            <link data-rh="true" rel="canonical" href={window.location.href} />

            {/* GEO / AI Search Optimization Guidelines */}
            <meta data-rh="true" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script data-rh="true" type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
