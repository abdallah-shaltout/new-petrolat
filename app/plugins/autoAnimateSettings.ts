const autoAnimateSettings = {
    disrespectUserMotionPreference: true,
    easing: "ease-in-out",
    duration: 300,
} as const;

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.config.globalProperties.$autoAnimate = autoAnimateSettings;
});
