import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    // all locales that are supported
    locales: ["en", "tr", "es"],
    defaultLocale: "en",
    localePrefix: "never",
});
