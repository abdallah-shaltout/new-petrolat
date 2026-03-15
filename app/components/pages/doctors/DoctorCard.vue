<template>
    <div class="fl">
        <div
            v-if="doctor.image"
            class="w-full overflow-hidden shrink-0 flex-center flex-col gap-base aspect-[3/3.8] rounded-t-full bg-primary-50 border border-primary-200/40 ring-2 ring-offset-8 outline outline-offset-2 rounded-xl"
        >
            <NuxtImg
                loading="lazy"
                :src="doctor.image"
                class="w-full h-full object-cover trans-all duration-500 hover:scale-105"
                :alt="doctor.name"
            />
        </div>
        <div class="py-6 flex-1 min-w-0">
            <h3 class="text-primary-600 font-bold text-xl">
                {{ doctor.name }}
            </h3>
            <p
                v-if="doctor.info"
                class="mt-2 text-primary-600/90 text-sm leading-relaxed line-clamp-2"
            >
                {{ doctor.info?.slice(0, 100) }}...
            </p>
            <div
                v-if="doctor.whatsappNumber || doctor.phoneNumber"
                class="mt-4 fc gap-base flex-wrap"
            >
                <a
                    v-if="doctor.whatsappNumber"
                    :href="`https://wa.me/${doctor.whatsappNumber}`"
                    class="btn btn-primary btn-small fc gap-base min-w-24"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AppIcon name="social/whatsapp" class="text-inherit" />
                    {{ $t("about.team.whatsapp") }}
                </a>
                <a
                    v-if="doctor.phoneNumber"
                    :href="`tel:${doctor.phoneNumber}`"
                    class="btn btn-primary btn-outline btn-small fc gap-base min-w-24"
                >
                    <AppIcon name="call" class="text-inherit" />
                    {{ $t("about.team.call") }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Doctor } from "~/assets/data/doctor";

defineProps<{
    doctor: Doctor & {
        whatsappNumber?: string;
        phoneNumber?: string;
    };
}>();
</script>
