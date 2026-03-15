<template>
  <span
    class="nuxt-icon"
    :class="{
      'nuxt-icon--fill': !filled,
      'nuxt-icon--stroke': hasStroke && !filled,
    }"
    v-html="icon"
  />
</template>

<script setup lang="ts">
interface Props {
  name: string;
  filled?: boolean;
}

const { filled = true, name } = defineProps<Props>();

const icon = ref<string>("");
const hasStroke = ref<boolean>(false);

async function getIcon(): Promise<void> {
  try {
    const iconsImport = import.meta.glob("/assets/icons/**/*.svg", {
      eager: false,
      query: "?raw",
      import: "default",
    });

    const iconPath = `/assets/icons/${name}.svg`;
    const iconLoader = iconsImport[iconPath];

    if (!iconLoader) {
      throw new Error(`Icon path not found: ${iconPath}`);
    }

    const rawIcon = (await iconLoader()) as string;

    hasStroke.value = rawIcon.includes("stroke");
    icon.value = rawIcon;
  } catch (error) {
    icon.value = "";
    hasStroke.value = false;
  }
}

// Load icon on mount and when name changes
watchEffect(() => {
  if (name) {
    getIcon();
  }
});
</script>

<style>
.nuxt-icon svg {
  width: 1em;
  vertical-align: middle;
}
.nuxt-icon.nuxt-icon--fill,
.nuxt-icon.nuxt-icon--fill * {
  fill: currentColor !important;
}

.nuxt-icon.nuxt-icon--stroke,
.nuxt-icon.nuxt-icon--stroke * {
  stroke: currentColor !important;
}
</style>
