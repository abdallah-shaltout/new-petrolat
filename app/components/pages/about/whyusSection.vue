<template>
    <section class="padding-section bg-primary-50">
        <div class="container">
            <div class="flex-center flex-col gap-base sm:items-start">
                <div class="fc gap-base">
                    <span
                        class="w-1.5 h-1.5 rounded-full bg-primary-400"
                    ></span>
                    <span class="text-primary-700 text-sm"
                        >لماذا تختارون سيتادل كلينك؟</span
                    >
                </div>
                <h2
                    class="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-primary-500 text-center sm:text-start font-bold max-w-xl leading-snug"
                >
                    نقدّم لكم تجربة عناية مختلفة في عالم البشرة
                </h2>
            </div>

            <ul class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-base gap-y-20 mt-20">
                <li v-for="benefit in benefits" :key="benefit.title">
                    <div class="flex-center flex-col gap-base">
                        <div
                            class="w-14 h-14 rounded-xl bg-light border border-primary-300/40 flex-center"
                        >
                            <NuxtImg
                                :src="benefit.icon"
                                loading="lazy"
                                class="w-1/2 h-1/2 object-cover"
                            />
                        </div>

                        <h3 class="text-primary-600 text-2xl sm:text-xl font-bold mt-6">
                            {{ benefit.title }}
                        </h3>
                        <p
                            class="text-primary-600 text-sm max-w-3/5 sm:max-w-4/5 mx-auto text-center"
                        >
                            {{ benefit.text }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const benefits = [
    {
        icon: "https://framerusercontent.com/images/Q0DRPqiL4ulHKRMwWtj1d3DxVbI.svg",
        title: "أطباء مختصون",
        text: "فريقنا يضم نخبة من أطباء الجلدية المعتمدين بخبرة واسعة في العناية بالبشرة.",
    },
    {
        icon: "https://framerusercontent.com/images/FydQqaTGqbLXrzXupH435eDeNg.svg",
        title: "خطط علاج مخصصة",
        text: "نصمّم خطة العلاج بما يتناسب مع احتياجات بشرتك لضمان أفضل النتائج.",
    },
    {
        icon: "https://framerusercontent.com/images/5VvOhGpjTXT1zetqrNtTBMN9Z8.svg",
        title: "أحدث التقنيات",
        text: "نستخدم أجهزة وتقنيات متقدمة لضمان عناية آمنة وفعّالة.",
    },
    {
        icon: "https://framerusercontent.com/images/1HDAAFX8BLtKWFCpinOhhyu9EQ.svg",
        title: "بيئة مريحة وودّية",
        text: "عيادتنا تقدّم تجربة مريحة بدعم فريق محترف يهتم بكل التفاصيل.",
    },
    {
        icon: "https://framerusercontent.com/images/wacvYUvywA5nn8eZBnRYbdDuLw.svg",
        title: "ثقة عملائنا",
        text: "نفتخر بآراء وتجارب عملائنا التي جعلت سيتادل اسمًا موثوقًا في العناية بالبشرة.",
    },
    {
        icon: "https://framerusercontent.com/images/rYoJk3EpuE1TwHBNa004k2CMne8.svg",
        title: "سهولة الوصول والحجز",
        text: "مواعيد مرنة وخدمة حجز إلكتروني تجعل العناية ببشرتك أسهل من أي وقت.",
    },
];
</script>
