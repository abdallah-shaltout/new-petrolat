export const globalConfig = {
    bookingUrl: "https://citadelclinics.kizensoft.com",
    /** Map link for "Our location" in top bar */
    mapUrl: "https://maps.app.goo.gl/JgJDR2n6wQcvf7ca7",
    /** Google Maps iframe embed URL for footer (Citadel Plaza). From: https://www.google.com/maps/place/Citadel+Plaza/@30.0281142,31.26747,17z */
    mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.0003543135376!2d42.68805887588109!3d18.30159198274998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb571be974d3f1%3A0x2950da7a1a65c957!2sCITADEL%20CLINICS!5e0!3m2!1sen!2seg!4v1771763912332!5m2!1sen!2seg",

    /** Main clinic phone (tel: link) */
    phone: "+966 92 003 2110",
    /** Floating widget ad (bottom-right): image path and optional link. Set to null to hide. */
    floatingWidgetAd: null as { image: string; href?: string } | null,
    /** Accreditation logo for "معتمد من" (e.g. CBAHI). Put image in public/media/footer/ */
    /** Payment method logo paths (order: same as reference). Put images in public/media/footer/ */
    paymentLogoUrls: [
        "/media/images/footer/payments/1.webp",
        "/media/images/footer/payments/2.webp",
        "/media/images/footer/payments/3.webp",
        "/media/images/footer/payments/4.webp",
    ] as const,
} as const;

/** Social links for header top bar (icon-only). Order: X, Instagram, Snapchat, TikTok. */
export const headerSocialLinks = [
    {
        key: "x",
        href: "https://x.com/citadelclinics",
        icon: "social/x" as const,
    },
    {
        key: "instagram",
        href: "https://www.instagram.com/citadelclinics",
        icon: "social/instagram" as const,
    },
    {
        key: "snapchat",
        href: "https://www.snapchat.com/@citadelclinics",
        icon: "social/snapchat" as const,
    },
    {
        key: "tiktok",
        href: "https://www.tiktok.com/@citadelclinics",
        icon: "social/tiktok" as const,
    },
] as const;
