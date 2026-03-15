<template>
    <div>
        <!-- Hero Section -->
        <section class="pt-32 pb-20 px-6">
            <div class="max-w-7xl mx-auto">
                <p class="text-sm font-medium text-black mb-4">
                    {{ $t("faq.hero.label") }}
                </p>
                <h1
                    class="text-8xl lg:text-7xl md:text-5xl font-bold text-black mb-8 leading-tight"
                >
                    {{ $t("faq.hero.title") }}
                </h1>
                <p
                    class="text-lg text-black/80 mb-12 max-w-3xl leading-relaxed"
                >
                    {{ $t("faq.hero.subtitle") }}
                </p>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-20 px-6 bg-white">
            <div class="max-w-4xl mx-auto">
                <div class="space-y-4">
                    <div
                        v-for="(faq, index) in faqs"
                        :key="index"
                        v-auto-animate="$autoAnimate"
                        class="border-b border-black/10 pb-6"
                    >
                        <button
                            @click="toggleFaq(index)"
                            class="w-full flex-between group"
                        >
                            <span class="text-lg md:text-base sm:text-sm font-medium text-black pr-4 text-start">
                                {{ faq.question }}
                            </span>
                            <img
                                src="https://framerusercontent.com/images/Ppi0tDEPxCBNUK7dvl5EH2IvW7E.svg"
                                alt=""
                                class="h-6 w-6 transition-transform flex-shrink-0"
                                :class="{ 'rotate-180': openFaq === index }"
                            />
                        </button>
                        <div
                            v-if="openFaq === index"
                            class="mt-4 text-base text-black/70 leading-relaxed"
                        >
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <PagesHomeGetStartedSection />
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const openFaq = ref<number | null>(null);
const toggleFaq = (index: number) => {
    openFaq.value = openFaq.value === index ? null : index;
};

const faqs = computed(() => [
    {
        question: t("home.faq.items.skinConditions.question"),
        answer: t("home.faq.items.skinConditions.answer"),
    },
    {
        question: t("home.faq.items.booking.question"),
        answer: t("home.faq.items.booking.answer"),
    },
    {
        question: t("home.faq.items.preparation.question"),
        answer: t("home.faq.items.preparation.answer"),
    },
    {
        question: t("home.faq.items.sensitiveSkin.question"),
        answer: t("home.faq.items.sensitiveSkin.answer"),
    },
    {
        question: t("home.faq.items.results.question"),
        answer: t("home.faq.items.results.answer"),
    },
]);
</script>
