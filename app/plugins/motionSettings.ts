import { motionConfig } from "~/assets/data/animate";

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.config.globalProperties.$customMotions = motionConfig;
});
