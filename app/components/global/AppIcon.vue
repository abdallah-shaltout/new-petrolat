<template>
    <CustomIcon
        v-bind="{
            ...$attrs,
        }"
        :name="path"
        v-if="isCustom"
    />
    <i
        v-bind="{
            ...$attrs,
        }"
        :class="[path]"
        v-else
    />
</template>

<script setup lang="ts">
const { name, icon } = defineProps<{
    name?: string;
    icon?: string;
}>();

const path = computed(() => name || icon || "");
const isCustom = computed(() => !/(pi-|hgi-)/.test(path.value));
</script>
