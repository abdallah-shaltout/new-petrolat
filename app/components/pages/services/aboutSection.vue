<template>
    <div :dir="isAr ? 'rtl' : 'ltr'">
        <section class="section-padding bg-[#0F1F15] text-white">
            <div class="site-container">
                <p class="text-sm font-semibold text-[#C8982A]">
                    {{ isAr ? "من نحن" : "About Us" }}
                </p>
                <h1 class="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
                    {{
                        isAr
                            ? "قصة بترولات منذ 2014 نحو تجربة طريق أفضل"
                            : "Petrolat's story since 2014 toward a better road experience"
                    }}
                </h1>
                <p class="mt-5 max-w-2xl text-white/80">
                    {{
                        isAr
                            ? "نعمل على بناء شبكة محطات تجمع بين الجودة التشغيلية وسرعة الخدمة وراحة المسافر."
                            : "We build a station network that combines operational quality, fast service, and traveler comfort."
                    }}
                </p>
            </div>
        </section>

        <section class="section-padding bg-white">
            <div class="site-container">
                <h2 class="text-3xl font-bold text-[#0F1F15]">
                    {{
                        isAr
                            ? "محطات رئيسية في رحلتنا"
                            : "Milestones in our journey"
                    }}
                </h2>
                <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <article
                        v-for="item in milestones"
                        :key="item.year"
                        class="rounded-xl border border-[#d6dfd8] bg-[#F7FAF8] p-6"
                    >
                        <p class="text-2xl font-bold text-[#1C6B35]">
                            {{ item.year }}
                        </p>
                        <p class="mt-2 text-[#333333]">
                            {{ item.text[localeKey] }}
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section-padding bg-[#F7FAF8]">
            <div class="site-container">
                <h2 class="text-3xl font-bold text-[#0F1F15]">
                    {{ isAr ? "رؤيتنا ورسالتنا" : "Our Vision and Mission" }}
                </h2>
                <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <article
                        v-for="card in cards"
                        :key="card.title.en"
                        class="rounded-xl border border-[#d6dfd8] bg-white p-6"
                    >
                        <h3 class="font-bold text-[#1C6B35]">
                            {{ card.title[localeKey] }}
                        </h3>
                        <p class="mt-3 text-sm text-[#666666]">
                            {{ card.desc[localeKey] }}
                        </p>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const isAr = computed(() => locale.value === "ar");
const localeKey = computed<"ar" | "en">(() => (isAr.value ? "ar" : "en"));

const milestones = [
    {
        year: "2014",
        text: {
            ar: "تأسيس بترولات في الرياض",
            en: "Petrolat founded in Riyadh",
        },
    },
    {
        year: "2018",
        text: {
            ar: "توسعة شبكة المحطات إقليمياً",
            en: "Regional station network expansion",
        },
    },
    {
        year: "2026",
        text: {
            ar: "التركيز على تجربة رقمية متقدمة",
            en: "Focus on advanced digital customer experience",
        },
    },
];

const cards = [
    {
        title: { ar: "الرؤية", en: "Vision" },
        desc: {
            ar: "أن نكون الوجهة الأولى للمسافر في محطات الوقود والخدمات المرتبطة بالطريق.",
            en: "To be the first choice for travelers in fuel and road-related services.",
        },
    },
    {
        title: { ar: "الرسالة", en: "Mission" },
        desc: {
            ar: "تقديم خدمة موثوقة وسريعة مع تجربة متكاملة داخل المحطة.",
            en: "Deliver reliable, fast service with a complete in-station experience.",
        },
    },
    {
        title: { ar: "القيم", en: "Values" },
        desc: {
            ar: "الجودة، الأمان، احترام الوقت، والاهتمام بتفاصيل رحلة العميل.",
            en: "Quality, safety, time respect, and care for customer journey details.",
        },
    },
];
</script>
