import tailwindcss from "@tailwindcss/vite";
import { motionConfig } from "./app/assets/data/animate";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    devServer: {
        // port: 5173,
    },
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL || "https://petrolat.com",
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://petrolat.com",
            motion: {
                directives: {
                    "fade-in": {
                        initial: motionConfig.fadeIn.initial,
                        visible: motionConfig.fadeIn.active,
                    },
                    "fade-in-once": {
                        initial: motionConfig.fadeIn.initial,
                        visibleOnce: motionConfig.fadeIn.active,
                    },
                    "enter-top": {
                        initial: motionConfig.enterTop.initial,
                        visible: motionConfig.enterTop.active,
                    },
                    "enter-top-once": {
                        initial: motionConfig.enterTop.initial,
                        visibleOnce: motionConfig.enterTop.active,
                    },

                    "enter-bottom": {
                        initial: motionConfig.enterBottom.initial,
                        visible: motionConfig.enterBottom.active,
                    },
                    "enter-bottom-once": {
                        initial: motionConfig.enterBottom.initial,
                        visibleOnce: motionConfig.enterBottom.active,
                    },
                    "enter-start": {
                        initial: motionConfig.enterStart.initial,
                        visible: motionConfig.enterStart.active,
                    },
                    "enter-start-once": {
                        initial: motionConfig.enterStart.initial,
                        visibleOnce: motionConfig.enterStart.active,
                    },
                    "enter-end": {
                        initial: motionConfig.enterEnd.initial,
                        visible: motionConfig.enterEnd.active,
                    },
                    "enter-end-once": {
                        initial: motionConfig.enterEnd.initial,
                        visibleOnce: motionConfig.enterEnd.active,
                    },
                    // Magnetic Rise
                    "magnetic-rise": {
                        initial: motionConfig.magneticRise.initial,
                        visible: motionConfig.magneticRise.active,
                    },
                    "magnetic-rise-once": {
                        initial: motionConfig.magneticRise.initial,
                        visibleOnce: motionConfig.magneticRise.active,
                    },

                    // Cinematic Slide
                    "cinematic-slide": {
                        initial: motionConfig.cinematicSlide.initial,
                        visible: motionConfig.cinematicSlide.active,
                    },
                    "cinematic-slide-once": {
                        initial: motionConfig.cinematicSlide.initial,
                        visibleOnce: motionConfig.cinematicSlide.active,
                    },
                },
            },
        },
    },
    css: ["~/assets/css/master.css"],
    nitro: {
        preset: "static",
        minify: true,
        compressPublicAssets: {
            brotli: true,
            gzip: true,
        },
        prerender: {
            crawlLinks: true,
        },
        routeRules: {
            "/**": {
                headers: {
                    "Cache-Control": "public, max-age=31536000, immutable",
                },
            },
        },
    },
    vite: {
        json: {
            stringify: true,
        },
        build: {
            cssMinify: "lightningcss",
            minify: "terser",
        },
        server: {
            hmr: {
                overlay: false,
            },
        },
        plugins: [tailwindcss() as any],
    },
    ssr: true,
    spaLoadingTemplate: true,
    app: {
        pageTransition: {
            name: "layout-animation",
            mode: "out-in",
        },
        head: {
            title: "عيـادات سيتاديل",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0",
            htmlAttrs: {
                lang: "ar",
                dir: "rtl",
            },
            link: [
                {
                    rel: "icon",
                    type: "image/webp",
                    href: "/media/logo/logo.webp",
                },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Tajawal:wght@400;500;700&display=swap",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/media/logo/fav.webp",
                },
            ],
            meta: [
                {
                    name: "description",
                    content:
                        "عيـادات سيتاديل – عيادة متخصصة في العناية بالبشرة والعلاجات التجميلية. نقدم حلول متخصصة لمشاكل البشرة مثل حب الشباب، البقع الداكنة، إزالة الشعر بالليزر، وتجديد البشرة. فريقنا المعتمد دولياً يضمن لك نتائج آمنة وفعالة.",
                },
                {
                    name: "keywords",
                    content:
                        "عيادة جلدية السعودية, عيادة عناية بالبشرة, علاج حب الشباب, إزالة الشعر بالليزر, تجديد البشرة بالليزر, إزالة الوشم, علاج البقع الداكنة, عيادات سيتاديل, عيادة جلدية الرياض, خدمات تجميلية, علاجات البشرة, استشارة جلدية, عيادة معتمدة, ليزر البشرة, تقشير كيميائي",
                },
                {
                    name: "robots",
                    content:
                        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
                },
                { name: "theme-color", content: "#b08f6e" },
                { name: "author", content: "عيـادات سيتاديل" },
                { name: "copyright", content: "© 2025 عيـادات سيتاديل" },
                { name: "language", content: "Arabic" },
                { name: "geo.region", content: "SA-RIY" },
                { name: "geo.placename", content: "Riyadh" },
                { name: "geo.position", content: "24.7136;46.6753" },
                { name: "ICBM", content: "24.7136, 46.6753" },
                {
                    property: "og:title",
                    content: "عيـادات سيتاديل",
                },
                {
                    property: "og:description",
                    content:
                        "عيادة متخصصة في العناية بالبشرة والعلاجات التجميلية. نقدم حلول متخصصة لمشاكل البشرة مثل حب الشباب، البقع الداكنة، إزالة الشعر بالليزر، وتجديد البشرة. فريقنا المعتمد دولياً يضمن لك نتائج آمنة وفعالة.",
                },
                {
                    property: "og:url",
                    content: "https://petrolat.com/",
                },
                {
                    property: "og:image",
                    content: "https://petrolat.com/media/logo/logo.webp",
                },
                {
                    property: "og:image:width",
                    content: "1200",
                },
                {
                    property: "og:image:height",
                    content: "630",
                },
                {
                    property: "og:image:alt",
                    content: "عيـادات سيتاديل - Logo",
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:site_name",
                    content: "عيـادات سيتاديل",
                },
                {
                    property: "og:locale",
                    content: "ar_SA",
                },
                {
                    property: "og:locale:alternate",
                    content: "en_GB",
                },
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:site",
                    content: "@ciadelclinics",
                },
                {
                    name: "twitter:creator",
                    content: "@ciadelclinics",
                },
                {
                    name: "twitter:title",
                    content: "عيـادات سيتاديل",
                },
                {
                    name: "twitter:description",
                    content:
                        "عيادة متخصصة في العناية بالبشرة والعلاجات التجميلية. نقدم حلول متخصصة لمشاكل البشرة مثل حب الشباب، البقع الداكنة، إزالة الشعر بالليزر، وتجديد البشرة. فريقنا المعتمد دولياً يضمن لك نتائج آمنة وفعالة.",
                },
                {
                    name: "twitter:image",
                    content: "https://petrolat.com/media/logo/logo.webp",
                },
                {
                    name: "twitter:image:alt",
                    content: "عيـادات سيتاديل - Logo",
                },
            ],
        },
    },
    ripple: {
        mode: "hover",
    },
    image: {
        provider: "none",
    },
    modules: [
        "@nuxt/eslint",
        "@vueuse/nuxt",
        "lenis/nuxt",
        "@vueuse/motion/nuxt",
        "@formkit/auto-animate/nuxt",
        "nuxt-ripple",
        "@nuxt/image",
        "@nuxtjs/i18n",
        "@nuxtjs/sitemap",
        "nuxt-gtag",
    ],
    sitemap: {
        autoLastmod: true,
        autoI18n: false,
        debug: false,
        sitemaps: false,
        xsl: false,
        excludeAppSources: true,
        defaults: {
            changefreq: "weekly",
            priority: 0.8,
        },

        sources: ["/api/__sitemap__/urls"],
        // zeroRuntime: true,
    },
    site: {
        url: "https://petrolat.com",
        name: "عيـادات سيتاديل",
    },
    gtag: {
        id: "AW-17288203495",
    },
    i18n: {
        baseUrl: process.env.BASE_URL || "https://petrolat.com",
        locales: [
            {
                code: "ar",
                language: "ar-SA",
                name: "العربية",
                dir: "rtl",
                flag: "SA",
                nextLang: "en",
                file: "../../i18n/locales/ar.json",
            },
            {
                code: "en",
                language: "en-GB",
                name: "English",
                dir: "ltr",
                flag: "GB",
                nextLang: "ar",
                file: "../../i18n/locales/en.json",
            },
        ],
        defaultDirection: "rtl",
        defaultLocale: "ar",
        vueI18n: "../i18n/i18n.config.ts",
        strategy: "prefix_except_default",
        detectBrowserLanguage: false,
    },

    plugins: ["~/plugins/autoAnimateSettings", "~/plugins/motionSettings"],
});
