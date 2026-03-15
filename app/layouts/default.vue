<template>
    <div>
        <VueLenis
            v-bind="{
                root: true,
                options: {
                    allowNestedScroll: true,
                },
            }"
        />
        <main id="main-content" role="main">
            <HeaderAppHeader />
            <NuxtPage />
            <AppFooter />
            <Transition name="fade" mode="out-in">
                <AppWhatsApp v-if="y > 50" />
            </Transition>
        </main>
    </div>
</template>
<script setup lang="ts">
import { VueLenis } from "lenis/vue";
import { fixScroll, useLang, useSeo } from "../libs";
const { y } = useScroll(import.meta.client ? window.document : null);

fixScroll();
useSeo();
useLang();
</script>
