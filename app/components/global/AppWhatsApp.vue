<template>
    <a :href="whatsappUrl" target="_blank" class="fixed bottom-2 end-2 z-800">
        <button
            v-ripple
            class="w-12 aspect-square bg-green-500 text-light rounded-full animate-bounce"
            v-bind="{
                rounded: true,
                severity: 'success',
            }"
        >
            <div class="flex-center">
                <AppIcon
                    class="text-2xl trans"
                    v-bind="{
                        name: 'social/whatsapp',
                        filled: true,
                    }"
                />
            </div>
        </button>
    </a>
</template>

<script setup lang="ts">
import { globalConfig } from "~/assets/config";

const whatsappUrl = `https://wa.me/${globalConfig.phone.replace(/\D/g, "")}`;
</script>
