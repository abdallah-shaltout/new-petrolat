<template>
    <section class="full-section">
        <NuxtImg
            src="https://framerusercontent.com/images/ZcoAt3kgedqxpvq139fxDx8G50.jpg"
            alt=""
            loading="lazy"
            class="background-content"
        />
        <div
            class="flex-center flex-col gap-base bg-light/30 backdrop-blur-2xl rounded-3xl overflow-hidden w-full max-w-3xl p-10"
        >
            <p
                class="font-medium text-primary-700 mb-4 text-4xl text-center max-w-4/5 sm:max-w-full lg:text-3xl md:text-3xl"
            >
                هل أنتِ جاهزة لبدء رحلتك في العناية ببشرتك؟
            </p>

            <div class="fc sm:flex-col gap-large justify-center mt-10 sm:mt-6">
                <NuxtLink
                    :to="$localePath({ name: 'book' })"
                    class="btn btn-primary btn-outline"
                >
                    {{ $t("home.getStarted.bookConsultation") }}
                </NuxtLink>
                <NuxtLink
                    :to="$localePath({ name: 'services' })"
                    class="btn btn-primary"
                >
                    {{ $t("home.getStarted.exploreServices") }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
