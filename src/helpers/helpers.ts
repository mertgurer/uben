import { LocaleTypes } from "@/i18n/routing";
import { CountDataModel } from "@/models/CountDataModel";
import { DataModel, DataUnitType, UnitType } from "@/models/DataModel";
import { LengthDataModel } from "@/models/LengthDataModel";
import { TextDataModel } from "@/models/TextDataModel";
import { WeightDataModel } from "@/models/WeightDataModel";

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

export const PropertyHelpers = {
  renderDataModel(
    data: DataModel<DataUnitType, unknown, unknown>,
    locale: LocaleTypes,
    measurementType: UnitType
  ): string {
    if (CountDataModel.isType(data.unit)) {
      return (data as CountDataModel).displayText({ displayLocale: locale });
    }

    if (TextDataModel.isType(data.unit)) {
      return (data as TextDataModel).displayText({ displayLocale: locale });
    }

    if (LengthDataModel.isType(data.unit)) {
      return (data as LengthDataModel).displayText({
        lengthUnit: measurementType,
      });
    }

    if (WeightDataModel.isType(data.unit)) {
      return (data as WeightDataModel).displayText({
        weightUnit: measurementType,
      });
    }

    return "";
  },
};
