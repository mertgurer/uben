import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    // all locales that are supported
    locales: ["en", "tr"],
    defaultLocale: "en",
    localePrefix: "never",
});
