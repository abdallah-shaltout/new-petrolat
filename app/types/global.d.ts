import type { ComponentCustomProperties } from "vue";
import type { AutoAnimateType } from "~/plugins/autoAnimateSettings";
import type { motionConfig } from "~/assets/data/animate";
type extra = ComponentCustomProperties;
declare module "vue" {
    interface ComponentCustomProperties extends extra {
        $autoAnimate: AutoAnimateType;
        $customMotions: typeof motionConfig;
    }
}

export {};
