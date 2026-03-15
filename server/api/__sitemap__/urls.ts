import type { SitemapUrl } from "#sitemap/types";

export default defineSitemapEventHandler(async (): Promise<SitemapUrl[]> => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.baseUrl || "https://petrolat.com";

    const pages: SitemapUrl[] = [
        { loc: "/", priority: 1, changefreq: "weekly" },
        { loc: "/about", priority: 0.9, changefreq: "weekly" },
        { loc: "/services", priority: 0.9, changefreq: "weekly" },
        { loc: "/doctors", priority: 0.9, changefreq: "weekly" },
        { loc: "/book", priority: 0.8, changefreq: "weekly" },
        { loc: "/news", priority: 0.8, changefreq: "weekly" },
        { loc: "/faq", priority: 0.7, changefreq: "monthly" },
        { loc: "/terms", priority: 0.5, changefreq: "yearly" },
        { loc: "/privacy", priority: 0.5, changefreq: "yearly" },
        { loc: "/cookies", priority: 0.5, changefreq: "yearly" },
    ];

    return pages.map((page) => ({
        ...page,
        lastmod: new Date(),
        alternatives: [
            { hreflang: "ar-SA", href: `${baseUrl}${page.loc}` },
            {
                hreflang: "en-GB",
                href: `${baseUrl}/en${page.loc === "/" ? "" : page.loc}`,
            },
            { hreflang: "x-default", href: `${baseUrl}${page.loc}` },
        ],
    }));
});
