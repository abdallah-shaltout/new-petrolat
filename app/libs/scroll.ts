import { useLenis } from "lenis/vue";

export function fixScroll() {
    const lenis = useLenis();
    onMounted(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (!lenis.value) return;

            const distance = window.innerHeight * 0.9;

            switch (e.key) {
                case "PageDown":
                    e.preventDefault();
                    lenis.value.scrollTo(window.scrollY + distance);
                    break;
                case "PageUp":
                    e.preventDefault();
                    lenis.value.scrollTo(window.scrollY - distance);
                    break;
                case "Home":
                    e.preventDefault();
                    lenis.value.scrollTo(0);
                    break;
                case "End":
                    e.preventDefault();
                    lenis.value.scrollTo(document.body.scrollHeight);
                    break;
            }
        };

        window.addEventListener("keydown", handleKeydown);

        onUnmounted(() => {
            window.removeEventListener("keydown", handleKeydown);
            if (lenis.value) {
                lenis.value.destroy();
            }
        });
    });
}
