<template>
    <div class="about-page overflow-x-hidden">

        <!-- ════════════════ HERO — black bg / yellow + white text ════════════════ -->
        <section class="relative overflow-hidden bg-black py-24 md:py-36">
            <!-- Subtle grid -->
            <div class="pointer-events-none absolute inset-0 about-grid-dark" />
            <!-- Yellow glow -->
            <div
                class="pointer-events-none absolute -end-20 top-1/3 h-72 w-72 rounded-full bg-primary-500/10 blur-[90px]"
            />

            <div class="container relative z-10">
                <!-- Eyebrow -->
                <p
                    v-motion-enter-bottom
                    :visible="{
                        ...$customMotions.enterBottom.active,
                        transition: { ...$customMotions.enterBottom.active.transition, delay: 0 },
                    }"
                    class="mb-6 inline-flex items-center gap-3 text-primary-500 text-xs font-bold uppercase tracking-[0.25em]"
                >
                    <span class="block h-px w-10 bg-primary-500" />
                    من نحن
                </p>

                <!-- Heading -->
                <h1
                    v-motion-enter-bottom
                    :visible="{
                        ...$customMotions.enterBottom.active,
                        transition: { ...$customMotions.enterBottom.active.transition, delay: 120 },
                    }"
                    class="max-w-3xl text-4xl font-black leading-[1.15] tracking-tight text-white md:text-[3.5rem]"
                >
                    قصة بترولات منذ 2014
                    <br />
                    <span class="text-primary-500">نحو تجربة طريق أفضل</span>
                </h1>

                <!-- Body -->
                <p
                    v-motion-enter-bottom
                    :visible="{
                        ...$customMotions.enterBottom.active,
                        transition: { ...$customMotions.enterBottom.active.transition, delay: 240 },
                    }"
                    class="mt-7 max-w-lg text-white/55 text-base leading-loose md:text-lg"
                >
                    نعمل على بناء شبكة محطات تجمع بين الجودة التشغيلية وسرعة الخدمة وراحة
                    المسافر.
                </p>
            </div>
        </section>

        <!-- ════════════════ TIMELINE — white bg / black text / yellow accents ════════════════ -->
        <section class="overflow-hidden bg-white py-20 md:py-28">
            <div class="container">

                <!-- Section heading -->
                <div
                    v-motion-enter-bottom
                    :visible="{ ...$customMotions.enterBottom.active }"
                    class="mb-16"
                >
                    <p class="mb-3 inline-flex items-center gap-3 text-primary-600 text-xs font-bold uppercase tracking-[0.25em]">
                        <span class="block h-px w-10 bg-primary-500" />
                        مسيرتنا
                    </p>
                    <h2 class="text-3xl font-black text-black md:text-4xl">
                        محطات رئيسية في رحلتنا
                    </h2>
                </div>

                <!-- ── Desktop horizontal timeline ── -->
                <div class="hidden md:block">
                    <div class="relative">
                        <!-- Connecting line -->
                        <div
                            class="pointer-events-none absolute top-[22px] start-[calc(16.666%+22px)] end-[calc(16.666%+22px)] h-px timeline-line"
                        />

                        <div class="grid grid-cols-3">
                            <div
                                v-for="(item, idx) in milestones"
                                :key="item.year"
                                v-motion-enter-bottom
                                :visible="{
                                    ...$customMotions.enterBottom.active,
                                    transition: {
                                        ...$customMotions.enterBottom.active.transition,
                                        delay: idx * 180,
                                    },
                                }"
                                class="flex flex-col items-center px-8 text-center"
                            >
                                <!-- Dot -->
                                <div
                                    class="relative z-10 mb-8 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-white shadow-md transition-transform duration-300"
                                    :class="
                                        idx === 1
                                            ? 'bg-black scale-110'
                                            : 'bg-primary-500'
                                    "
                                >
                                    <span
                                        class="block h-2 w-2 rounded-full"
                                        :class="idx === 1 ? 'bg-primary-500' : 'bg-white'"
                                    />
                                </div>

                                <!-- Card -->
                                <div
                                    class="relative w-full rounded-2xl border border-black/8 bg-white p-5 text-start shadow-sm"
                                >
                                    <!-- Arrow -->
                                    <div
                                        class="absolute -top-[9px] inset-s-1/2 -translate-x-1/2 h-4 w-4 rotate-45 border-s border-t border-black/8 bg-white"
                                    />
                                    <p class="mb-2 text-[2.5rem] font-black leading-none text-primary-500 dir-ltr">
                                        {{ item.year }}
                                    </p>
                                    <p class="text-sm leading-relaxed text-black/60">
                                        {{ item.text }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ── Mobile vertical timeline ── -->
                <div class="md:hidden">
                    <div class="relative ps-9">
                        <div
                            class="absolute start-[13px] top-1 bottom-1 w-px bg-linear-to-b from-primary-500 via-black/20 to-transparent"
                        />
                        <div
                            v-for="(item, idx) in milestones"
                            :key="item.year"
                            v-motion-enter-bottom
                            :visible="{
                                ...$customMotions.enterBottom.active,
                                transition: {
                                    ...$customMotions.enterBottom.active.transition,
                                    delay: idx * 130,
                                },
                            }"
                            class="relative mb-5 last:mb-0"
                        >
                            <div
                                class="absolute -start-9 top-4 z-10 h-[26px] w-[26px] rounded-full border-4 border-white shadow"
                                :class="idx === 1 ? 'bg-black' : 'bg-primary-500'"
                            />
                            <div class="rounded-xl border border-black/8 bg-white p-4 shadow-sm">
                                <p class="mb-1 text-2xl font-black text-primary-500 dir-ltr">
                                    {{ item.year }}
                                </p>
                                <p class="text-sm leading-relaxed text-black/60">
                                    {{ item.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- ════════════════ TABS — black bg / yellow active / white text ════════════════ -->
        <section class="relative overflow-hidden bg-black py-20 md:py-28">
            <!-- Grid -->
            <div class="pointer-events-none absolute inset-0 about-grid-dark" />
            <!-- Yellow glow -->
            <div
                class="pointer-events-none absolute -start-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-primary-500/8 blur-[110px]"
            />

            <div class="container relative z-10">

                <!-- Section heading -->
                <div
                    v-motion-enter-bottom
                    :visible="{ ...$customMotions.enterBottom.active }"
                    class="mb-14"
                >
                    <p class="mb-3 inline-flex items-center gap-3 text-primary-500 text-xs font-bold uppercase tracking-[0.25em]">
                        <span class="block h-px w-10 bg-primary-500" />
                        هويتنا
                    </p>
                    <h2 class="text-3xl font-black text-white md:text-4xl">
                        رؤيتنا ورسالتنا
                    </h2>
                </div>

                <div class="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-14">

                    <!-- ── Tab buttons (vertical list) ── -->
                    <div
                        v-motion-enter-bottom
                        :visible="{
                            ...$customMotions.enterBottom.active,
                            transition: { ...$customMotions.enterBottom.active.transition, delay: 100 },
                        }"
                        class="md:col-span-2 space-y-2"
                    >
                        <button
                            v-for="(card, i) in cards"
                            :key="i"
                            class="group flex w-full cursor-pointer items-center gap-4 rounded-xl px-5 py-4 text-start transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary-500"
                            :class="
                                activeTab === i
                                    ? 'bg-primary-500 text-black'
                                    : 'bg-white/5 text-white/50 hover:bg-white/8 hover:text-white'
                            "
                            @click="activeTab = i"
                        >
                            <!-- Number -->
                            <span
                                class="shrink-0 text-xl font-black leading-none dir-ltr transition-opacity"
                                :class="activeTab === i ? 'opacity-35' : 'opacity-20 group-hover:opacity-30'"
                            >
                                {{ String(i + 1).padStart(2, "0") }}
                            </span>

                            <!-- Label -->
                            <span class="flex-1 text-base font-bold">
                                {{ card.title }}
                            </span>

                            <!-- Arrow badge -->
                            <span
                                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
                                :class="
                                    activeTab === i
                                        ? 'bg-black/12 text-black'
                                        : 'bg-white/8 text-white/30'
                                "
                            >
                                <AppIcon name="chevron-left" class="w-3 h-3" />
                            </span>
                        </button>
                    </div>

                    <!-- ── Tab content ── -->
                    <div
                        v-motion-enter-bottom
                        :visible="{
                            ...$customMotions.enterBottom.active,
                            transition: { ...$customMotions.enterBottom.active.transition, delay: 220 },
                        }"
                        class="md:col-span-3 flex items-start"
                    >
                        <Transition name="tab-slide" mode="out-in">
                            <div :key="activeTab" class="w-full pt-2 md:pt-0">
                                <!-- Ghost number — decorative background -->
                                <div
                                    class="pointer-events-none mb-[-1.5rem] select-none text-[8rem] font-black leading-none text-white/[0.03] dir-ltr"
                                    aria-hidden="true"
                                >
                                    {{ String(activeTab + 1).padStart(2, "0") }}
                                </div>

                                <!-- Yellow rule -->
                                <div class="mb-5 h-[3px] w-14 rounded-full bg-primary-500" />

                                <!-- Title -->
                                <h3 class="mb-5 text-3xl font-black text-primary-500 md:text-[2.5rem] leading-tight">
                                    {{ activeCard.title }}
                                </h3>

                                <!-- Description -->
                                <p class="max-w-sm text-base leading-loose text-white/55 md:text-lg">
                                    {{ activeCard.desc }}
                                </p>

                                <!-- Bottom rule -->
                                <div class="mt-10 h-px w-20 bg-white/10" />
                            </div>
                        </Transition>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
