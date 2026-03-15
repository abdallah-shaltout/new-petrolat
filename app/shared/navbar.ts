import type { routerType } from "~/types";

/** Single entry in a dropdown or mega menu. */
export interface NavbarSubItem {
    label: string;
    icon?: string;
    route: routerType;
}

export interface NavbarItem {
    label: string;
    icon?: string;
    route: routerType;
    /**
     * When set (non-empty array), this item is a dropdown or mega menu.
     * - megaMenu === true → mega menu (e.g. ServicesMegaMenu)
     * - otherwise → simple dropdown (NavbarDropdown)
     */
    items?: NavbarSubItem[];
    /** When true, use mega menu component; when items is set but megaMenu is not true, use dropdown. */
    megaMenu?: boolean;
}

export const navbarItems: NavbarItem[] = [
    {
        label: "الرئيسية",
        route: { name: "index" },
    },
    {
        label: "من نحن",
        route: { name: "about" },
    },
    {
        label: "خدماتنا",
        route: { name: "services" },
        megaMenu: true,
        items: [
            { label: "علاج حب الشباب", route: { name: "services" } },
            { label: "تجديد البشرة بالليزر", route: { name: "services" } },
            { label: "إزالة الشعر بالليزر", route: { name: "services" } },
        ],
    },
    {
        label: "المزيد",
        route: { name: "index" },
        items: [
            { label: "الأطباء", icon: "user", route: { name: "doctors" } },
            { label: "الأسئلة الشائعة", icon: "help", route: { name: "faq" } },
            { label: "احجز استشارة", icon: "mail", route: { name: "book" } },
        ],
    },
    {
        label: "الأطباء",
        route: { name: "doctors" },
    },
];
