<template>
    <!--
        Backdrop: teleported to body so it covers the full page visually.
        z-[50] keeps it well below the header (z-800), so the mega menu panel
        (inside the header's stacking context) always paints on top.
        pointer-events-none: never intercepts mouse events → zero flicker.
        The menu closes via mouseleave + debounce; no click-backdrop needed.
    -->
    <Teleport to="body">
        <Transition name="mega-backdrop">
            <div
                v-show="open"
                class="fixed inset-0 z-50 bg-black/20 backdrop-blur-[3px] pointer-events-none"
                aria-hidden="true"
            />
        </Transition>
    </Teleport>

    <!--
        Outer wrapper: starts at top-full (no physical gap → no mouseleave flicker).
        pt-2 provides the visual breathing room without breaking hover continuity.
    -->
    <Transition name="mega-menu">
        <div
            v-show="open"
            class="absolute top-full start-1/2 translate-x-1/2 z-1000 pt-2 w-[min(94vw,780px)]"
            @mouseenter="$emit('enter')"
            @mouseleave="$emit('leave')"
        >
            <!-- Visual panel -->
            <div
                class="rounded-2xl border border-primary-200/60 bg-white shadow-[0_12px_48px_-6px_rgba(0,0,0,0.18),0_4px_16px_-4px_rgba(0,0,0,0.08)] overflow-hidden"
            >
                <!-- ── Header ── -->
                <div
                    class="flex items-center justify-between px-5 py-3.5 border-b border-primary-100 bg-linear-to-l from-primary-50/80 to-white"
                >
                    <div class="flex items-center gap-2.5">
                        <span
                            class="block w-[3px] h-5 rounded-full bg-primary-500"
                        />
                        <span
                            class="text-xs font-bold uppercase tracking-widest text-primary-700 select-none"
                        >
                            {{ $t("navbar.services") || "خدماتنا" }}
                        </span>
                    </div>

                    <NuxtLink
                        :to="$localePath({ name: 'services' })"
                        class="flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-900 transition-colors duration-150"
                        @click="$emit('clicked')"
                    >
                        {{ $t("navbar.allServices") }}
                        <AppIcon name="chevron-left" class="w-3 h-3" />
                    </NuxtLink>
                </div>

                <!-- ── Services grid ── -->
                <div class="p-4 sm:p-5">
                    <!--
                        v-if="open" forces a re-mount each time the panel opens,
                        replaying the CSS stagger animation on every open.
                    -->
                    <ul
                        v-if="open && items.length"
                        class="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 gap-1"
                        role="list"
                    >
                        <li
                            v-for="(item, idx) in items"
                            :key="item.label"
                            class="mega-item"
                            :style="{ animationDelay: `${idx * 45}ms` }"
                        >
                            <NuxtLink
                                :to="$localePath(item.route)"
                                class="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-100 active:bg-primary-200/70 transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70"
                                @click="$emit('clicked')"
                            >
                                <span
                                    class="w-7 h-7 shrink-0 rounded-lg flex items-center justify-center bg-primary-200/70 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all duration-150"
                                >
                                    <AppIcon
                                        name="chevron-left"
                                        class="w-3.5 h-3.5"
                                    />
                                </span>
                                <span
                                    class="text-sm text-primary-700 font-medium leading-snug group-hover:text-primary-950 transition-colors duration-150"
                                >
                                    {{ item.label }}
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>

                    <!-- Empty-state fallback -->
                    <p
                        v-else-if="open && !items.length"
                        class="text-sm text-primary-400 text-center py-6"
                    >
                        {{ $t("navbar.noServices") || "لا توجد خدمات متاحة" }}
                    </p>
                </div>

                <!-- ── Footer CTA ── -->
                <div v-if="items.length" class="px-4 sm:px-5 pb-4 sm:pb-5">
                    <NuxtLink
                        :to="$localePath({ name: 'services' })"
                        class="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-xl font-semibold text-sm transition-colors duration-150"
                        @click="$emit('clicked')"
                    >
                        {{ $t("navbar.allServices") }}
                        <AppIcon name="chevron-left" class="w-4 h-4" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import type { NavbarSubItem } from "~/shared/navbar";

defineProps<{
    open: boolean;
    items: NavbarSubItem[];
}>();

defineEmits<{
    enter: [];
    leave: [];
    clicked: [];
}>();
</script>

<style scoped>
/* ── Panel transition ── */
.mega-menu-enter-active,
.mega-menu-leave-active {
    transition:
        opacity 0.18s ease,
        transform 0.18s ease;
}
.mega-menu-enter-from,
.mega-menu-leave-to {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
}

/* ── Backdrop transition ── */
.mega-backdrop-enter-active,
.mega-backdrop-leave-active {
    transition: opacity 0.22s ease;
}
.mega-backdrop-enter-from,
.mega-backdrop-leave-to {
    opacity: 0;
}

/* ── Staggered item entrance ── */
.mega-item {
    animation: item-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes item-in {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
