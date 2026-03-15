<template>
    <div>
        <!-- Hero Section -->
        <section class="pt-32 pb-20 px-6">
            <div class="max-w-7xl mx-auto">
                <p class="text-sm font-medium text-black mb-4">
                    {{ $t("news.hero.label") }}
                </p>
                <h1
                    class="text-8xl lg:text-7xl md:text-5xl font-bold text-black mb-8 leading-tight"
                >
                    {{ $t("news.hero.title") }}
                </h1>
                <p
                    class="text-lg text-black/80 mb-12 max-w-3xl leading-relaxed"
                >
                    {{ $t("news.hero.subtitle") }}
                </p>
            </div>
        </section>

        <!-- News Articles Section -->
        <section class="py-20 px-6 bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-2 lg:grid-cols-1 gap-8">
                    <NuxtLink
                        v-for="article in articles"
                        :key="article.title"
                        :to="
                            $localePath({
                                name: 'index',
                            })
                        "
                        class="group bg-white rounded-3xl overflow-hidden border-2 border-transparent hover:border-black/20 transition-colors"
                    >
                        <img
                            :src="article.image"
                            :alt="article.title"
                            class="w-full h-64 object-cover"
                        />
                        <div class="p-8">
                            <p class="text-xs text-black/50 mb-2">
                                {{ article.date }}
                            </p>
                            <h2
                                class="text-2xl md:text-xl font-semibold text-black mb-4"
                            >
                                {{ article.title }}
                            </h2>
                            <p
                                class="text-base text-black/70 mb-4 leading-relaxed"
                            >
                                {{ article.description }}
                            </p>
                            <span
                                class="text-sm font-medium text-black group-hover:opacity-70 transition-opacity"
                            >
                                {{ $t("home.news.learnMore") }}
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="relative bg-black rounded-3xl overflow-hidden">
                    <img
                        src="https://framerusercontent.com/images/ZcoAt3kgedqxpvq139fxDx8G50.jpg"
                        alt=""
                        class="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                    <div class="relative z-10 p-20 md:p-12 text-center">
                        <h2
                            class="text-5xl md:text-3xl font-bold text-white mb-6"
                        >
                            {{ $t("news.cta.title") }}
                        </h2>
                        <p
                            class="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
                        >
                            {{ $t("news.cta.subtitle") }}
                        </p>
                        <div
                            class="flex flex-row sm:flex-col gap-4 justify-center"
                        >
                            <NuxtLink
                                :to="$localePath({ name: 'book' })"
                                class="bg-white text-black px-8 py-4 rounded-full text-base hover:bg-white/90 transition-colors"
                            >
                                {{ $t("news.cta.bookConsultation") }}
                            </NuxtLink>
                            <NuxtLink
                                :to="$localePath({ name: 'services' })"
                                class="border-2 border-white text-white px-8 py-4 rounded-full text-base hover:bg-white hover:text-black transition-all"
                            >
                                {{ $t("news.cta.exploreServices") }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const articles = computed(() => [
    {
        title: t("home.news.items.mistakes.title"),
        image: "https://framerusercontent.com/images/7xrWKJCgLKms3Dhv1ox8pL8.jpg",
        date: t("home.news.items.mistakes.date"),
        description: t("home.news.items.mistakes.description"),
        link: t("home.news.items.mistakes.link"),
    },
    {
        title: t("home.news.items.chemicalPeels.title"),
        image: "https://framerusercontent.com/images/c40FvNWz2T28L8rW5qmeV6jkSs.jpg",
        date: t("home.news.items.chemicalPeels.date"),
        description: t("home.news.items.chemicalPeels.description"),
        link: t("home.news.items.chemicalPeels.link"),
    },
]);
</script>
