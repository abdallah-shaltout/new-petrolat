export function useSeo() {
    const { $i18n } = useNuxtApp();
    const route = useRoute();
    const config = useRuntimeConfig();
    const baseUrl = config.public.baseUrl || "https://petrolat.com";
    const currentLocale = $i18n.locale.value || "ar";
    const currentPath = route.path;

    const pageTitle =
        currentLocale === "ar" ? "عيـادات سيتاديل" : "Ciadel Clinics";

    useHead({
        title: pageTitle,
        meta: [
            {
                property: "og:title",
                content: pageTitle,
            },
            {
                name: "twitter:title",
                content: pageTitle,
            },
        ],
        script: [
            {
                type: "application/ld+json",
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalBusiness",
                    "@id": `${baseUrl}/#organization`,
                    name:
                        currentLocale === "ar"
                            ? "عيـادات سيتاديل"
                            : "Ciadel Clinics",
                    alternateName: "Ciadel",
                    description:
                        currentLocale === "ar"
                            ? "عيادة متخصصة في العناية بالبشرة والعلاجات التجميلية. نقدم حلول متخصصة لمشاكل البشرة مثل حب الشباب، البقع الداكنة، إزالة الشعر بالليزر، وتجديد البشرة. فريقنا المعتمد دولياً يضمن لك نتائج آمنة وفعالة."
                            : "Specialized skin care and cosmetic treatment clinic. We provide specialized solutions for skin problems such as acne, dark spots, laser hair removal, and skin resurfacing. Our internationally certified team ensures safe and effective results.",
                    url: baseUrl,
                    logo: `${baseUrl}/media/logo/logo.webp`,
                    image: `${baseUrl}/media/logo/logo.webp`,
                    telephone: "+966552071129",
                    email: "info@ciadel-clinics.com",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality:
                            currentLocale === "ar" ? "الرياض" : "Riyadh",
                        addressRegion:
                            currentLocale === "ar" ? "الرياض" : "Riyadh",
                        addressCountry: "SA",
                    },
                    areaServed: {
                        "@type": "Country",
                        name: "Saudi Arabia",
                    },
                    sameAs: ["https://x.com/ciadelclinics"],
                    priceRange: "$$",
                    medicalSpecialty: [
                        currentLocale === "ar" ? "طب الجلدية" : "Dermatology",
                        currentLocale === "ar"
                            ? "العلاجات التجميلية"
                            : "Cosmetic Treatments",
                    ],
                    serviceType: [
                        currentLocale === "ar"
                            ? "علاج حب الشباب المتقدم"
                            : "Advanced Acne Treatment",
                        currentLocale === "ar"
                            ? "تجديد البشرة بالليزر"
                            : "Laser Skin Resurfacing",
                        currentLocale === "ar"
                            ? "إزالة الوشم والندوب"
                            : "Tattoo & Scar Removal",
                        currentLocale === "ar"
                            ? "إزالة الشعر الدائم بالليزر"
                            : "Permanent Laser Hair Removal",
                        currentLocale === "ar"
                            ? "التقشير الكيميائي"
                            : "Chemical Peels",
                    ],
                    knowsAbout: [
                        currentLocale === "ar"
                            ? "علاج حب الشباب"
                            : "Acne Treatment",
                        currentLocale === "ar"
                            ? "إزالة الشعر بالليزر"
                            : "Laser Hair Removal",
                        currentLocale === "ar"
                            ? "علاج البقع الداكنة"
                            : "Dark Spot Treatment",
                        currentLocale === "ar"
                            ? "تجديد البشرة"
                            : "Skin Resurfacing",
                        currentLocale === "ar"
                            ? "العناية بالبشرة"
                            : "Skin Care",
                    ],
                }),
            },
            {
                type: "application/ld+json",
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BeautySalon",
                    "@id": `${baseUrl}/#localbusiness`,
                    name:
                        currentLocale === "ar"
                            ? "عيـادات سيتاديل"
                            : "Ciadel Clinics",
                    image: `${baseUrl}/media/logo/logo.webp`,
                    url: baseUrl,
                    telephone: "+966552071129",
                    priceRange: "$$",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality:
                            currentLocale === "ar" ? "الرياض" : "Riyadh",
                        addressRegion:
                            currentLocale === "ar" ? "الرياض" : "Riyadh",
                        addressCountry: "SA",
                    },
                    geo: {
                        "@type": "GeoCoordinates",
                        latitude: "24.7136",
                        longitude: "46.6753",
                    },
                    openingHoursSpecification: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Sunday",
                        ],
                        opens: "09:00",
                        closes: "17:00",
                    },
                }),
            },
        ],
        link: [
            {
                rel: "canonical",
                href: `${baseUrl}${currentPath}`,
            },
        ],
    });
}

export function useLang() {
    const head = useLocaleHead({ seo: true, lang: true });
    useHead(() => ({
        htmlAttrs: {
            ...head.value.htmlAttrs,
        },
        link: [...(head.value.link || [])],
        meta: [...(head.value.meta || [])],
    }));
}