const activeTab = ref(0);
const activeCard = computed(() => cards[activeTab.value]!);

const milestones = [
    { year: "2014", text: "تأسيس بترولات في الرياض" },
    { year: "2018", text: "توسعة شبكة المحطات إقليمياً" },
    { year: "2026", text: "التركيز على تجربة رقمية متقدمة" },
];

const cards = [
    {
        title: "الرؤية",
        desc: "أن نكون الوجهة الأولى للمسافر في محطات الوقود والخدمات المرتبطة بالطريق.",
    },
    {
        title: "الرسالة",
        desc: "تقديم خدمة موثوقة وسريعة مع تجربة متكاملة داخل المحطة.",
    },
    {
        title: "القيم",
        desc: "الجودة، الأمان، احترام الوقت، والاهتمام بتفاصيل رحلة العميل.",
    },
];
</script>

<style scoped>
/* ── Grid texture for dark sections ── */
.about-grid-dark {
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 52px 52px;
}

/* ── Timeline connecting line ── */
.timeline-line {
    background: linear-gradient(
        to right,
        transparent,
        var(--color-primary-500),
        transparent
    );
    opacity: 0.35;
}

/* ── Tab content transition ── */
.tab-slide-enter-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.tab-slide-leave-active {
    transition: opacity 0.12s ease, transform 0.12s ease;
}
.tab-slide-enter-from {
    opacity: 0;
    transform: translateY(12px);
}
.tab-slide-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}
</style>
