<template>
    <footer class="footer bg-zinc-950 text-white">
        <!-- Desktop-first: 4 columns on lg, 2 on md, 1 on small -->
        <div class="footertop py-12 md:py-16 px-6">
            <div class="max-w-7xl mx-auto">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-8 gap-10 gap-y-10"
                >
                    <!-- Col 1: Logo, description, social, accredited by -->
                    <div class="flex flex-col gap-6">
                        <div class="fc">
                            <AppLogo light class="me-auto ms-0!" />
                        </div>
                        <p
                            class="text-sm text-white/80 leading-relaxed max-w-sm"
                        >
                            عيادات سيتاديل – عيادة متخصصة في العناية بالبشرة
                            والعلاجات التجميلية. فريقنا المعتمد دولياً يضمن لك
                            نتائج آمنة وفعالة
                        </p>
                        <ul class="socialbx flex flex-wrap gap-2">
                            <li v-for="social in socialLinks" :key="social.key">
                                <a
                                    :href="social.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="w-9 h-9 rounded-full bg-white/10 text-white fc justify-center hover:bg-primary-600 transition-colors [&_svg]:w-4 [&_svg]:h-4"
                                    :aria-label="social.label"
                                >
                                    <AppIcon
                                        :name="social.icon"
                                        class="text-inherit"
                                    />
                                </a>
                            </li>
                        </ul>
                        <!-- <div
                            class="accreditations fc gap-2 text-sm text-white/70"
                        >
                            <p>
                                معتمد من
                            </p>
                            <div class="bg-light rounded-lg px-2">
                                <NuxtImg
                                    src="/media/images/footer/cbahi.webp"
                                    alt=""
                                    loading="lazy"
                                    class="h-14 w-auto object-contain"
                                />
                            </div>
                        </div> -->
                    </div>

                    <!-- Col 2: Quick links -->
                    <div class="hidden md:flex flex-col">
                        <h5 class="text-sm font-semibold mb-4 text-white">
                            روابط سريعة
                        </h5>
                        <ul class="footerul space-y-2">
                            <li v-for="link in menuLinks" :key="link.key">
                                <a
                                    v-if="isExternalLink(link.to)"
                                    :href="link.to"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="block text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {{ link.label }}
                                </a>
                                <NuxtLink
                                    v-else
                                    :to="link.to"
                                    class="block text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {{ link.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Col 3: Extra links (doctors, book) -->
                    <div class="hidden md:flex flex-col">
                        <h5 class="text-sm font-semibold mb-4 text-white">
                            القائمة
                        </h5>
                        <ul class="footerul space-y-2">
                            <li v-for="link in extraLinks" :key="link.name">
                                <NuxtLink
                                    :to="localePath({ name: link.name })"
                                    class="block text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {{ link.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <!-- Col 2: Quick links -->
                    <div
                        class="flex md:hidden flex-col"
                        v-auto-animate="$autoAnimate"
                    >
                        <div
                            class="flex-between"
                            @click="toggleQuickLinks = !toggleQuickLinks"
                        >
                            <h5 class="text-sm font-semibold mb-4 text-white">
                                روابط سريعة
                            </h5>
                            <AppIcon
                                v-bind="{ icon: 'chevrondown' }"
                                class="text-lg!"
                            />
                        </div>
                        <ul class="footerul space-y-2" v-if="toggleQuickLinks">
                            <li v-for="link in menuLinks" :key="link.key">
                                <a
                                    v-if="isExternalLink(link.to)"
                                    :href="link.to"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="block text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {{ link.label }}
                                </a>
                                <NuxtLink
                                    v-else
                                    :to="link.to"
                                    class="block text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {{ link.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Col 3: Extra links (doctors, book) -->
                    <div
                        class="flex md:hidden flex-col"
                        v-auto-animate="$autoAnimate"
                    >
                        <div
                            class="flex-between"
                            @click="toggleExtraLinks = !toggleExtraLinks"
                        >
                            <h5 class="text-sm font-semibold mb-4 text-white">
                                القائمة
                            </h5>
                            <AppIcon
                                v-bind="{ icon: 'chevrondown' }"
                                class="text-lg!"
                            />
                        </div>
                        <ul class="footerul space-y-2" v-if="toggleExtraLinks">
                            <li v-for="link in extraLinks" :key="link.name">
                                <NuxtLink
                                    :to="localePath({ name: link.name })"
                                    class="block text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {{ link.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Col 4: Google Map -->
                    <div
                        class="min-h-250 md:min-h-200 rounded-xl overflow-hidden bg-primary-700"
                    >
                        <div
                            class="googlemap w-full h-full min-h-200 md:min-h-250"
                        >
                            <iframe
                                :src="globalConfig.mapEmbedUrl"
                                title="Clinic Map"
                                class="w-full h-full min-h-200 md:min-h-250 border-0"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer bottom: copyright, payment logos, terms -->
        <div class="footerbot border-t border-white/10 py-6 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="flex-between flex-col md:flex-row gap-6">
                    <div class="fl-2">
                        <div class="md:order-1">
                            <p class="text-sm text-white/60">
                                © 2026، جميع الحقوق محفوظة عيادات سيتاديل
                            </p>
                        </div>
                        <ul
                            class="termsbx md:flex-center hidden flex-wrap gap-4 md:gap-6 order-3 text-sm"
                        >
                            <li v-for="link in termsLinks" :key="link.name">
                                <NuxtLink
                                    :to="$localePath({ name: link.name })"
                                    class="text-white/60 hover:text-white transition-colors"
                                >
                                    {{ link.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <ul class="fc gap-base">
                        <li
                            :key="idx"
                            v-for="(logo, idx) in globalConfig.paymentLogoUrls"
                        >
                            <div
                                class="clientbx bg-light px-2 py-1 flex-center rounded main-border"
                            >
                                <NuxtImg
                                    :key="idx"
                                    :src="logo"
                                    :alt="''"
                                    loading="lazy"
                                    class="h-8 w-auto object-contain max-w-[80px]"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { globalConfig } from "~/assets/config";

const localePath = useLocalePath();
const toggleQuickLinks = ref(false);
const toggleExtraLinks = ref(false);

const termsLinks = [
    { name: "terms" as const, label: "الشروط والأحكام" },
    { name: "privacy" as const, label: "سياسة الخصوصية" },
    { name: "cookies" as const, label: "سياسة ملفات تعريف الارتباط" },
];

const extraLinks = [
    { name: "doctors" as const, label: "فريقنا" },
    { name: "book" as const, label: "احجزي استشارة" },
    ...termsLinks,
];

const menuLinks = computed(() => [
    { key: "about", to: localePath({ name: "about" }), label: "من نحن" },
    { key: "services", to: localePath({ name: "services" }), label: "الخدمات" },
    { key: "doctors", to: localePath({ name: "doctors" }), label: "فريقنا" },
    {
        key: "news",
        to: "https://www.instagram.com/citadelclinics",
        label: "الأخبار",
    },
    { key: "contact", to: localePath({ name: "book" }), label: "تواصل معنا" },
    { key: "faq", to: localePath({ name: "faq" }), label: "الأسئلة الشائعة" },
]);

function isExternalLink(to: string): boolean {
    return (
        typeof to === "string" &&
        (to.startsWith("http://") || to.startsWith("https://"))
    );
}

const socialLinks = [
    {
        key: "instagram",
        href: "https://www.instagram.com/citadelclinics",
        label: "إنستغرام",
        icon: "social/instagram",
    },
    {
        key: "facebook",
        href: "https://www.facebook.com/profile.php?id=61575119901919",
        label: "فيسبوك",
        icon: "social/facebook",
    },
    {
        key: "tiktok",
        href: "https://www.tiktok.com/@citadelclinics",
        label: "تيك توك",
        icon: "social/tiktok",
    },
    {
        key: "snapchat",
        href: "https://www.snapchat.com/@citadelclinics",
        label: "سناب شات",
        icon: "social/snapchat",
    },
    {
        key: "whatsapp",
        href: `https://wa.me/${globalConfig.phone.replace(/\D/g, "")}`,
        label: "واتساب",
        icon: "social/whatsapp",
    },
];
</script>
