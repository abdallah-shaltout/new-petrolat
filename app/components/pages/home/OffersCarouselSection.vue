<template>
    <section
        class="padding-section bg-white relative overflow-hidden"
        aria-labelledby="offers-carousel-heading"
    >
        <div class="container relative">
            <!-- Section header with animations -->
            <div class="text-center max-w-2xl mx-auto mb-12 md:mb-14">
                <p
                    v-motion-enter-bottom
                    :visible="{
                        ...$customMotions.enterBottom.active,
                        transition: {
                            ...$customMotions.enterBottom.active.transition,
                            delay: 0,
                        },
                    }"
                    class="text-sm font-medium text-primary-600 mb-3 flex justify-center gap-2"
                >
                    <AppIcon class="text-sm" name="circle-dot" />
                    {{ $t("home.offers.label") }}
                </p>
                <h2
                    id="offers-carousel-heading"
                    v-motion-enter-bottom
                    :visible="{
                        ...$customMotions.enterBottom.active,
                        transition: {
                            ...$customMotions.enterBottom.active.transition,
                            delay: 100,
                        },
                    }"
                    class="text-4xl xl:text-3xl md:text-2xl font-bold text-primary-700 mb-4"
                >
                    {{ $t("home.offers.title") }}
                </h2>
                <p
                    v-motion-enter-bottom
                    :visible="{
                        ...$customMotions.enterBottom.active,
                        transition: {
                            ...$customMotions.enterBottom.active.transition,
                            delay: 200,
                        },
                    }"
                    class="text-primary-600/90 text-lg md:text-base leading-relaxed"
                >
                    {{ $t("home.offers.description") }}
                </p>
            </div>

            <!-- Carousel with entrance animation -->
            <div class="relative">
                <Splide
                    dir="ltr"
                    class="w-full mt-4"
                    :options="splideOptions"
                    aria-label="Offers carousel"
                >
                    <SplideSlide
                        v-for="n in Array.from({ length: 5 })
                            .fill(null)
                            .map((_, index) => index + 1)"
                        :key="n"
                    >
                        <div class="h-full dir-rtl p-2 md:p-3">
                            <a
                                :href="globalConfig.bookingUrl"
                                target="_blank"
                                class="block overflow-hidden rounded-2xl bg-primary-50 aspect-3/4"
                            >
                                <NuxtImg
                                    :src="`/media/offers/${n}.webp`"
                                    :alt="''"
                                    loading="lazy"
                                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </a>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// @ts-expect-error - no types for vue-splide
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { globalConfig } from "~/assets/config";

const splideOptions = {
    type: "loop",
    autoplay: true,
    interval: 3000,
    focus: 0,
    perPage: 4,
    gap: "10px",
    pagination: false,
    arrows: false,
    breakpoints: {
        1280: { perPage: 3 },
        1024: { perPage: 2 },
        768: { perPage: 1 },
    },
};
</script>
