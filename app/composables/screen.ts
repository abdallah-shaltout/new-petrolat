export const useScreen = () => {
  const { width } = useWindowSize();
  return {
    isMobile: computed(() => width.value <= 768),
    isTablet: computed(() => width.value <= 992),
    isLaptop: computed(() => width.value <= 1200),
    isDesktop: computed(() => width.value > 992),
  };
};
