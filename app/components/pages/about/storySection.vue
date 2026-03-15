<template>
    <section>
        <div class="container">
            <NuxtImg
                loading="lazy"
                src="/media/landing/landing.webp"
                class="w-full aspect-6/3 lg:aspect-5/3 md:aspect-4/3 sm:-mt-20 -mt-32 rounded-3xl object-cover"
            />

            <div class="fl-5 mt-40">
                <div class="fc gap-base">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span class="text-primary-700 text-sm">{{ $t("about.story.label") }}</span>
                </div>

                <div class="fs gap-large text-2xl lg:text-xl md:text-lg sm:text-base gap-y-10 text-primary-500 md:flex-col">
                    <div class="flex-1 space-y-8">
                        <p class="max-w-4/5 lg:max-w-full leading-relaxed">
                            {{ $t("about.story.paragraph1") }}
                        </p>
                        <p class="max-w-4/5 lg:max-w-full leading-relaxed">
                            {{ $t("about.story.paragraph2") }}
                        </p>
                        <p class="max-w-4/5 lg:max-w-full leading-relaxed">
                            {{ $t("about.story.paragraph3") }}
                        </p>
                    </div>
                    <div class="flex-1 space-y-8">
                        <p class="max-w-4/5 lg:max-w-full leading-relaxed font-medium text-primary-600">
                            {{ $t("about.story.paragraph4") }}
                        </p>
                        <p class="max-w-4/5 lg:max-w-full leading-relaxed">
                            {{ $t("about.story.paragraph5") }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>
