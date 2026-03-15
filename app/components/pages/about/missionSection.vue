<template>
    <section class="padding-section">
        <div class="container">
            <div class="fs gap-base lg:flex-col lg:gap-y-10">
                <div class="flex-1 fl self-stretch">
                    <div class="fl-2">
                        <div class="fc gap-base">
                            <span
                                class="w-1.5 h-1.5 rounded-full bg-primary-400"
                            ></span>
                            <span class="text-primary-700 text-sm">مهمتنا</span>
                        </div>
                        <h2
                            class="text-5xl lg:text-4xl md:text-3xl text-primary-500 font-bold max-w-xl lg:max-w-full leading-snug"
                        >
                            نعتني ببشرتك… لتكون صحية ومشرقة دائمًا
                        </h2>
                    </div>
                    <div class="fl-2 mt-auto lg:mt-8">
                        <p
                            class="max-w-2xl lg:max-w-full text-lg lg:text-base sm:text-sm text-primary-600"
                        >
                            في سيتادل كلينك، رسالتنا هي تمكين كل مريضة من الوصول
                            إلى بشرة صحية ومشرقة من خلال رعاية طبية دقيقة وخبرة
                            موثوقة. نقدّم علاجات شخصية وتقنيات جلدية متقدمة
                            تمنحك نتائج حقيقية تستمر وتناسب احتياجاتك الخاصة.
                        </p>
                        <p
                            class="max-w-2xl lg:max-w-full text-lg lg:text-base sm:text-sm text-primary-600 mt-4"
                        >
                            نؤمن أن العناية بالبشرة تبدأ من اهتمام صادق وتفاصيل
                            تُحدث فرقًا. لذلك نسعى لخلق بيئة دافئة وداعمة تشعرين
                            فيها بالتقدير والراحة في كل زيارة. صحة بشرتك، جمالك،
                            وراحتك النفسية هي الدافع وراء كل ما نقوم به—ونعمل
                            بكل اهتمام لنساعدك على الظهور بأفضل صورة، والشعور
                            بثقة أكبر كل يوم.
                        </p>
                        <div
                            class="fc gap-base mt-10 sm:mt-6 sm:flex-col sm:gap-y-4"
                        >
                            <NuxtLink
                                :to="$localePath({ name: 'book' })"
                                class="btn btn-primary sm:w-full"
                            >
                                {{ $t("home.getStarted.bookConsultation") }}
                            </NuxtLink>
                            <NuxtLink
                                :to="$localePath({ name: 'services' })"
                                class="btn btn-primary btn-outline sm:w-full"
                            >
                                {{ $t("home.getStarted.exploreServices") }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div
                        class="w-full ms-auto md:max-w-lg max-w-lg h-full bg-primary-400 rounded-t-full rounded-xl aspect-[3/3.8] ring-2 ring-priamry-400 ring-offset-10 outline outline-priamry-300 outline-offset-4 md:mx-auto"
                    >
                        <NuxtImg
                            loading="lazy"
                            src="/media/landing/landing.webp"
                            class="w-full h-full rounded-b-sm rounded-t-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>
