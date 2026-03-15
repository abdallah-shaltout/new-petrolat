<template>
    <nav>
        <ul class="navbar-items">
            <li
                v-for="(navbar, idx) in navbars"
                :key="idx"
                class="relative"
                @mouseenter="onEnter(navbar, idx)"
                @mouseleave="scheduledClose()"
            >
                <!-- Mega menu: items present and megaMenu === true -->
                <template v-if="hasItems(navbar) && navbar.megaMenu">
                    <button
                        type="button"
                        class="navbar-item"
                        :class="{ 'navbar-item--open': openIndex === 'mega' }"
                        :aria-expanded="openIndex === 'mega'"
                        aria-haspopup="true"
                    >
                        {{ navbar.label }}
                    </button>
                    <NavbarServicesMegaMenu
                        :open="openIndex === 'mega'"
                        :items="navbar.items!"
                        @enter="cancelClose()"
                        @leave="scheduledClose()"
                        @clicked="openIndex = null"
                    />
                </template>
                <!-- Dropdown: items present and megaMenu not true -->
                <template v-else-if="hasItems(navbar)">
                    <button
                        type="button"
                        class="navbar-item"
                        :class="{ 'navbar-item--open': openIndex === idx }"
                        :aria-expanded="openIndex === idx"
                        aria-haspopup="true"
                    >
                        {{ navbar.label }}
                    </button>
                    <NavbarDropdown
                        :open="openIndex === idx"
                        :items="navbar.items!"
                        @clicked="openIndex = null"
                    />
                </template>
                <!-- Plain link: no items or empty items -->
                <NavbarItem v-else v-bind="{ navbar }" />
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import type { NavbarItem } from "~/shared/navbar";

const { navbars } = defineProps<{
    navbars: NavbarItem[];
}>();

type OpenState = number | "mega" | null;
const openIndex = ref<OpenState>(null);
let closeTimer: ReturnType<typeof setTimeout> | null = null;

function hasItems(navbar: NavbarItem): boolean {
    return Array.isArray(navbar.items) && navbar.items.length > 0;
}

function onEnter(navbar: NavbarItem, idx: number) {
    cancelClose();
    if (hasItems(navbar) && navbar.megaMenu) openIndex.value = "mega";
    else if (hasItems(navbar)) openIndex.value = idx;
}

function scheduledClose() {
    closeTimer = setTimeout(() => {
        openIndex.value = null;
    }, 120);
}

function cancelClose() {
    if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
    }
}
</script>
