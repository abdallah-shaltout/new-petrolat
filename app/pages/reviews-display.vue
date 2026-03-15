<template>
    <div class="min-h-dvh w-full flex-center flex-col bg-primary-50/80 p-8">
        <h1 class="text-5xl md:text-4xl font-bold text-primary-700 mb-8 md:mb-2">
            قالوا عن سيتادل
        </h1>
        <div class="w-full max-w-5xl">
            <Splide
                :options="splideOptions"
                aria-label="Reviews display"
                dir="ltr"
                ref="splideRef"
                class="w-full max-w-md mx-auto mt-4 aspect-1/2 max-h-[80dvh]"
                @splide:mounted="onSplideMounted"
            >
                <SplideSlide
                    v-for="review in filteredReviews"
                    :key="review.reviewUrl"
                >
                    <PagesReviewsReviewDisplayCard
                        :review="review"
                        class="w-full h-full"
                    />
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-expect-error - no types for vue-splide
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { allReviews, type Review } from "~/assets/data/review";

const splideOptions = {
    type: "fade",
    rewind: true,
    perPage: 1,
    autoplay: true,
    interval: 5000,
    speed: 800,
    arrows: false,
    pagination: false,
};

const filteredReviews = computed(() => {
    return allReviews.filter((review: Review) => review.text !== null);
});
function onSplideMounted(splide: {
    Components?: { Autoplay?: { play: () => void } };
}) {
    nextTick(() => {
        splide.Components?.Autoplay?.play();
    });
}
useHead({
    title: "عرض التقييمات",
    meta: [
        {
            name: "description",
            content: "تقييمات عملائنا - عيادات سيتاديل",
        },
    ],
});
definePageMeta({
    layout: "blank",
});
</script>
