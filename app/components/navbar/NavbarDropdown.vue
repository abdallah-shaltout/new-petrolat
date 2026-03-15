<template>
    <Transition name="dropdown">
        <div
            v-show="open"
            class="navbar-dropdown absolute top-full start-0 mt-1 min-w-48 rounded-lg border border-primary-200/60 bg-white shadow-xl py-1 z-1000"
            @mouseenter="$emit('enter')"
            @mouseleave="$emit('leave')"
        >
            <ul class="flex flex-col" role="list">
                <li v-for="(item, idx) in items" :key="idx">
                    <NuxtLink
                        :to="$localePath(item.route)"
                        class="flex items-center gap-2 px-4 py-2.5 text-primary-700 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                        @click="$emit('clicked')"
                    >
                        <AppIcon
                            v-if="item.icon"
                            :name="item.icon"
                            class="w-4 h-4 shrink-0 text-primary-400"
                        />
                        <span>{{ item.label }}</span>
                    </NuxtLink>
                </li>
            </ul>
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
.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>
