<template>
    <div>
        <!-- Hero Section -->
        <section class="pt-32 pb-20 px-6">
            <div class="max-w-7xl mx-auto">
                <p class="text-sm font-medium text-black mb-4">
                    {{ $t("book.hero.label") }}
                </p>
                <h1
                    class="text-8xl lg:text-7xl md:text-5xl font-bold text-black mb-8 leading-tight"
                >
                    {{ $t("book.hero.title") }}
                </h1>
                <p
                    class="text-lg text-black/80 mb-12 max-w-3xl leading-relaxed"
                >
                    {{ $t("book.hero.subtitle") }}
                </p>
            </div>
        </section>

        <!-- Booking Form & Info Section -->
        <section class="py-20 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-2 lg:grid-cols-1 gap-12">
                    <!-- Booking Form -->
                    <div
                        class="bg-white rounded-3xl p-8 border-2 border-black/10"
                    >
                        <h2
                            class="text-3xl md:text-2xl font-bold text-black mb-8"
                        >
                            {{ $t("book.hero.title") }}
                        </h2>
                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <div>
                                <label
                                    for="name"
                                    class="block text-sm font-medium text-black mb-2"
                                >
                                    {{ $t("book.form.name") }}
                                </label>
                                <input
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    required
                                    class="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-black focus:border-black/30 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label
                                    for="phone"
                                    class="block text-sm font-medium text-black mb-2"
                                >
                                    {{ $t("book.form.phone") }}
                                </label>
                                <input
                                    id="phone"
                                    v-model="form.phone"
                                    type="tel"
                                    required
                                    :class="[
                                        'w-full px-4 py-3 border-2 rounded-xl text-black focus:outline-none transition-colors',
                                        phoneError
                                            ? 'border-red-500 focus:border-red-600'
                                            : 'border-black/10 focus:border-black/30',
                                    ]"
                                    :placeholder="$t('book.form.phonePlaceholder')"
                                />
                                <p
                                    v-if="phoneError"
                                    class="mt-1.5 text-sm text-red-600"
                                >
                                    {{ phoneError }}
                                </p>
                            </div>

                            <div>
                                <label
                                    for="category"
                                    class="block text-sm font-medium text-black mb-2"
                                >
                                    {{ $t("book.form.category") }}
                                </label>
                                <select
                                    id="category"
                                    v-model="form.category"
                                    required
                                    class="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-black focus:border-black/30 focus:outline-none transition-colors"
                                >
                                    <option value="">
                                        {{ $t("book.form.selectCategory") }}
                                    </option>
                                    <option
                                        v-for="cat in categories"
                                        :key="cat.category"
                                        :value="cat.category"
                                    >
                                        {{ cat.category }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label
                                    for="service"
                                    class="block text-sm font-medium text-black mb-2"
                                >
                                    {{ $t("book.form.service") }}
                                </label>
                                <select
                                    id="service"
                                    v-model="form.service"
                                    required
                                    :disabled="!form.category"
                                    class="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-black focus:border-black/30 focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    <option value="">
                                        {{ $t("book.form.selectService") }}
                                    </option>
                                    <option
                                        v-for="s in filteredServices"
                                        :key="s.service"
                                        :value="s.service"
                                    >
                                        {{ s.service }}
                                    </option>
                                </select>
                            </div>
                            <div class="grid grid-cols-2 sm:grid-cols-1  gap-4">
                                <div>
                                    <label
                                        for="preferredDate"
                                        class="block text-sm font-medium text-black/80 mb-2"
                                    >
                                        {{ $t("book.form.preferredDate") }}
                                        <span class="text-black/50 text-xs"
                                            >({{ $t("book.form.optional") }})</span
                                        >
                                    </label>
                                    <select
                                        id="preferredDate"
                                        v-model="form.preferredDate"
                                        class="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-black focus:border-black/30 focus:outline-none transition-colors"
                                    >
                                        <option value="asap">
                                            {{ $t("book.form.soonestAvailable") }}
                                        </option>
                                        <option
                                            v-for="day in weekDays"
                                            :key="day.value"
                                            :value="day.value"
                                        >
                                            {{ day.label }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="preferredTime"
                                        class="block text-sm font-medium text-black/80 mb-2"
                                    >
                                        {{ $t("book.form.preferredTime") }}
                                        <span class="text-black/50 text-xs"
                                            >({{ $t("book.form.optional") }})</span
                                        >
                                    </label>
                                    <select
                                        id="preferredTime"
                                        v-model="form.preferredTime"
                                        class="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-black focus:border-black/30 focus:outline-none transition-colors"
                                    >
                                        <option value="asap">
                                            {{ $t("book.form.soonestAvailable") }}
                                        </option>
                                        <option
                                            v-for="slot in timeSlots12h"
                                            :key="slot.value"
                                            :value="slot.value"
                                        >
                                            {{ slot.label }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label
                                    for="message"
                                    class="block text-sm font-medium text-black mb-2"
                                >
                                    {{ $t("book.form.message") }}
                                </label>
                                <textarea
                                    id="message"
                                    v-model="form.message"
                                    rows="4"
                                    class="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-black focus:border-black/30 focus:outline-none transition-colors"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                class="w-full bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-black/90 transition-colors"
                            >
                                {{ $t("book.form.submit") }}
                            </button>
                        </form>
                    </div>

                    <!-- What to Expect -->
                    <div>
                        <h2
                            class="text-3xl md:text-2xl font-bold text-black mb-8"
                        >
                            {{ $t("book.info.title") }}
                        </h2>
                        <div class="space-y-6">
                            <div
                                v-for="item in infoItems"
                                :key="item.title"
                                class="border-2 border-black/10 rounded-3xl p-6 hover:border-black/30 transition-colors"
                            >
                                <h3
                                    class="text-xl md:text-lg font-semibold text-black mb-3"
                                >
                                    {{ item.title }}
                                </h3>
                                <p
                                    class="text-base text-black/70 leading-relaxed"
                                >
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="relative bg-black rounded-3xl overflow-hidden">
                    <img
                        src="https://framerusercontent.com/images/ZcoAt3kgedqxpvq139fxDx8G50.jpg"
                        alt=""
                        class="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                    <div class="relative z-10 p-20 md:p-12 text-center">
                        <h2
                            class="text-5xl md:text-3xl font-bold text-white mb-6"
                        >
                            {{ $t("book.cta.title") }}
                        </h2>
                        <p
                            class="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
                        >
                            {{ $t("book.cta.subtitle") }}
                        </p>
                        <div
                            class="flex flex-row sm:flex-col gap-4 justify-center"
                        >
                            <NuxtLink
                                :to="$localePath({ name: 'services' })"
                                class="bg-white text-black px-8 py-4 rounded-full text-base hover:bg-white/90 transition-colors"
                            >
                                {{ $t("book.cta.exploreServices") }}
                            </NuxtLink>
                            <NuxtLink
                                :to="$localePath({ name: 'about' })"
                                class="border-2 border-white text-white px-8 py-4 rounded-full text-base hover:bg-white hover:text-black transition-all"
                            >
                                {{ $t("book.cta.learnMore") }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { globalConfig } from "~/assets/config";
import servicesJson from "~/assets/data/services.json";

const { t } = useI18n();

type ServiceItem = { category: string; services: { service: string; price: number }[] };
const servicesData = servicesJson as ServiceItem[];

const form = ref({
    name: "",
    phone: "",
    category: "",
    service: "",
    preferredDate: "asap",
    preferredTime: "asap",
    message: "",
});

const today = new Date();
const weekDays = computed(() => {
    const days: { value: string; label: string }[] = [];
    const locale = "ar-SA";
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        const dateStr = d.toISOString().slice(0, 10);
        const dayName = d.toLocaleDateString(locale, { weekday: "long" });
        const dateLabel = d.toLocaleDateString(locale, {
            day: "numeric",
            month: "short",
        });
        days.push({
            value: dateStr,
            label: `${dayName} ${dateLabel}`,
        });
    }
    return days;
});

const timeSlots12h = computed(() => {
    const slots: { value: string; label: string }[] = [];
    for (let h = 9; h <= 20; h++) {
        for (const m of [0, 30]) {
            if (h === 20 && m === 30) break;
            const hour = h > 12 ? h - 12 : h;
            const ampm = h < 12 ? "ص" : "م";
            const min = m === 0 ? "00" : "30";
            const value = `${String(h).padStart(2, "0")}:${min}`;
            const label = `${hour}:${min} ${ampm}`;
            slots.push({ value, label });
        }
    }
    return slots;
});

const categories = computed(() => servicesData);

const filteredServices = computed(() => {
    const cat = form.value.category;
    if (!cat || !servicesData.length) return [];
    const found = servicesData.find((c) => c.category === cat);
    return found?.services ?? [];
});

watch(
    () => form.value.category,
    () => {
        form.value.service = "";
    }
);

function formatWhatsAppMessage() {
    const { name, phone, category, service, preferredDate, preferredTime, message } = form.value;
    const b = "\u2022";
    const lines = [
        "السلام عليكم",
        "",
        "ودي أحجز موعد للاستشارة عندكم إن شاء الله:",
        "",
        `${b} الاسم: ${name}`,
        `${b} رقم الجوال: ${phone}`,
        `${b} الفئة: ${category}`,
        `${b} الخدمة: ${service}`,
    ];
    const formatTime12h = (timeStr: string) => {
        const parts = timeStr.split(":").map(Number);
        const h = parts[0] ?? 9;
        const m = parts[1] ?? 0;
        const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
        const ampm = h < 12 ? "ص" : "م";
        return `${hour12}:${String(m).padStart(2, "0")} ${ampm}`;
    };
    if (preferredDate === "asap" || preferredTime === "asap") {
        lines.push("");
        lines.push(`${b} الموعد المفضل: أقرب وقت متاح`);
    } else if (preferredDate && preferredTime) {
        const d = new Date(preferredDate + "T12:00:00");
        const dayLabel = d.toLocaleDateString("ar-SA", { weekday: "long", day: "numeric", month: "short" });
        lines.push("");
        lines.push(`${b} الموعد المفضل: ${dayLabel} - ${formatTime12h(preferredTime)}`);
    } else if (preferredDate) {
        const d = new Date(preferredDate + "T12:00:00");
        const dayLabel = d.toLocaleDateString("ar-SA", { weekday: "long", day: "numeric", month: "short" });
        lines.push("");
        lines.push(`${b} اليوم المفضل: ${dayLabel}`);
    } else if (preferredTime) {
        lines.push("");
        lines.push(`${b} الوقت المفضل: ${formatTime12h(preferredTime)}`);
    }
    if (message?.trim()) {
        lines.push("");
        lines.push(`${b} ملاحظات: ${message.trim()}`);
    }
    lines.push("");
    lines.push("الله يعافيكم ويحفظكم، وشكراً لكم");
    return lines.join("\n");
}

const phoneError = ref("");

function validateSaudiPhone(input: string): string | null {
    if (!input?.trim()) return null;
    const digits = input.replace(/\D/g, "");
    if (digits.length < 9) return t("book.form.phoneErrorTooShort");
    if (digits.length > 14) return t("book.form.phoneErrorTooLong");
    if (!/^(009665|9665|05|5)[0-9]{8}$/.test(digits)) return t("book.form.phoneErrorInvalid");
    return null;
}

watch(
    () => form.value.phone,
    () => {
        phoneError.value = validateSaudiPhone(form.value.phone) ?? "";
    }
);

const handleSubmit = () => {
    const err = validateSaudiPhone(form.value.phone);
    if (err) {
        phoneError.value = err;
        return;
    }
    phoneError.value = "";
    const text = formatWhatsAppMessage();
    const phone = globalConfig.phone.replace(/\D/g, "");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
};

const infoItems = computed(() => [
    {
        title: t("book.info.items.consultation.title"),
        description: t("book.info.items.consultation.description"),
    },
    {
        title: t("book.info.items.assessment.title"),
        description: t("book.info.items.assessment.description"),
    },
    {
        title: t("book.info.items.plan.title"),
        description: t("book.info.items.plan.description"),
    },
    {
        title: t("book.info.items.support.title"),
        description: t("book.info.items.support.description"),
    },
]);
</script>
