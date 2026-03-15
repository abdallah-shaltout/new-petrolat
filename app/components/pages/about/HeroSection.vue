<template>
    <section class="min-h-[70dvh] bg-primary-700 flex-center">
        <div class="container">
            <div class="max-w-7xl mx-auto text-center sm:-mt-20">
                <h1
                    class="text-6xl lg:text-5xl md:text-4xl max-w-2xl md:max-w-full mx-auto font-bold text-light mb-8 leading-relaxed"
                >
                    <span>{{ $t("about.hero.title") }}</span>
                    <br />
                    <span>{{ $t("about.hero.titleBrand") }}</span>
                </h1>
                <div
                    class="flex flex-row sm:flex-col gap-4 justify-center items-center"
                >
                    <NuxtLink
                        :to="$localePath({ name: 'services' })"
                        class="btn btn-white min-w-40"
                    >
                        {{ $t("about.hero.exploreServices") }}
                    </NuxtLink>
                    <NuxtLink
                        :to="$localePath({ name: 'book' })"
                        class="btn btn-outline-white min-w-40"
                    >
                        {{ $t("about.hero.latestUpdates") }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>
