import {
    Code2, Megaphone, Camera, HardDrive, Shield,
    MessageSquare, FileText, Search, Palette, Lightbulb,
    type LucideIcon,
} from 'lucide-react';

/* ════════════════════════════════════════════════════════════
   TYPES
   ════════════════════════════════════════════════════════════ */

export interface ServiceItem {
    id: string;
    icon: LucideIcon;
    color: string;
    bgLight: string;
    border: string;
    iconColor: string;
    title: string;
    tagline: string;
    /** A function that receives location name and returns description */
    descriptionFn: (loc: string, industries: string) => string;
    highlights: string[];
    ctaPrefix: string;        // e.g. "Get a Website for"
    servicePage: string;
    whatsappSlug: string;     // URL-encoded service name
    schemaTitle: string;      // e.g. "Web Development Services in"
}

export interface StatItem {
    label: string;
    value: string;
    iconName: string; // lucide icon key
}

export interface TrustCard {
    title: string;
    description: string;
    iconName: string;
    color: string;
    bg: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface LocationHub {
    name: string;
    slug: string;
    pin: string;
    state: string;
    lat: number;
    lng: number;
    heroTagline: string;
    heroHeadingLine1: string;
    heroHeadingLine2: string;
    heroHeadingLine3: string;
    heroDescription: string;
    heroImage: string;
    heroImageAlt: string;
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    stats: StatItem[];
    keyIndustries: string;       // comma-separated for service description injection
    nearbyAreas: string[];
    trustCards: TrustCard[];
    faqs: FAQItem[];
    ctaHeading: string;
    ctaSub: string;
    ctaBadge: string;
}

/* ════════════════════════════════════════════════════════════
   SHARED SERVICES (constant across all locations)
   ════════════════════════════════════════════════════════════ */

export const SHARED_SERVICES: ServiceItem[] = [
    {
        id: 'web-development',
        icon: Code2,
        color: 'from-blue-500 to-cyan-500',
        bgLight: 'bg-blue-50 dark:bg-blue-900/15',
        border: 'border-blue-200 dark:border-blue-700/30',
        iconColor: 'text-blue-500',
        title: 'Website Development',
        tagline: 'Precision-engineered websites that convert.',
        descriptionFn: (loc, ind) =>
            `We build blazing-fast, conversion-optimised websites for ${loc} businesses — from ${ind}. Every site is engineered with semantic HTML for AI crawlers, structured data so your business appears in Google's rich results, and WhatsApp-integrated lead forms so buyers reach you instantly. Mobile-first, WCAG-compliant, and built to outperform competitors.`,
        highlights: [
            'Custom React / Next.js architecture',
            'AI-ready semantic HTML structure',
            'Google Core Web Vitals optimised',
            'Google Business Profile sync',
            'WhatsApp lead capture integration',
            'Mobile-first responsive design',
        ],
        ctaPrefix: 'Get a Website for',
        servicePage: '/services/web-development',
        whatsappSlug: 'Website%20Development',
        schemaTitle: 'Web Development Services in',
    },
    {
        id: 'seo',
        icon: Search,
        color: 'from-orange-500 to-amber-400',
        bgLight: 'bg-orange-50 dark:bg-orange-900/15',
        border: 'border-orange-200 dark:border-orange-700/30',
        iconColor: 'text-orange-500',
        title: 'Search Engine Optimisation (SEO)',
        tagline: 'Own Google before your rivals do.',
        descriptionFn: (loc, _ind) =>
            `Most businesses in ${loc} are invisible on Google — not because they lack quality, but because no one has built their digital authority. We deploy hyper-local SEO strategies targeting the exact queries buyers and procurement managers type when searching for services in ${loc}. Local schema, Google Maps Pack dominance, AI Overview (GEO) optimisation, and competitor gap analysis included.`,
        highlights: [
            'Hyper-local keyword clusters',
            'Google Maps Pack ranking strategy',
            'AI Overview / GEO optimisation',
            'Competitor gap analysis & backlink building',
            'On-page & technical SEO audit',
            'Monthly ranking & traffic reports',
        ],
        ctaPrefix: 'Rank Higher in',
        servicePage: '/services/seo',
        whatsappSlug: 'SEO',
        schemaTitle: 'SEO Services in',
    },
    {
        id: 'digital-marketing',
        icon: Megaphone,
        color: 'from-green-500 to-emerald-400',
        bgLight: 'bg-green-50 dark:bg-green-900/15',
        border: 'border-green-200 dark:border-green-700/30',
        iconColor: 'text-green-500',
        title: 'Performance Marketing & Google Ads',
        tagline: 'Data-driven campaigns that fill your pipeline.',
        descriptionFn: (loc, ind) =>
            `Google Ads, Meta Ads, and LinkedIn campaigns engineered for ${loc}'s unique business ecosystem. Whether you are a ${ind} — we architect campaigns with military-grade conversion tracking and transparent ROAS reporting. No inflated budgets. No vanity clicks. Just hot leads that turn into revenue.`,
        highlights: [
            'Google Ads (Search + Display + Shopping)',
            'Meta Ads for local lead generation',
            'LinkedIn Ads for B2B reach',
            'Real-time ROAS & conversion dashboards',
            'Landing page optimisation',
            'Remarketing & retargeting campaigns',
        ],
        ctaPrefix: 'Launch Ads in',
        servicePage: '/services/digital-marketing',
        whatsappSlug: 'Performance%20Marketing',
        schemaTitle: 'Digital Marketing Services in',
    },
    {
        id: 'design',
        icon: Palette,
        color: 'from-pink-500 to-rose-400',
        bgLight: 'bg-pink-50 dark:bg-pink-900/15',
        border: 'border-pink-200 dark:border-pink-700/30',
        iconColor: 'text-pink-500',
        title: 'UI/UX Design & Brand Identity',
        tagline: 'Premium digital identity that builds instant trust.',
        descriptionFn: (loc, ind) =>
            `We design intuitive, premium digital experiences that reflect the true quality of your product or service. For ${loc}'s businesses — from ${ind} — a professional digital brand signals trust to buyers in the first 7 seconds. We handle everything from logo and brand identity to full UX product design with pixel-perfect Figma-to-production delivery.`,
        highlights: [
            'Brand identity & logo design',
            'Industry-specific UX research & wireframing',
            'Figma-to-production delivery',
            'Conversion-optimised page layouts',
            'Catalogue & product showcase design',
            'Print & digital collateral design',
        ],
        ctaPrefix: 'Elevate Your Brand in',
        servicePage: '/services/design',
        whatsappSlug: 'UI%2FUX%20Design',
        schemaTitle: 'UI UX Design Services in',
    },
    {
        id: 'social',
        icon: MessageSquare,
        color: 'from-purple-500 to-violet-500',
        bgLight: 'bg-purple-50 dark:bg-purple-900/15',
        border: 'border-purple-200 dark:border-white/10',
        iconColor: 'text-purple-500',
        title: 'Social Media Management',
        tagline: 'Your 24/7 brand voice across every platform.',
        descriptionFn: (loc, _ind) =>
            `Your social presence is your 24/7 shop window. We manage Instagram, Facebook, LinkedIn, and WhatsApp Business for ${loc} businesses — creating consistent, high-quality content that accurately represents your scale, quality, and professionalism. We handle the content and community management so you can focus on growth.`,
        highlights: [
            'Instagram & Facebook content strategy',
            'LinkedIn professional positioning',
            'WhatsApp Business catalogue & automation',
            'Reels & short-form video production',
            'Community management & DM handling',
            'Monthly growth & engagement reports',
        ],
        ctaPrefix: 'Grow Social in',
        servicePage: '/services/social',
        whatsappSlug: 'Social%20Media%20Management',
        schemaTitle: 'Social Media Management in',
    },
    {
        id: 'media-production',
        icon: Camera,
        color: 'from-red-500 to-orange-500',
        bgLight: 'bg-red-50 dark:bg-red-900/15',
        border: 'border-red-200 dark:border-red-700/30',
        iconColor: 'text-red-500',
        title: 'Media Production',
        tagline: 'Product-quality visuals that close deals.',
        descriptionFn: (loc, _ind) =>
            `In ${loc}'s competitive landscape, buyers decide before they even visit. Our product photography, facility videography, promotional reels, and brand story documentaries transform your business into a premium, trustworthy brand that wins orders online. High-impact media for your website, Google Business Profile, and social channels.`,
        highlights: [
            'Product & stock photography',
            'Facility & showroom walkthroughs',
            'Promotional video reels & shorts',
            'Drone footage for real estate & events',
            'Brand story documentary production',
            'Google Business Profile photo updates',
        ],
        ctaPrefix: 'Book a Shoot in',
        servicePage: '/services/media-production',
        whatsappSlug: 'Media%20Production',
        schemaTitle: 'Media Production Services in',
    },
    {
        id: 'it-hardware',
        icon: HardDrive,
        color: 'from-slate-500 to-gray-400',
        bgLight: 'bg-slate-50 dark:bg-slate-900/15',
        border: 'border-slate-200 dark:border-slate-700/30',
        iconColor: 'text-slate-500',
        title: 'IT Hardware & Infrastructure',
        tagline: 'Enterprise IT at wholesale-honest prices.',
        descriptionFn: (loc, _ind) =>
            `We source laptops, desktops, servers, networking equipment, CCTV systems, and enterprise software at near-wholesale prices for businesses in ${loc}. No middlemen, fully transparent pricing, and fast delivery. Whether you are setting up a new office or scaling IT infrastructure, we bring enterprise-grade hardware at honest prices.`,
        highlights: [
            'Laptops, desktops & servers at wholesale',
            'CCTV & security surveillance systems',
            'Office networking & Wi-Fi infrastructure',
            'Software licensing, ERP & IT AMC',
            'Biometric & access control systems',
            'Same-day delivery across Delhi NCR',
        ],
        ctaPrefix: 'Source IT in',
        servicePage: '/services/it-hardware',
        whatsappSlug: 'IT%20Hardware',
        schemaTitle: 'IT Hardware Services in',
    },
    {
        id: 'content',
        icon: FileText,
        color: 'from-teal-500 to-cyan-400',
        bgLight: 'bg-teal-50 dark:bg-teal-900/15',
        border: 'border-teal-200 dark:border-teal-700/30',
        iconColor: 'text-teal-500',
        title: 'Content Strategy & Copywriting',
        tagline: 'Words that make buyers trust you before they call.',
        descriptionFn: (loc, _ind) =>
            `Product descriptions that rank on Google. Business catalogues that close deals. Blog content that builds lasting authority for your ${loc} business. Our content team creates hyper-local, AI-optimised content that positions you as the definitive authority in your category — training both Google's algorithm and AI engines to recommend you first.`,
        highlights: [
            'Product, service & category page copy',
            'Industry blog & thought-leadership',
            'Trade catalogue content (EN/HI)',
            'AI-optimised E-E-A-T content structure',
            'Google Business Profile posts & updates',
            'Locality-specific landing page content',
        ],
        ctaPrefix: 'Build Authority in',
        servicePage: '/services/content',
        whatsappSlug: 'Content%20Strategy',
        schemaTitle: 'Content Strategy Services in',
    },
    {
        id: 'security',
        icon: Shield,
        color: 'from-yellow-500 to-amber-400',
        bgLight: 'bg-yellow-50 dark:bg-yellow-900/15',
        border: 'border-yellow-200 dark:border-yellow-700/30',
        iconColor: 'text-yellow-500',
        title: 'Cyber Security',
        tagline: 'Protecting your business from digital threats.',
        descriptionFn: (loc, _ind) =>
            `Businesses in ${loc} handling significant transactions, sensitive client data, and supplier networks are increasingly targeted by cyber fraud, phishing, and data theft. We deploy enterprise-grade cybersecurity protocols — network hardening, email protection, firewall configuration, and routine security audits — to protect your operations before a breach costs you everything.`,
        highlights: [
            'Network security hardening & firewalls',
            'Email phishing & scam protection',
            'Data backup & disaster recovery',
            'Annual penetration testing & audits',
            'UPI & payment fraud prevention',
            'Staff cybersecurity awareness training',
        ],
        ctaPrefix: 'Secure Your Business in',
        servicePage: '/services/security',
        whatsappSlug: 'Cybersecurity',
        schemaTitle: 'Cyber Security Services in',
    },
    {
        id: 'consultation',
        icon: Lightbulb,
        color: 'from-indigo-500 to-blue-400',
        bgLight: 'bg-indigo-50 dark:bg-indigo-900/15',
        border: 'border-indigo-200 dark:border-indigo-700/30',
        iconColor: 'text-indigo-500',
        title: 'Digital Strategy Consultation',
        tagline: 'An honest roadmap — not a sales pitch.',
        descriptionFn: (loc, _ind) =>
            `Before you spend a single rupee on marketing, talk to us. Our strategy sessions are for ${loc} business owners who are ready to go digital but aren't sure where to invest first. We analyse your digital footprint, map your competitors, and deliver a brutally honest prioritised action plan. No upselling. No jargon. Just a clear, ROI-first path forward.`,
        highlights: [
            'Free 60-minute discovery & strategy call',
            'Competitor digital gap analysis',
            'Prioritised growth roadmap',
            'ROI-first investment sequencing',
            'Website, SEO & ads performance audit',
            'No-obligation, no-commitment approach',
        ],
        ctaPrefix: 'Book a Call for',
        servicePage: '/services/consultation',
        whatsappSlug: 'Digital%20Strategy%20Consultation',
        schemaTitle: 'Digital Consultation Services in',
    },
];

/* ════════════════════════════════════════════════════════════
   LOCATION HUB DATA
   ════════════════════════════════════════════════════════════ */

export const LOCATION_HUBS: LocationHub[] = [
    /* ── 1. CONNAUGHT PLACE ── */
    {
        name: 'Connaught Place',
        slug: 'connaught-place',
        pin: '110001',
        state: 'New Delhi',
        lat: 28.6315,
        lng: 77.2167,

        heroTagline: 'Now Serving Connaught Place & Central Delhi',
        heroHeadingLine1: 'Every Digital Service',
        heroHeadingLine2: 'Connaught Place',
        heroHeadingLine3: 'Businesses Deserve.',
        heroDescription: `Connaught Place is the commercial nerve centre of India's capital — where corporate headquarters, premium retail brands, luxury hotels, co-working startups, and professional services firms all compete for the same high-value clientele. Yet most businesses here still depend on foot traffic and word-of-mouth. We change that. From conversion-focused websites to full-scale performance marketing, we build the digital infrastructure that makes your CP business dominate search results, AI Overviews, and social channels.`,
        heroImage: '/locations/connaught-place.png',
        heroImageAlt: 'Connaught Place, New Delhi architecture',

        seoTitle: 'Digital Marketing & IT Services in Connaught Place Delhi | BYS Marketing',
        seoDescription: 'BYS Marketing offers web development, SEO, Google Ads, UI/UX design, IT hardware, and media production for businesses in Connaught Place, New Delhi — the commercial heart of India.',
        seoKeywords: 'digital marketing Connaught Place, web development CP Delhi, SEO services Connaught Place, marketing agency Central Delhi, website design Connaught Place, Google Ads CP, IT company Connaught Place, BYS Marketing Delhi, digital agency Regal Building, Janpath marketing agency, Barakhamba Road SEO',

        stats: [
            { label: 'Based in Delhi NCR', value: 'Since 2017', iconName: 'Building2' },
            { label: 'Client Satisfaction', value: '98.4%', iconName: 'Star' },
            { label: 'Avg. ROAS for Clients', value: '4.2×', iconName: 'TrendingUp' },
            { label: 'Industries Served', value: '18+', iconName: 'Briefcase' },
        ],

        keyIndustries: 'corporate offices and co-working spaces to luxury retail brands, hospitality chains, restaurants, law firms, and financial services companies',

        nearbyAreas: [
            'Connaught Place', 'Janpath', 'Barakhamba Road', 'Mandi House',
            'Rajiv Chowk', 'Kasturba Gandhi Marg', 'Shivaji Stadium',
            'Palika Bazaar', 'Sansad Marg', 'Patel Chowk', 'Central Delhi',
            'Khan Market', 'India Gate', 'Pragati Maidan', 'ITO',
        ],

        trustCards: [
            {
                title: 'We Understand Central Delhi',
                description: 'Connaught Place is not just an address — it is the commercial epicentre of the nation. We understand the premium expectations, the corporate buyer behaviour, and the search patterns of Central Delhi\'s high-value audience, and we build digital strategies that match this calibre.',
                iconName: 'MapPin',
                color: 'text-primary',
                bg: 'bg-primary/10 dark:bg-primary/20',
            },
            {
                title: 'Corporate & Premium Brand Specialists',
                description: 'CP\'s buyers are executives, decision-makers, international tourists, and high-net-worth individuals. Every campaign, website, and SEO strategy we build is designed for premium conversion cycles — not bargain-hunting scrollers.',
                iconName: 'Briefcase',
                color: 'text-orange-500',
                bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
                title: 'Enterprise Quality, Startup Pricing',
                description: 'We are remote-first and pass every penny of saved overhead directly to our clients. Get enterprise-quality digital work at honest pricing — because your marketing budget should grow your Connaught Place business, not fund our office furniture.',
                iconName: 'TrendingUp',
                color: 'text-green-500',
                bg: 'bg-green-50 dark:bg-green-900/20',
            },
        ],

        faqs: [
            {
                question: 'Does BYS Marketing serve businesses in Connaught Place, Delhi?',
                answer: 'Yes. BYS Marketing provides dedicated digital services — web development, SEO, Google Ads, Meta Ads, UI/UX design, IT hardware, media production, content strategy, and cybersecurity — specifically for corporate offices, retail brands, restaurants, and professional services firms in Connaught Place and Central Delhi (PIN 110001).',
            },
            {
                question: 'What digital marketing services are best for a Connaught Place business?',
                answer: 'For CP businesses, we recommend starting with hyper-local SEO and Google Maps Pack optimisation to capture high-intent local search traffic, combined with a premium, conversion-focused website. For premium retail and hospitality brands, we layer Google Ads and Instagram campaigns to drive footfall and reservations.',
            },
            {
                question: 'How much does a website cost for a business in Connaught Place?',
                answer: 'Professional websites for CP businesses start at ₹15,000 for a mobile-first, SEO-optimised business site with WhatsApp integration and Google Business sync. Premium corporate websites and eCommerce platforms start at ₹45,000. We also offer monthly website management plans.',
            },
            {
                question: 'Can you help my CP restaurant or hotel rank on Google?',
                answer: 'Absolutely. We specialise in local SEO for hospitality businesses in Connaught Place. This includes Google Maps Pack optimisation, Google Business Profile management, review strategy, menu schema markup, and location-specific content that helps you outrank competitors in CP and Central Delhi search results.',
            },
            {
                question: 'How much does SEO cost for a Connaught Place business?',
                answer: 'SEO for CP businesses starts at ₹10,000/month for local SEO and Google Business Profile optimisation. Comprehensive campaigns targeting Delhi NCR and national markets start at ₹25,000/month. Contact us for a custom quote based on your industry and competitive landscape.',
            },
            {
                question: 'What industries does BYS Marketing serve in Connaught Place?',
                answer: 'We serve corporate offices, co-working spaces, law firms, CA firms, luxury retail, fashion boutiques, restaurants, cafés, bars, hotels, travel agencies, financial services, insurance companies, educational institutions, healthcare clinics, and professional services — essentially any business in CP that wants to dominate their digital presence.',
            },
        ],

        ctaHeading: 'Ready to Dominate',
        ctaSub: 'Join Connaught Place\'s forward-thinking businesses that are winning online enquiries, attracting premium clients, and building brands that command respect.',
        ctaBadge: 'Connaught Place — Heart of Delhi',
    },
    /* ── 2. GURUGRAM ── */
    {
        name: 'Gurugram',
        slug: 'gurugram',
        pin: '122002',
        state: 'Haryana',
        lat: 28.4595,
        lng: 77.0266,

        heroTagline: 'Now Serving Gurugram & Delhi NCR',
        heroHeadingLine1: 'Digital Growth for',
        heroHeadingLine2: 'Gurugram\'s',
        heroHeadingLine3: 'Fastest Growing Brands.',
        heroDescription: `Gurugram is India's Millennium City — home to Fortune 500 headquarters, unicorn startups, premium real estate, and rapid-scaling enterprises. In a market this competitive, a generic digital presence means losing out to rivals. We architect enterprise-grade websites and aggressive performance marketing campaigns designed specifically for Gurugram's high-stakes corporate and consumer ecosystem.`,
        heroImage: '/locations/gurugram.png',
        heroImageAlt: 'Gurugram Millennium City DLF Cyber City corporate towers',

        seoTitle: 'Digital Marketing & IT Services in Gurugram Haryana | BYS Marketing',
        seoDescription: 'BYS Marketing offers web development, SEO, Google Ads, UI/UX design, IT hardware, and media production for businesses in Gurugram (Gurgaon), Haryana — India\'s Millennium City.',
        seoKeywords: 'digital marketing Gurugram, web development Gurgaon, SEO services Gurugram, marketing agency Cyber City, website design Gurgaon, Google Ads Gurugram, IT company Gurugram, BYS Marketing Haryana, digital agency Golf Course Road, Udyog Vihar marketing agency, DLF Phase SEO',

        stats: [
            { label: 'Based in Delhi NCR', value: 'Since 2017', iconName: 'Building2' },
            { label: 'Client Satisfaction', value: '98.4%', iconName: 'Star' },
            { label: 'Avg. ROAS for Clients', value: '4.2×', iconName: 'TrendingUp' },
            { label: 'Industries Served', value: '18+', iconName: 'Briefcase' },
        ],

        keyIndustries: 'tech startups, real estate developers, corporate headquarters, premium hospitality, healthcare facilities, and B2B enterprises',

        nearbyAreas: [
            'Cyber City', 'Golf Course Road', 'Udyog Vihar', 'MG Road',
            'Sohna Road', 'DLF Phase 1-5', 'Sector 29',
            'Ambience Island', 'Golf Course Extension', 'Sector 44', 'Sector 14',
            'Manesar', 'Palam Vihar', 'Sushant Lok', 'Nirvana Country',
        ],

        trustCards: [
            {
                title: 'We Understand The Millennium City',
                description: 'Gurugram moves fast. We understand the aggressive growth targets, the corporate buyer behaviour, and the competitive search patterns of Gurugram\'s audience. We build digital strategies that move at your pace.',
                iconName: 'MapPin',
                color: 'text-primary',
                bg: 'bg-primary/10 dark:bg-primary/20',
            },
            {
                title: 'B2B & Enterprise Specialists',
                description: 'Gurugram\'s buyers are corporate decision-makers, tech-savvy consumers, and high-net-worth individuals. Every campaign and website we build is engineered for high-value conversion cycles — not bargain-hunting clicks.',
                iconName: 'Briefcase',
                color: 'text-orange-500',
                bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
                title: 'Premium Quality, Honest Pricing',
                description: 'Get agency-of-record quality without the bloated retainer fees. We pass overhead savings directly to our clients, ensuring your entire marketing budget in Gurugram goes toward actual growth, not our office rent.',
                iconName: 'TrendingUp',
                color: 'text-green-500',
                bg: 'bg-green-50 dark:bg-green-900/20',
            },
        ],

        faqs: [
            {
                question: 'Does BYS Marketing serve businesses in Gurugram (Gurgaon)?',
                answer: 'Yes. BYS Marketing provides full-stack digital services — web development, SEO, Google Ads, Meta Ads, UI/UX design, IT hardware, media production, content strategy, and cybersecurity — specifically for startups, corporate offices, real estate, and retail brands across Gurugram and Haryana.',
            },
            {
                question: 'We are a startup in Cyber City. Can you build our platform?',
                answer: 'Absolutely. We specialise in scalable, high-performance web applications and corporate websites for tech startups and enterprises. We use modern stacks (React, Next.js) to ensure your platform is fast, secure, and ready for scale.',
            },
            {
                question: 'Can you help my Gurugram restaurant or clinic rank on Google?',
                answer: 'Yes. We deploy aggressive local SEO strategies including Google Maps Pack optimisation, hyper-local content creation, and review management to ensure your business dominates local search results in specific areas like Sector 29, Galleria Market, or Golf Course Road.',
            },
            {
                question: 'Do you offer B2B lead generation via LinkedIn or Google Ads?',
                answer: 'Yes, B2B lead generation is our strong suit. We architect highly targeted LinkedIn and Google Search campaigns focused entirely on capturing high-intent corporate queries and decision-makers in the Gurugram business ecosystem.',
            },
            {
                question: 'What industries do you work with in Gurugram?',
                answer: 'We serve tech startups, IT companies, real estate developers, co-working spaces, healthcare clinics, premium restaurants, retail outlets, law firms, chartered accountants, and manufacturing units in areas like Udyog Vihar and Manesar.',
            },
            {
                question: 'Do you provide IT hardware setup for new offices in Gurugram?',
                answer: 'Yes. For new office setups in Gurugram, we supply enterprise-grade IT hardware including laptops, servers, networking equipment, CCTV, and access control systems at wholesale rates with fast implementation.',
            },
        ],

        ctaHeading: 'Ready to Dominate',
        ctaSub: 'Join Gurugram\'s fastest-growing businesses that are scaling revenue, attracting premium clients, and building market-leading brands.',
        ctaBadge: 'Gurugram — The Millennium City',
    },
    /* ── 3. LAJPAT NAGAR ── */
    {
        name: 'Lajpat Nagar',
        slug: 'lajpat-nagar',
        pin: '110024',
        state: 'New Delhi',
        lat: 28.5677,
        lng: 77.2433,

        heroTagline: 'Now Serving South Delhi\'s Retail Hub',
        heroHeadingLine1: 'Digital Growth for',
        heroHeadingLine2: 'Lajpat Nagar\'s',
        heroHeadingLine3: 'Premium Brands.',
        heroDescription: `Lajpat Nagar is South Delhi's most vibrant commercial and retail district — home to high-end fashion boutiques, bustling markets, healthcare clinics, and established local enterprises. We help you cut through the local noise. From stunning eCommerce experiences to aggressive local SEO, we build the digital infrastructure that makes your brand the top choice for South Delhi's discerning shoppers and clients.`,
        heroImage: '/locations/lajpat-nagar.png',
        heroImageAlt: 'Lajpat Nagar New Delhi vibrant retail district',

        seoTitle: 'Digital Marketing & IT Services in Lajpat Nagar Delhi | BYS Marketing',
        seoDescription: 'BYS Marketing offers premium web development, SEO, Google Ads, UI/UX design, and IT services for retail brands and businesses in Lajpat Nagar, South Delhi.',
        seoKeywords: 'digital marketing Lajpat Nagar, web development South Delhi, SEO services Lajpat Nagar, fashion brand marketing Delhi, website design Lajpat Nagar, Google Ads South Delhi, BYS Marketing',

        stats: [
            { label: 'Based in Delhi NCR', value: 'Since 2017', iconName: 'Building2' },
            { label: 'Client Satisfaction', value: '98.4%', iconName: 'Star' },
            { label: 'Avg. ROAS for Clients', value: '4.2×', iconName: 'TrendingUp' },
            { label: 'Retail Brands Scaled', value: '25+', iconName: 'Briefcase' },
        ],

        keyIndustries: 'fashion boutiques, retail showrooms, healthcare clinics, jewelry stores, and local service providers',

        nearbyAreas: [
            'Lajpat Nagar I-IV', 'Amar Colony', 'Defence Colony', 'South Extension',
            'Greater Kailash', 'East of Kailash', 'Kalkaji', 'Jangpura',
            'Bhogal', 'Nizamuddin', 'Andrews Ganj',
        ],

        trustCards: [
            {
                title: 'South Delhi Market Experts',
                description: 'We understand the buying patterns of South Delhi\'s premium audiences. Our campaigns are designed to attract high-intent customers who value quality and brand reputation over bargain prices.',
                iconName: 'MapPin',
                color: 'text-primary',
                bg: 'bg-primary/10 dark:bg-primary/20',
            },
            {
                title: 'Retail & eCommerce Specialists',
                description: 'From local SEO that drives footfall to highly optimized Shopify/React eCommerce stores that drive national sales, we know exactly how to scale retail brands originating in Lajpat Nagar.',
                iconName: 'Briefcase',
                color: 'text-orange-500',
                bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
                title: 'Premium Quality, Honest Pricing',
                description: 'Get agency-of-record quality without navigating confusing retainer structures. We provide clear, ROI-focused deliverables that translate directly into growth for your retail or service business.',
                iconName: 'TrendingUp',
                color: 'text-green-500',
                bg: 'bg-green-50 dark:bg-green-900/20',
            },
        ],

        faqs: [
            {
                question: 'Does BYS Marketing serve retail businesses in Lajpat Nagar?',
                answer: 'Yes. We provide complete digital growth services for retail businesses, boutiques, and showrooms in Lajpat Nagar. This includes eCommerce website development, local SEO, Google Ads, and social media management.',
            },
            {
                question: 'We run a fashion boutique in Central Market. How can you help us reach more clients?',
                answer: 'For fashion retail, we recommend a dual approach: Local SEO to capture footfall searches like "best bridal wear near me," paired with an eCommerce platform and Instagram/Meta Ads to sell your inventory pan-India.',
            },
            {
                question: 'Do you offer product or apparel photography services?',
                answer: 'Absolutely. High-quality visuals are crucial for retail. Our media production team handles premium product photography, store walkthroughs, and Instagram Reels creation to showcase your collections.',
            },
            {
                question: 'Can you help my clinic in South Extension or Lajpat Nagar rank on Google?',
                answer: 'Yes. We deploy rigorous local SEO strategies including Google Maps Pack optimisation, medical schema markup, and authoritative healthcare content to ensure your clinic dominates local health-related search queries.',
            },
        ],

        ctaHeading: 'Ready to Dominate',
        ctaSub: 'Join South Delhi\'s forward-thinking retail brands and businesses that are scaling revenue and dominating local search.',
        ctaBadge: 'Lajpat Nagar — Premium Retail Hub',
    },
    /* ── 4. KAROL BAGH ── */
    {
        name: 'Karol Bagh',
        slug: 'karol-bagh',
        pin: '110005',
        state: 'New Delhi',
        lat: 28.6538,
        lng: 77.1882,

        heroTagline: 'Now Serving Central Delhi\'s Commercial Hub',
        heroHeadingLine1: 'Digital Dominance for',
        heroHeadingLine2: 'Karol Bagh\'s',
        heroHeadingLine3: 'Leading Enterprises.',
        heroDescription: `Karol Bagh is the historic commercial heart of Central Delhi — a bustling epicenter for electronics, automotive parts, jewelry, and wholesale trade. To stand out in a market with thousands of competitors, you need more than just a signboard. We build high-performance B2B catalogs, premium websites, and aggressive local SEO strategies that ensure buyers find your business first, whether they are on the street or searching from across India.`,
        heroImage: '/locations/karol-bagh.png',
        heroImageAlt: 'Karol Bagh New Delhi energetic commercial architecture',

        seoTitle: 'Digital Marketing & IT Services in Karol Bagh Delhi | BYS Marketing',
        seoDescription: 'BYS Marketing offers premium web development, SEO, B2B catalogue design, and IT hardware services for businesses and wholesalers in Karol Bagh, New Delhi.',
        seoKeywords: 'digital marketing Karol Bagh, web development Central Delhi, SEO services Karol Bagh, wholesale digital marketing, website design Karol Bagh, B2B catalogue design Delhi',

        stats: [
            { label: 'Based in Delhi NCR', value: 'Since 2017', iconName: 'Building2' },
            { label: 'Client Satisfaction', value: '98.4%', iconName: 'Star' },
            { label: 'Avg. ROAS for Clients', value: '4.2×', iconName: 'TrendingUp' },
            { label: 'B2B Catalogues Built', value: '50+', iconName: 'Briefcase' },
        ],

        keyIndustries: 'electronics wholesalers, automotive dealerships, jewelry showrooms, educational institutes, and B2B traders',

        nearbyAreas: [
            'Karol Bagh', 'Rajendra Place', 'Patel Nagar', 'Paharganj',
            'Jhandewalan', 'Sadar Bazaar', 'Pusa Road', 'New Rajinder Nagar',
        ],

        trustCards: [
            {
                title: 'B2B & Wholesale Experts',
                description: 'We know how traditional trade works in Karol Bagh. We digitize your inventory, build scalable B2B ordering portals, and generate high-intent leads from pan-India buyers searching for Delhi suppliers.',
                iconName: 'Briefcase',
                color: 'text-primary',
                bg: 'bg-primary/10 dark:bg-primary/20',
            },
            {
                title: 'Hyper-Local SEO Dominance',
                description: 'When someone walks through Karol Bagh searching for a specific product or service on their phone, our local SEO strategies ensure your Google Business Profile is the first one they see and navigate to.',
                iconName: 'MapPin',
                color: 'text-orange-500',
                bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
                title: 'Enterprise IT at Wholesale Prices',
                description: 'We don\'t just do marketing. We supply enterprise-grade IT hardware, CCTV surveillance, and office networking equipment at honest prices to modernize your Karol Bagh back-office operations.',
                iconName: 'HardDrive',
                color: 'text-green-500',
                bg: 'bg-green-50 dark:bg-green-900/20',
            },
        ],

        faqs: [
            {
                question: 'Can you build a B2B catalogue or ordering portal for my wholesale business?',
                answer: 'Yes. We specialize in developing robust B2B eCommerce platforms and digital product catalogues for wholesalers and manufacturers, allowing your clients across India to view inventory and place orders securely.',
            },
            {
                question: 'How can digital marketing help an electronics or auto parts shop in Karol Bagh?',
                answer: 'Digital marketing transforms you from a local shop to a national supplier. We use Google Ads and SEO to capture purchase-ready intent from buyers across India looking for reliable suppliers located in Delhi\'s major markets.',
            },
            {
                question: 'Do you provide IT hardware setup for shops and offices in Karol Bagh?',
                answer: 'Yes, we supply and install laptops, desktops, security cameras (CCTV), biometrics, and networking infrastructure for retail showrooms and corporate offices in Central Delhi.',
            },
        ],

        ctaHeading: 'Ready to Modernize',
        ctaSub: 'Join Karol Bagh\'s leading traders and businesses who are digitizing their operations and scaling revenue pan-India.',
        ctaBadge: 'Karol Bagh — Central Trade Hub',
    },
    /* ── 5. CHANDNI CHOWK ── */
    {
        name: 'Chandni Chowk',
        slug: 'chandni-chowk',
        pin: '110006',
        state: 'New Delhi',
        lat: 28.6505,
        lng: 77.2303,

        heroTagline: 'Now Serving Old Delhi\'s Historic Markets',
        heroHeadingLine1: 'Modern Digital Scale for',
        heroHeadingLine2: 'Chandni Chowk',
        heroHeadingLine3: 'Traders & Brands.',
        heroDescription: `Chandni Chowk is the undisputed wholesale capital of India. For generations, businesses here have relied on legacy networks and footfall. Today, the smartest traders are digitizing. We help Old Delhi's heritage businesses, wholesalers, and ethnic wear brands build world-class eCommerce stores, B2B digital catalogues, and aggressive performance marketing campaigns to sell pan-India and globally while maintaining their rich legacy.`,
        heroImage: '/locations/chandni-chowk.png',
        heroImageAlt: 'Chandni Chowk Old Delhi wholesale market heritage architecture',

        seoTitle: 'Digital Marketing & IT Services in Chandni Chowk Old Delhi | BYS Marketing',
        seoDescription: 'BYS Marketing offers robust web development, B2B eCommerce, SEO, and IT hardware services for wholesale traders and businesses in Chandni Chowk, Old Delhi.',
        seoKeywords: 'digital marketing Chandni Chowk, eCommerce development Old Delhi, SEO services Chandni Chowk, B2B catalogue digital Delhi, website design Old Delhi, wholesale marketing Delhi',

        stats: [
            { label: 'Based in Delhi NCR', value: 'Since 2017', iconName: 'Building2' },
            { label: 'Client Satisfaction', value: '98.4%', iconName: 'Star' },
            { label: 'Avg. ROAS for Clients', value: '4.2×', iconName: 'TrendingUp' },
            { label: 'Legacy Brands Scaled', value: '40+', iconName: 'Briefcase' },
        ],

        keyIndustries: 'textile wholesalers, ethnic wear brands, spice merchants, hardware traders, jewelry markets, and heritage businesses',

        nearbyAreas: [
            'Chandni Chowk', 'Chawri Bazaar', 'Khari Baoli', 'Sadar Bazaar',
            'Nai Sarak', 'Daryaganj', 'Kashmere Gate', 'Jama Masjid Area',
        ],

        trustCards: [
            {
                title: 'Transforming Legacy Businesses',
                description: 'We respect the heritage of Old Delhi businesses while building the digital infrastructure needed to compete in the modern era. We guide traditional traders through smooth digital transformations.',
                iconName: 'Building2',
                color: 'text-primary',
                bg: 'bg-primary/10 dark:bg-primary/20',
            },
            {
                title: 'Wholesale & Export eCommerce',
                description: 'Whether you need a domestic B2B ordering portal for retailers or a multi-currency eCommerce store for international exports, we build high-performance, secure platforms that scale.',
                iconName: 'Globe',
                color: 'text-orange-500',
                bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
                title: 'National Performance Marketing',
                description: 'Why limit your sales to buyers who visit Delhi? We deploy targeted Google Ads and Meta campaigns that generate high-quality bulk orders from retailers and buyers across India.',
                iconName: 'TrendingUp',
                color: 'text-green-500',
                bg: 'bg-green-50 dark:bg-green-900/20',
            },
        ],

        faqs: [
            {
                question: 'How do you help traditional wholesale businesses in Old Delhi?',
                answer: 'We help traditional wholesale businesses digitize their catalogs, build B2B eCommerce portals, and execute SEO and Google Ads campaigns to attract bulk buyers from across India, reducing reliance on physical brokers and footfall.',
            },
            {
                question: 'We sell bridal ethnic wear. Can you help us sell online directly to consumers?',
                answer: 'Yes. We build premium, visually stunning Shopify or Next.js eCommerce stores perfect for showcasing high-end ethnic wear. We pair this with high-ROAS Instagram and Meta Ads campaigns to drive direct-to-consumer sales nationally and internationally.',
            },
            {
                question: 'Can you optimise our Google Business Profile for local searches in Chandni Chowk?',
                answer: 'Absolutely. Navigating Old Delhi is tough for buyers. We optimize your Google Maps listing, add exact pin locations, photo walkthroughs, and product categories so high-intent buyers can easily find and navigate to your specific store.',
            },
        ],

        ctaHeading: 'Ready to Scale Nationally',
        ctaSub: 'Join Old Delhi\'s visionary traders and heritage brands who are bringing their legacy into the digital age.',
        ctaBadge: 'Chandni Chowk — Heritage Trade Hub',
    },
    /* ── 6. NEHRU PLACE ── */
    {
        name: 'Nehru Place',
        slug: 'nehru-place',
        pin: '110019',
        state: 'New Delhi',
        lat: 28.5488,
        lng: 77.2514,

        heroTagline: 'Now Serving Asia\'s Largest IT Market',
        heroHeadingLine1: 'Digital Authority for',
        heroHeadingLine2: 'Nehru Place',
        heroHeadingLine3: 'Tech & Electronics Leaders.',
        heroDescription: `Nehru Place commands the IT hardware and electronics market. But relying solely on walk-ins and referrals leaves national revenue on the table. We build dominant digital presences for Nehru Place importers, system integrators, and software firms — from robust B2B platforms and national SEO strategies to high-ROI performance marketing that turns local inventory into national sales.`,
        heroImage: '/locations/nehru-place.png',
        heroImageAlt: 'Nehru Place New Delhi IT Hub commercial complex',

        seoTitle: 'Digital Marketing & IT Services in Nehru Place Delhi | BYS Marketing',
        seoDescription: 'Premium digital marketing, B2B eCommerce, web development, and SEO services for IT and hardware companies in Nehru Place, South Delhi.',
        seoKeywords: 'digital marketing Nehru Place, SEO services Nehru Place, B2B web development Delhi, IT marketing agency South Delhi, electronics B2B platform, Google Ads Nehru Place',

        stats: [
            { label: 'Based in Delhi NCR', value: 'Since 2017', iconName: 'Building2' },
            { label: 'Avg. ROAS for Clients', value: '4.2×', iconName: 'TrendingUp' },
            { label: 'Tech & B2B Clients', value: '30+', iconName: 'Briefcase' },
            { label: 'Websites Engineered', value: '150+', iconName: 'Code2' },
        ],

        keyIndustries: 'IT hardware importers, system integrators, software development firms, electronics wholesalers, and B2B traders',

        nearbyAreas: [
            'Kalkaji', 'East of Kailash', 'Okhla Industrial Estate', 'Chittaranjan Park',
            'Greater Kailash', 'Sant Nagar', 'Alaknanda',
        ],

        trustCards: [
            {
                title: 'B2B Tech Specialists',
                description: 'We speak the language of IT and hardware. Whether you sell enterprise servers or biometric systems, our marketing and SEO strategies attract serious B2B buyers, not just curious scrollers.',
                iconName: 'HardDrive',
                color: 'text-primary',
                bg: 'bg-primary/10 dark:bg-primary/20',
            },
            {
                title: 'Transform Inventory into Scale',
                description: 'A physical shop in Nehru Place reaches 1,000 visitors a day. A highly optimized digital B2B catalog reaches 100,000 procurement managers across India searching for your products.',
                iconName: 'Globe',
                color: 'text-orange-500',
                bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
                title: 'Transparent ROI Focused',
                description: 'We don’t do vanity metrics. Our Google Ads and SEO campaigns are built strictly around measurable lead generation and cost-per-acquisition metrics relevant to the competitive IT sector.',
                iconName: 'TrendingUp',
                color: 'text-green-500',
                bg: 'bg-green-50 dark:bg-green-900/20',
            },
        ],

        faqs: [
            {
                question: 'We import IT hardware in Nehru Place. How do we reach corporate buyers?',
                answer: 'We deploy LinkedIn Ads targeting IT Managers and procurement heads, combined with Google Search campaigns for commercial intent keywords like "wholesale server supplier Delhi.", generating direct B2B RFQs.',
            },
            {
                question: 'Can you build a digital catalog for thousands of PC components?',
                answer: 'Yes, we develop scalable frontend architectures (using React/Next.js) capable of rendering massive product catalogs instantly, ensuring a smooth, lightning-fast B2B browsing experience.',
            },
            {
                question: 'Do you offer cyber security services for tech firms?',
                answer: 'Absolutely. We provide enterprise-grade network security hardening and vulnerability assessments, crucial for businesses handling sensitive client data and large IT transactions.',
            },
        ],

        ctaHeading: 'Ready for National Scale',
        ctaSub: 'Join Nehru Place\'s leading IT firms modernizing their sales pipelines and dominating the B2B technology space.',
        ctaBadge: 'Nehru Place — Asia\'s IT Capital',
    },
    /* ── 7. ROHINI ── */
    {
        name: 'Rohini',
        slug: 'rohini',
        pin: '110085',
        state: 'New Delhi',
        lat: 28.7366,
        lng: 77.1235,

        heroTagline: 'Now Serving North West Delhi\'s Urban Hub',
        heroHeadingLine1: 'Digital Visibility for',
        heroHeadingLine2: 'Rohini\'s',
        heroHeadingLine3: 'Growing Businesses.',
        heroDescription: `Rohini is one of North West Delhi's largest, most densely populated residential and commercial hubs. From multi-specialty hospitals and premium retail outlets to private schools and local enterprise chains, competition is intense. We build commanding digital footprints that capture hyper-local intent — ensuring when residents search for services, your business is always the first they see.`,
        heroImage: 'https://images.unsplash.com/photo-1624132903946-3a1278e4b0d3?w=1200&q=80&auto=format',
        heroImageAlt: 'Rohini North Delhi modern residential and commercial sector',

        seoTitle: 'Digital Marketing & IT Services in Rohini Delhi | BYS Marketing',
        seoDescription: 'BYS Marketing provides local SEO, web development, social media management, and digital marketing for hospitals, schools, and businesses in Rohini, Delhi.',
        seoKeywords: 'digital marketing Rohini, SEO services North West Delhi, web development Rohini, hospital digital marketing Delhi, school marketing Rohini, local SEO Sector 9',

        stats: [
            { label: 'Local Search Dominance', value: '#1', iconName: 'Search' },
            { label: 'Client Satisfaction', value: '98.4%', iconName: 'Star' },
            { label: 'Avg. Lead Increase', value: '3.5×', iconName: 'TrendingUp' },
            { label: 'Sectors Covered', value: 'All 32', iconName: 'MapPin' },
        ],

        keyIndustries: 'hospitals, educational institutions (schools & colleges), real estate developers, restaurants, retail malls, and local service professionals',

        nearbyAreas: [
            'Rohini Sectors 1-32', 'Pitampura', 'Shalimar Bagh', 'Prashant Vihar',
            'Mangolpuri', 'Rithala', 'Bawana Industrial Area',
        ],

        trustCards: [
            {
                title: 'Hyper-Local Community Focus',
                description: 'We optimize your presence to dominate searches within Rohini and neighboring sectors, turning local searchers into foot traffic and confirmed appointments.',
                iconName: 'MapPin',
                color: 'text-primary',
                bg: 'bg-primary/10 dark:bg-primary/20',
            },
            {
                title: 'Healthcare & Education Marketing',
                description: 'We specialize in building lead-generation engines for clinics, multi-specialty hospitals, and schools, ensuring patient and student enrollment targets are consistently met.',
                iconName: 'Briefcase',
                color: 'text-orange-500',
                bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
                title: 'High-Conversion Web Design',
                description: 'We don\'t just design pretty pages. Our websites are engineered for conversion, using WhatsApp integrations and optimized funnels to capture leads instantly 24/7.',
                iconName: 'Code2',
                color: 'text-green-500',
                bg: 'bg-green-50 dark:bg-green-900/20',
            },
        ],

        faqs: [
            {
                question: 'We manage a hospital in Rohini. How can you increase our patient inflow?',
                answer: 'We deploy specialized healthcare SEO (targeting exact specialities like "best ortho in Rohini"), manage patient reviews, run Google Ads for high-priority treatments, and maintain an informative social media presence.',
            },
            {
                question: 'Can you help a local restaurant rank higher in food deliveries?',
                answer: 'Yes. Beyond ranking on food apps, we build strong direct-order channels via Google Business Profile optimization, localized Instagram marketing, and targeted Meta Ads with direct-to-WhatsApp ordering.',
            },
            {
                question: 'Do you offer IT infrastructure for new school or office setups in Rohini?',
                answer: 'Absolutely. We provide comprehensive IT hardware setups, including computer labs, networking, CCTV, and biometric access control for educational institutes and commercial buildings across Rohini.',
            },
        ],

        ctaHeading: 'Ready to Lead Logically',
        ctaSub: 'Join Rohini\'s premier institutions and businesses that are securing top rankings and capturing maximum local leads.',
        ctaBadge: 'Rohini — North West Hub',
    },
    /* ── 8. DWARKA ── */
    {
        name: 'Dwarka',
        slug: 'dwarka',
        pin: '110075',
        state: 'New Delhi',
        lat: 28.5823,
        lng: 77.0500,

        heroTagline: 'Now Serving South West Delhi\'s Sub-City',
        heroHeadingLine1: 'Digital Excellence for',
        heroHeadingLine2: 'Dwarka\'s',
        heroHeadingLine3: 'Premium Ecosystem.',
        heroDescription: `Dwarka is Asia's largest residential sub-city, evolving rapidly into a powerhouse of premium healthcare, luxury real estate, high-end retail, and educational excellence. Businesses here cater to an affluent, digitally-native population. We architect conversion-focused websites and high-precision performance marketing campaigns designed to capture Dwarka's premium consumer base before they look elsewhere.`,
        heroImage: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=1200&q=80&auto=format',
        heroImageAlt: 'Dwarka New Delhi modern planned sub city infrastructure',

        seoTitle: 'Digital Marketing & IT Services in Dwarka Delhi | BYS Marketing',
        seoDescription: 'BYS Marketing offers expert web development, SEO, real estate marketing, and digital services for businesses, clinics, and schools in Dwarka, New Delhi.',
        seoKeywords: 'digital marketing Dwarka, SEO services South West Delhi, web development Dwarka, real estate digital marketing Delhi, healthcare marketing Dwarka, local SEO Dwarka Sector 12',

        stats: [
            { label: 'Based in Delhi NCR', value: 'Since 2017', iconName: 'Building2' },
            { label: 'Premium Targeting', value: '100%', iconName: 'Search' },
            { label: 'Avg. ROAS for Clients', value: '4.2×', iconName: 'TrendingUp' },
            { label: 'Sectors Covered', value: 'All 29', iconName: 'MapPin' },
        ],

        keyIndustries: 'real estate developers, multi-speciality hospitals, international schools, premium salons, restaurants, and local retail',

        nearbyAreas: [
            'Dwarka Sectors 1-29', 'Janakpuri', 'Vikas Puri', 'Palam',
            'Uttam Nagar', 'Mahavir Enclave', 'Najafgarh',
        ],

        trustCards: [
            {
                title: 'Data-Driven Premium Targeting',
                description: 'Dwarka has a highly educated, affluent demographic. We don\'t waste budget on broad targeting; our campaigns zero in on high-net-worth individuals and corporate professionals residing in specific sectors.',
                iconName: 'Search',
                color: 'text-primary',
                bg: 'bg-primary/10 dark:bg-primary/20',
            },
            {
                title: 'Real Estate & Healthcare',
                description: 'We have proven frameworks for Dwarka\'s largest sectors: generating qualified site visits for real estate projects and driving high-value patient appointments for specialized clinics and hospitals.',
                iconName: 'Briefcase',
                color: 'text-orange-500',
                bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
                title: 'Immersive Brand Experiences',
                description: 'From stunning UI/UX design that elevates your brand perception to high-quality media production (drone shoots, walkthroughs), we make your Dwarka business look its absolute best online.',
                iconName: 'Camera',
                color: 'text-green-500',
                bg: 'bg-green-50 dark:bg-green-900/20',
            },
        ],

        faqs: [
            {
                question: 'How can you help my real estate agency in Dwarka?',
                answer: 'We deploy a mix of Meta Ads (for lifestyle targeting) and Google Search Ads (for intent targeting) specifically geo-fenced around Dwarka and South West Delhi, driving high-quality leads for luxury apartments and commercial spaces.',
            },
            {
                question: 'Can you improve the website for our Dwarka-based school?',
                answer: 'Yes. We design premium, responsive websites for educational institutions that feature smooth admission portals, virtual campus tours, and robust SEO to rank high when parents search for top schools in Dwarka.',
            },
            {
                question: 'Do you manage social media for premium salons in Sector 12?',
                answer: 'Absolutely. We handle end-to-end Instagram management—from creating high-quality Reel content to running localized follower growth and appointment-generation campaigns tailored for beauty and wellness brands.',
            },
        ],

        ctaHeading: 'Ready to Lead Dwarka',
        ctaSub: 'Join Dwarka\'s elite businesses and institutions that are dominating their sectors through precision digital marketing.',
        ctaBadge: 'Dwarka — Elite Sub-City Market',
    },
];

/** Lookup helper: returns a LocationHub or undefined */
export function getLocationHub(slug: string): LocationHub | undefined {
    return LOCATION_HUBS.find(h => h.slug === slug);
}
