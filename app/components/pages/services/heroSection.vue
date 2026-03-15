<template>
    <section class="min-h-[80dvh] bg-primary-100 flex-center">
        <div class="container">
            <div class="max-w-7xl mx-auto text-center sm:-mt-20">
                <h1
                    class="text-6xl lg:text-5xl md:text-4xl max-w-2xl md:max-w-full mx-auto font-bold text-primary mb-8 leading-relaxed"
                >
                    <span>خدمات عناية البشرة</span>
                    <br />
                    <span>بخبـــرة عاليــة</span>
                </h1>
                <div
                    class="flex flex-row sm:flex-col gap-4 justify-center items-center"
                >
                    <NuxtLink
                        :to="$localePath({ name: 'about' })"
                        class="btn btn-primary min-w-40"
                    >
                        حول سيتادل
                    </NuxtLink>
                    <a
                        :href="globalConfig.bookingUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-outline min-w-40"
                    >
                        احجزي استشارة
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { globalConfig } from "~/assets/config";
</script>
