import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
    schema?: Record<string, any> | any[];
    keywords?: string;
    noIndex?: boolean;
    geoRegion?: string;
    geoPlacename?: string;
}

export default function SEOHead({
    title,
    description,
    url = 'https://bys.marketing',
    image = 'https://bys.marketing/og-image.jpg',
    schema,
    keywords = 'Digital Marketing, Web Development, SEO, BYS Marketing',
    noIndex = false,
    geoRegion = 'IN-DL',
    geoPlacename = 'New Delhi'
}: SEOHeadProps) {
    const fullTitle = `${title} | BYS Marketing`;

    return (
        <Helmet>
            <title data-rh="true">{fullTitle}</title>
            {noIndex && <meta data-rh="true" name="robots" content="noindex, nofollow" />}
            <meta data-rh="true" name="description" content={description} />
            <meta data-rh="true" name="keywords" content={keywords} />
            <meta data-rh="true" name="application-name" content="BYS Marketing" />

            {/* Geo / Local SEO signals */}
            <meta data-rh="true" name="geo.region" content={geoRegion} />
            <meta data-rh="true" name="geo.placename" content={geoPlacename} />

            {/* Open Graph / Facebook */}
            <meta data-rh="true" property="og:type" content="website" />
            <meta data-rh="true" property="og:url" content={url} />
            <meta data-rh="true" property="og:title" content={fullTitle} />
            <meta data-rh="true" property="og:description" content={description} />
            <meta data-rh="true" property="og:image" content={image} />
            <meta data-rh="true" property="og:site_name" content="BYS Marketing" />
            <meta data-rh="true" property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta data-rh="true" property="twitter:card" content="summary_large_image" />
            <meta data-rh="true" property="twitter:url" content={window.location.href} />
            <meta data-rh="true" property="twitter:title" content={fullTitle} />
            <meta data-rh="true" property="twitter:description" content={description} />
            <meta data-rh="true" property="twitter:image" content={image} />
            <meta data-rh="true" property="twitter:site" content="@bysmarketing" />

            {/* Canonical + hreflang */}
            <link data-rh="true" rel="canonical" href={url} />
            <link data-rh="true" rel="alternate" hrefLang="en-in" href={url} />
            <link data-rh="true" rel="alternate" hrefLang="x-default" href={url} />

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
