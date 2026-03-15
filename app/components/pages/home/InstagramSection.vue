<template>
    <section class="full-section bg-primary-50" style="content-visibility: auto">
        <div class="container">
            <div class="padding-section">
                <div
                    class="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-large mt-20"
                >
                    <div
                        v-for="item in list"
                        :key="item.id"
                        class="border border-primary-200/40 bg-light overflow-hidden aspect-[4/3.8] rounded-2xl flex-center"
                    >
                        <NuxtImg
                            v-if="item.type === 'image'"
                            loading="lazy"
                            class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            :src="item.image"
                        />
                        <div
                            class="flex-center flex-col gap-base max-w-4/5 mx-auto"
                            v-else
                        >
                            <span class="text-primary-700 font-bold text-sm">
                                {{ item.label }}
                            </span>
                            <h3
                                class="text-2xl text-primary-700 font-bold text-center"
                            >
                                {{ item.title }}
                            </h3>
                            <a
                                :href="item.button?.link"
                                target="_blank"
                                class="btn btn-primary btn-outline mt-4"
                            >
                                {{ item.button?.text }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const list = [
    {
        id: 1,
        type: "image",
        image: "/media/images/instagram-section/1.webp",
    },
    {
        id: 2,
        type: "image",
        image: "/media/images/instagram-section/2.webp",
    },
    {
        id: 3,
        type: "image",
        image: "/media/images/instagram-section/3.webp",
    },
    {
        id: 4,
        type: "image",
        image: "/media/images/instagram-section/4.webp",
    },

    {
        id: 5,
        type: "action",
        label: "تابعونا",
        title: "انضمِّي لنا على إنستغرام واستمتعي بأحدث نصائح العناية بالبشرة",
        button: {
            text: "زيارة حساب إنستغرام",
            link: "https://www.instagram.com/citadelclinics",
        },
    },

    {
        id: 6,
        type: "image",
        image: "/media/images/profile/6.webp",
    },
    {
        id: 7,
        type: "image",
        image: "/media/images/profile/3.webp",
    },
    {
        id: 8,
        type: "image",
        image: "/media/images/instagram-section/7.webp",
    },
    {
        id: 9,
        type: "image",
        image: "/media/images/profile/7.webp",
    },
];
</script>
