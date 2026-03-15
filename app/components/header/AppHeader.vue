<template>
    <header
        class="app-header"
        :class="[
            {
                '-translate-y-[200%]!': !showHeader,
            },
        ]"
    >
        <HeaderTopBar />
        <div
            class="container-fluid mx-auto flex-between flex-col md:flex-row mt-2"
        >
            <div class="header-container flex-row-reverse md:flex-row">
                <AppLogo />
                <div class="mx-auto">
                    <!-- Mobile Menu Button -->
                    <AppMenuBtn
                        :class="{ active: toggle }"
                        @click="toggle = !toggle"
                        class="md:hidden"
                        :aria-expanded="toggle"
                    />

                    <!-- Desktop Navbar -->
                    <Navbar
                        class="navbar"
                        :navbars="navbarItems"
                        role="navigation"
                        :aria-label="
                            $t('accessibility.mainNavigation') ||
                            'القائمة الرئيسية'
                        "
                    />
                </div>
            </div>
            <div class="flex-center gap-large md:hidden"></div>
            <nav
                id="mobile-menu"
                class="w-full min-h-dvh fixed start-0 top-0 t-trans z-200 bg-linear-to-tr from-primary-50 to-primary-100 backdrop-blur-xl flex-center"
                :class="{
                    'translate-x-full': !toggle,
                }"
                role="navigation"
                :aria-label="
                    $t('accessibility.mainNavigation') || 'القائمة الرئيسية'
                "
                :aria-hidden="!toggle"
            >
                <div class="container relative z-201">
                    <ul class="fl gap-y-8">
                        <li
                            v-for="(item, idx) in navbarItems"
                            :key="idx"
                            v-motion-magnetic-rise
                            :visible="{
                                ...$customMotions.enterBottom.active,
                                transition: {
                                    ...$customMotions.enterBottom.active
                                        .transition,
                                    delay: idx * 100,
                                },
                            }"
                            class="flex-center"
                        >
                            <NavbarItem
                                :navbar="item"
                                @clicked="toggle = false"
                                class="mobile"
                            />
                        </li>
                    </ul>
                </div>
                <div class="absolute left-4 bottom-4">
                    <LangToggle />
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { navbarItems } from "~/shared/navbar";
import { useHeaderInteractive } from "./header";
const toggle = ref(false);

const { showHeader } = useHeaderInteractive({
    minShowHeader: 150,
    onClose: () => {
        toggle.value = false;
    },
});
</script>
