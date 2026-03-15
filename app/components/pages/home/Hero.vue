<template>
    <div
        class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
        <div class="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2560&auto=format&fit=crop"
                alt="Futuristic Highway"
                class="w-full h-full object-cover opacity-60"
            />
            <div
                class="absolute inset-0 bg-linear-to-b from-petrol-900/50 via-petrol-900/20 to-petrol-900"
            />
            <div class="absolute inset-0 mix-blend-overlay" />
        </div>

        <div
            class="absolute inset-0 z-0 opacity-20 pointer-events-none"
            :style="gridStyle"
        />

        <div class="relative z-10 container mx-auto px-6 text-center">
            <h1
                class="font-display font-bold text-6xl md:text-9xl text-light mb-2 tracking-tight uppercase drop-shadow-2xl"
            >
                بشرتك تستحق أن تشع بثقة
            </h1>
            <h2
                class="font-display font-bold text-4xl md:text-6xl text-gold-400 mb-8 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
            >
                احجزي استشارتك المجانية الآن
            </h2>
            <p
                class="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 font-light leading-relaxed"
            >
                نحن هنا لنمنحك الحلول الحقيقية التي تريحك نفسياً وتعيد ثقتك
                بنفسك. فريقنا المتخصص يعمل على حل مشاكلك الجلدية من جذورها.
            </p>
            <div
                class="flex flex-col md:flex-row items-center justify-center gap-6"
            >
                <button
                    type="button"
                    class="group relative px-8 py-4 bg-primary-500 text-black font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                >
                    <span class="relative z-10 flex items-center gap-2">
                        احجزي استشارتك المجانية الآن
                    </span>
                    <div
                        class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    />
                </button>
                <button
                    type="button"
                    class="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                >
                    اكتشفي حلولنا المتخصصة
                </button>
            </div>
        </div>

        <div
            class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70"
        >
            <span class="text-[10px] uppercase tracking-[0.3em] text-gold-400">
                مرري للأسفل
            </span>
            <div
                class="w-6 h-10 border border-gold-400/50 rounded-full flex justify-center p-1"
            >
                <div class="w-1 h-2 bg-gold-400 rounded-full animate-ping" />
            </div>
        </div>

        <div
            class="absolute top-1/4 left-10 hidden lg:block glass-card p-4 rounded-xl border-l-4 border-gold-400 max-w-xs animate-pulse"
        >
            <div class="flex items-center gap-3 mb-2">
                <div class="w-2 h-2 rounded-full bg-green-500" />
                <span
                    class="text-xs font-bold text-gold-400 uppercase tracking-widest"
                >
                    حالة النظام
                </span>
            </div>
            <p class="text-sm text-gray-300 font-mono">
                تحسين الشبكة: 99.9%<br />تدفق الحركة: مثالي
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const gridStyle = {
    backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
    backgroundSize: "50px 50px",
};
</script>
