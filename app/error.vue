<template>
    <div class="error-page full-section relative overflow-hidden">
        <!-- Gradient Overlay -->
        <div
            class="absolute inset-0 bg-linear-to-b from-primary-background/80 via-primary-background/60 to-primary-background/80 z-1"
        />

        <!-- Content Container -->
        <div
            class="container mx-auto px-6 md:px-4 h-full flex-center relative z-2"
        >
            <div class="text-center space-y-12 w-full max-w-5xl">
                <!-- Large 404 Number -->
                <div v-motion-enter-bottom class="error-number-container">
                    <h1
                        class="error-number text-7xl lg:text-6xl md:text-4xl font-black leading-none"
                    >
                        404
                    </h1>
                    <!-- Decorative Elements -->
                    <div
                        class="error-number-decoration absolute inset-0 flex-center"
                        v-motion-enter-bottom
                        :visible="{
                            ...$customMotions.enterBottom.active,
                            transition: {
                                ...$customMotions.enterBottom.active.transition,
                                delay: 300,
                            },
                        }"
                    >
                        <div
                            class="w-64 h-64 xl:w-56 xl:h-56 lg:w-48 lg:h-48 md:w-40 md:h-40 rounded-full border-4 border-primary/20 animate-pulse"
                        />
                        <div
                            class="w-48 h-48 xl:w-40 xl:h-40 lg:w-32 lg:h-32 md:w-28 md:h-28 rounded-full border-2 border-primary/30 absolute animate-pulse"
                            style="animation-delay: 0.5s"
                        />
                    </div>
                </div>

                <!-- Main Message -->
                <div
                    v-motion-enter-bottom
                    :visible="{
                        ...$customMotions.enterBottom.active,
                        transition: {
                            ...$customMotions.enterBottom.active.transition,
                            delay: 400,
                        },
                    }"
                    class="space-y-6 pt-12"
                >
                    <h2
                        class="text-5xl xl:text-4xl lg:text-3xl md:text-2xl font-bold text-primary leading-tight"
                    >
                        الصفحة غير موجودة
                    </h2>
                    <p
                        class="text-xl lg:text-lg md:text-base text-primary max-w-2xl mx-auto leading-relaxed"
                    >
                        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
                        <br />
                        يمكنك العودة إلى الصفحة الرئيسية أو استكشاف موقعنا.
                    </p>
                </div>

                <!-- Action Buttons -->
                <div
                    v-motion-enter-bottom
                    :visible="{
                        ...$customMotions.enterBottom.active,
                        transition: {
                            ...$customMotions.enterBottom.active.transition,
                            delay: 600,
                        },
                    }"
                    class="flex-center gap-6 md:gap-4 flex-wrap"
                >
                    <NuxtLink
                        :to="$localePath({ name: 'index' })"
                        class="btn btn-primary btn-large flex-center gap-2 group"
                    >
                        <span>العودة إلى الرئيسية</span>
                        <AppIcon
                            v-bind="{
                                name: 'chevron-left',
                                filled: true,
                            }"
                            class="text-lg"
                        />
                    </NuxtLink>
                    <button
                        @click="goBack"
                        class="btn btn-outline btn-large flex-center gap-2 group"
                    >
                        <span>العودة للخلف</span>
                        <AppIcon
                            v-bind="{
                                name: 'chevron-left',
                                filled: true,
                            }"
                            class="text-lg"
                        />
                    </button>
                </div>

                <!-- Floating Icons Decoration -->
                <div
                    class="absolute inset-0 pointer-events-none overflow-hidden"
                    v-motion-fade-in
                    :visible="{
                        ...$customMotions.fadeIn.active,
                        transition: {
                            ...$customMotions.fadeIn.active.transition,
                            delay: 800,
                        },
                    }"
                >
                    <div
                        class="absolute top-20 left-10 w-16 h-16 opacity-10 text-primary animate-float"
                        style="animation-delay: 0s"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                            />
                        </svg>
                    </div>
                    <div
                        class="absolute bottom-20 right-10 w-12 h-12 opacity-10 text-primary animate-float"
                        style="animation-delay: 1s"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                            />
                        </svg>
                    </div>
                    <div
                        class="absolute top-1/2 left-1/4 w-10 h-10 opacity-10 text-primary animate-float"
                        style="animation-delay: 2s"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

defineProps({
    error: {
        type: Object,
        default: () => ({}),
    },
});
clearError({ redirect: localePath({ name: "index" }) });

const router = useRouter();

const goBack = () => {
    if (window.history.length > 1) {
        router.back();
    } else {
        navigateTo(localePath({ name: "index" }));
    }
};

useHead({
    title: "404 - الصفحة غير موجودة",
    meta: [
        {
            name: "description",
            content: "الصفحة التي تبحث عنها غير موجودة",
        },
    ],
});
</script>

<style>
@reference "~/assets/css/master.css";
.error-page {
    min-height: 100dvh;
}

.error-number-container {
    @apply relative flex-center;
    perspective: 1000px;
}

.error-number {
    @apply relative z-2;
    background: linear-gradient(
        135deg,
        var(--color-primary) 0%,
        var(--color-primary) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: gradient-shift 4s ease infinite;
    filter: drop-shadow(0 0 30px rgba(0, 123, 255, 0.3));
}

.error-number-decoration {
    pointer-events: none;
}

@keyframes gradient-shift {
    0%,
    100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Desktop-first responsive adjustments */
@media (max-width: 1024px) {
    .error-number {
        filter: drop-shadow(0 0 20px rgba(0, 123, 255, 0.25));
    }
}

@media (max-width: 768px) {
    .error-number {
        filter: drop-shadow(0 0 15px rgba(0, 123, 255, 0.2));
    }
}
</style>
