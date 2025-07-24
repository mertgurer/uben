import { cmToInchesRatio, kgToPoundsRatio } from "@/constants/constants";
import { ProductDetailModel } from "@/data/productData";

export const DateHelpers = {
    monthToNumber: (month: string): number => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        return months.indexOf(month) + 1;
    },
};

export const ContactHelpers = {
    openMail: (mail: string) => {
        const recipient = mail;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
            ""
        )}&body=${encodeURIComponent("")}`;

        window.location.href = mailtoLink;
    },

    copyToClipboard(text: string) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(
                () => {
                    console.log("Text copied to clipboard:", text);
                },
                (err) => {
                    console.error("Failed to copy text: ", err);
                }
            );
        } else {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand("copy");
                console.log("Fallback copy successful:", text);
            } catch (err) {
                console.error("Fallback copy failed:", err);
            }
            document.body.removeChild(textarea);
        }
    },
};

export const ProductDisplayHelpers = {
    formatProductValue: (
        key: keyof ProductDetailModel,
        productDetail: ProductDetailModel,
        measurement: "metric" | "imperial"
    ) => {
        let displayValue;
        const value = productDetail[key];

        if (typeof value.data === "number") {
            if (measurement !== "metric" && value.unit === "length") {
                displayValue = (value.data / cmToInchesRatio).toFixed(2);
            } else if (measurement !== "metric" && value.unit === "weight") {
                displayValue = (value.data * kgToPoundsRatio).toFixed(2);
            } else {
                displayValue = value.data;
            }
        } else if (typeof value.data === "object" && value.data !== null) {
            if (measurement !== "metric" && value.unit === "length") {
                displayValue = Object.values(value.data)
                    .map((x) => (x / cmToInchesRatio).toFixed(2))
                    .join(" x ");
            } else if (measurement !== "metric" && value.unit === "weight") {
                displayValue = Object.values(value.data)
                    .map((x) => (x * kgToPoundsRatio).toFixed(2))
                    .join(" x ");
            } else {
                displayValue = Object.values(value.data).join(" x ");
            }
        }

        return displayValue;
    },

    formatProductUnit: (unit: string, measurement: "metric" | "imperial") => {
        return unit === "length"
            ? measurement === "metric"
                ? `Product.cm`
                : `Product.inch`
            : unit === "weight"
            ? measurement === "metric"
                ? `Product.kg`
                : `Product.pound`
            : `Product.${unit}`;
    },
};
