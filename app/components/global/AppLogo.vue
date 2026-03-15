<template>
    <NuxtLink
        :to="
            $localePath({
                name: 'index',
            })
        "
        class="md:h-[60px] h-[40px] relative z-600 flex-center fc gap-xs rounded-xl overflow-hidden"
    >
        <NuxtImg
            loading="eager"
            :src="`/media/logo/${light ? 'light' : 'logo'}.webp`"
            class="h-full object-contain"
            format="webp"
            quality="85"
            alt="عيادات سيتاديل - Logo"
        />
    </NuxtLink>
</template>
<script setup lang="ts">
const { light = false } = defineProps<{
    light?: boolean;
}>();
</script>
