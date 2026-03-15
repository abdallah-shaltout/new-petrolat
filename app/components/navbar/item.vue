<template>
    <NuxtLink
        :to="$localePath(navbar.route)"
        class="navbar-item"
        @click="$emit('clicked')"
    >
        {{ navbar.label }}
    </NuxtLink>
</template>

<script setup lang="ts">
import type { NavbarItem } from "~/shared/navbar";

const { navbar } = defineProps<{
    navbar: NavbarItem;
}>();

defineEmits(["clicked"]);
</script>
