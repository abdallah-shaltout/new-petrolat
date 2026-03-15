<template>
    <div
        class="bg-primary-200 rounded-3xl p-6 md:p-4 dir-rtl w-full main-border flex-center flex-col max-h-[80dvh]"
    >
        <div class="fc gap-2 mb-6">
            <AppIcon
                v-for="star in 5"
                :key="star"
                v-bind="{
                    icon: `${star <= review.stars ? 'star-fill' : 'star'}`,
                }"
                class="text-yellow-400! text-3xl!"
            />
        </div>
        <h4 class="text-2xl md:text-3xl font-semibold text-black mb-6">
            {{ review.name }}
        </h4>
        <p class="text-xl md:text-2xl text-black/80 leading-relaxed max-w-4xl">
            {{
                sliceString({
                    str: review.text ?? "",
                    ellipsis: "...",
                    max: 200,
                })
            }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { Review } from "~/assets/data/review";
import { sliceString } from "~/libs";

defineProps<{
    review: Review;
}>();
</script>
