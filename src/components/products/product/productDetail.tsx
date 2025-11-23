import { PropertyHelpers } from "@/helpers/helpers";
import { LocaleTypes } from "@/i18n/routing";
import { VariantModel } from "@/models/VariantModel";
import { useLocale } from "next-intl";

interface Props {
  variant: VariantModel;
  measurement: "metric" | "imperial";
}

function ProductDetail({ variant, measurement }: Props) {
  const locale = useLocale() as LocaleTypes;

  return (
    <div className="grid grid-cols-3 gap-[2%] gap-y-10 bg-primary w-full rounded-sm px-[5%] py-[4%] max-md:grid-cols-1 max-md:gap-y-0">
      {variant.properties
        .sort((a, b) => a.key.localeCompare(b.key))
        .map((property, index) => {
          const title = property.title.displayText(locale);
          const value = PropertyHelpers.renderDataModel(
            property.data,
            locale,
            measurement
          );
          return (
            <div
              key={property.key}
              className={`flex flex-col max-md:flex-row max-md:justify-between max-md:items-end max-md:py-5 ${
                index !== Object.entries(variant.properties).length - 1
                  ? "max-md:border-b max-md:border-tertiary/50"
                  : ""
              }`}
            >
              <span className="opacity-80">{title}</span>
              <span className="text-lg">{value}</span>
            </div>
          );
        })}
    </div>
  );
}

export default ProductDetail;
