import { useLenis } from "lenis/vue";
export function useHeaderInteractive({
    minShowHeader = 300,
    onClose,
}: {
    minShowHeader?: number;
    onClose?: () => void;
}) {
    const { y, directions } = useScroll(
        import.meta.client ? window.document : null
    );
    const isScrollToTop = ref<boolean>(false);
    const showHeader = computed(() => {
        if (y.value < minShowHeader) return true;
        if (isScrollToTop.value) return true;
        return false;
    });

    // Check if user is in first 100dvh of scroll
    const isInFirst100dvh = computed(() => {
        if (!import.meta.client) return true;
        const viewportHeight = window.innerHeight;
        const scrollThreshold = viewportHeight; // 100dvh = 100% of viewport height
        return y.value < scrollThreshold;
    });

    watch(
        () => [directions.top, directions.bottom],
        ([top, bottom]) => {
            if (top) isScrollToTop.value = true;
            if (bottom) isScrollToTop.value = false;
        }
    );

    watch(showHeader, (val) => {
        if (!val) onClose?.();
    });

    return {
        showHeader,
        y,
        isInFirst100dvh,
    };
}

export function scrollToElement(id: string) {
    const lenis = useLenis();
    const element = document.getElementById(id.replace("#", ""));
    if (!element) return;
    lenis.value?.scrollTo(element, {
        duration: 1.7,
        easing: (t) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        },
    });
}
