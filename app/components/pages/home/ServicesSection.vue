<template>
    <section
        class="padding-section bg-primary-200"
        style="content-visibility: auto"
    >
        <div class="container">
            <div class="fc gap-xs text-sm text-priamry-700 mb-6">
                <AppIcon
                    class="text-sm"
                    v-bind="{
                        icon: 'circle-dot',
                    }"
                />
                <span>خدماتنا الأكثر طلبًا</span>
            </div>
            <div
                class="flex items-end w-full justify-between md:flex-col md:gap-y-6"
            >
                <p
                    class="text-4xl xl:text-3xl md:text-2xl sm:text-xl md:text-center text-primary-700 max-w-3xl xl:max-w-2xl md:max-w-full"
                >
                    علاجات متقدمة مصممة لاحتياج بشرتك، وتمنحك نتائج طبيعية تزيد
                    من إشراقتك كل يوم.
                </p>
                <NuxtLink
                    :to="$localePath({ name: 'services' })"
                    class="md:hidden"
                >
                    <button class="btn btn-primary btn-outline md:w-full">
                        <span> استكشفي جميع الخدمات </span>
                    </button>
                </NuxtLink>
            </div>

            <div
                class="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-large mt-20 md:mt-10 md:grid-cols-2"
            >
                <div
                    v-for="(item, idx) in list"
                    :key="idx"
                    class="border border-primary-200/40 bg-light overflow-hidden aspect-[3/3.8] flex-center flex-col"
                    :class="[
                        item.class,
                        item.image
                            ? 'rounded-t-full! rounded-b-lg! ring-2 ring-priamry  ring-offset-3 overflow-hidden'
                            : 'rounded-2xl',
                    ]"
                >
                    <NuxtImg
                        v-if="item.image"
                        :src="item.image"
                        :alt="item.name"
                        loading="lazy"
                        class="w-full h-full object-cover"
                    />
                    <AppIcon
                        class="mb-8 text-primary text-6xl"
                        v-else-if="item.icon"
                        v-bind="{ icon: item.icon }"
                    />
                    <h3
                        v-if="item.name"
                        class="text-2xl text-primary-700 font-bold"
                    >
                        {{ item.name }}
                    </h3>
                </div>
            </div>
            <NuxtLink
                :to="$localePath({ name: 'services' })"
                class="w-full hidden md:flex"
            >
                <button class="btn btn-primary btn-outline md:w-full">
                    <span> استكشفي جميع الخدمات </span>
                </button>
            </NuxtLink>

            <div
                class="mt-8 p-6 border border-primary-200/70 rounded-2xl bg-light flex-between sm:flex-col sm:gap-y-10"
            >
                <h2
                    class="text-xl text-primary-700 font-bold max-w-sm sm:max-w-xl sm:text-center"
                >
                    {{ $t("home.hero.promoBanner.title") }}
                </h2>
                <a
                    :href="globalConfig.bookingUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="sm:w-full"
                >
                    <button class="btn btn-primary sm:w-full">
                        احجزي موعدك الآن
                    </button>
                </a>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { globalConfig } from "~/assets/config";

const list = [
    {
        icon: "hair",
        name: "إزالة الشعر بالليزر",
        image: null,
        class: "order-1",
    },
    {
        icon: null,
        name: null,
        image: "/media/images/services/1.webp",
        class: "order-2",
    },
    {
        icon: "bolt",
        name: "الفركشنال ليزر",
        image: null,
        class: "order-3 md:order-4",
    },
    {
        icon: null,
        name: null,
        image: "/media/images/profile/4.webp",
        class: "order-4 md:order-3",
    },
    {
        icon: "tatoo",
        name: "إزالة التاتو بالليزر",
        image: null,
        class: "order-5",
    },
    {
        icon: null,
        name: null,
        image: "/media/images/profile/2.webp",
        class: "order-6",
    },
    {
        icon: "circle-dot",
        name: "حقن البوتوكس والفيلر",
        image: null,
        class: "order-7 md:order-8",
    },
    {
        icon: null,
        name: null,
        image: "/media/images/services/4.webp",
        class: "order-8 md:order-7",
    },
    {
        icon: "circle-dot",
        name: "علاج حب الشباب والتصبغات",
        image: null,
        class: "order-9",
    },
];
</script>
