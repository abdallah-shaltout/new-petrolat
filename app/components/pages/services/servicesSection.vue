<template>
    <section class="padding-section bg-primary-300/40">
        <div class="container">
            <div class="mt-20">
                <div class="fc gap-base">
                    <span
                        class="w-1.5 h-1.5 rounded-full bg-primary-400"
                    ></span>
                    <span class="text-primary-700 text-sm">خدماتنا</span>
                </div>
                <h2
                    class="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-primary-500 sm:text-start font-bold max-w-xl leading-snug"
                >
                    علاجات متخصصة لبشرة صحية ومشرقة
                </h2>

                <hr class="my-10 border-primary-200/40" />

                <div class="fl gap-y-40">
                    <div
                        v-for="category in fullList"
                        :key="category.title"
                        class="pb-4 border-b border-primary-200/40"
                    >
                        <h4
                            class="text-primary-600 text-2xl md:text-xl font-bold"
                        >
                            {{ category.title }}
                        </h4>
                        <ul
                            class="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-20 mt-8"
                        >
                            <li
                                v-for="service in category.services"
                                :key="service.label"
                                class="group"
                            >
                                <div
                                    class="flex-center flex-col gap-base aspect-[3/3.8] rounded-t-full bg-primary-50 border border-primary-200/40 ring-2 ring-offset-8 outline outline-offset-2 rounded-xl transition-colors group-hover:border-primary-300 group-hover:bg-primary-100"
                                >
                                    <p
                                        class="text-primary-600 text-lg md:text-base sm:text-sm font-bold lg:max-w-4/5 max-w-3/5 mx-auto text-center"
                                    >
                                        {{ service.label }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import servicesData from "~/assets/data/services.json";

const fullList = servicesData.map((category) => ({
    title: category.category,
    services: category.services.map((service) => ({
        label: service.service,
    })),
}));
</script>
