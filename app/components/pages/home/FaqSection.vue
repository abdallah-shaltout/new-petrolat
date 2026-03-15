<template>
    <section class="py-20 px-6 bg-white">
        <div class="max-w-4xl mx-auto">
            <div class="mb-12">
                <p class="text-sm font-medium text-black mb-2">
                    {{ $t("home.faq.label") }}
                </p>
                <h2 class="text-5xl md:text-4xl font-bold text-black">
                    {{ $t("home.faq.title") }}
                </h2>
            </div>
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
                        <span
                            class="text-lg md:text-base sm:text-sm font-medium text-black pr-4 text-start"
                        >
                            {{ faq.question }}
                        </span>
                        <img
                            src="https://framerusercontent.com/images/Ppi0tDEPxCBNUK7dvl5EH2IvW7E.svg"
                            alt=""
                            class="h-6 w-6 transition-transform"
                            :class="{ 'rotate-180': openFaq === index }"
                        />
                    </button>
                    <div
                        v-if="openFaq === index"
                        class="mt-4 text-sm text-black/70"
                    >
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
            <div class="mt-12 text-center">
                <NuxtLink
                    :to="$localePath({ name: 'faq' })"
                    class="text-sm font-medium text-black hover:opacity-70 transition-opacity"
                >
                    {{ $t("home.faq.viewAll") }}
                </NuxtLink>
            </div>
        </div>
    </section>
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
