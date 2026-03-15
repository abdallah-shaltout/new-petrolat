<template>
    <button
        @click="ToggleLang"
        class="w-10 h-10 flex-center rounded-full main-border aspect-square"
        :aria-label="
            $t('accessibility.changeLanguage') ||
            `تغيير اللغة إلى ${nextLang?.name || currentLang?.name}`
        "
        type="button"
    >
        <template v-if="nextLang">
            <span
                :key="nextLang?.flag"
                :class="[
                    'fi text-base! rounded',
                    `fi-${nextLang?.flag.toLowerCase()}`,
                ]"
            ></span>
        </template>
        <template v-else>
            <span
                :key="currentLang?.flag"
                :class="[
                    'fi text-lg rounded',
                    `fi-${currentLang?.flag.toLowerCase()}`,
                ]"
            ></span>
        </template>
    </button>
</template>

<script setup lang="ts">
const { locale, setLocale, locales } = useI18n();

interface langTypes {
    code: (typeof locales.value)[number]["code"];
    name: string;
    flag: string;
    nextLang: string;
}

const currentLang = computed(() => {
    return locales.value.find(
        (item) => item.code === locale.value
    ) as unknown as langTypes;
});

const nextLang = computed(() => {
    return locales.value.find(
        (item) => item.code === currentLang.value.nextLang
    ) as unknown as langTypes;
});

function ToggleLang() {
    setLocale(nextLang.value?.code);
}
</script>

<style>
.lang-animation-enter-active,
.lang-animation-leave-active {
    transition: all 0.25s ease-out;
}

.lang-animation-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.lang-animation-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
