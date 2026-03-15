<template>
    <div class="w-full hidden md:flex">
        <div
            class="max-w-nine w-full mx-auto px-6 py-2.5 fc justify-between gap-6"
        >
            <ul class="fc gap-6 flex-wrap">
                <li class="fc gap-2">
                    <AppIcon
                        name="location"
                        class="w-4 h-4 text-primary-700 shrink-0"
                    />
                    <a
                        :href="globalConfig.mapUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sm text-primary-900 hover:text-primary-600 transition-colors"
                    >
                        موقعنا
                    </a>
                </li>
                <li class="fc gap-2">
                    <i
                        class="pi pi-clock text-primary-700 text-sm shrink-0"
                        aria-hidden="true"
                    />
                    <span class="text-sm text-primary-900">
                        السبت–الخميس 9:00 ص – 9:00 م
                    </span>
                </li>
                <li class="fc gap-2">
                    <a
                        :href="`https://wa.me/${globalConfig.phone.replace(/\D/g, '')}`"
                        class="text-sm dir-ltr text-primary-900 hover:text-primary-600 transition-colors font-medium"
                    >
                        {{ globalConfig.phone }}
                    </a>
                    <div class="fc gap-xs">
                        <AppIcon
                            name="call"
                            class="w-4 h-4 text-primary-700 shrink-0"
                        />
                        <AppIcon
                            name="social/whatsapp"
                            class="w-4 h-4 text-primary-700 shrink-0"
                        />
                    </div>
                </li>
            </ul>
            <div class="fc gap-3">
                <ul class="fc gap-1.5">
                    <li v-for="social in headerSocialLinks" :key="social.key">
                        <a
                            :href="social.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-8 h-8 rounded-full bg-gray-800 text-white fc justify-center hover:bg-primary-600 transition-colors [&_svg]:w-4 [&_svg]:h-4"
                            :aria-label="social.key"
                        >
                            <AppIcon :name="social.icon" class="text-inherit" />
                        </a>
                    </li>
                </ul>
                <LangToggle
                    class="w-auto! h-9! px-3 rounded-lg border border-priamry-200 bg-white"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { globalConfig, headerSocialLinks } from "~/assets/config";
</script>
