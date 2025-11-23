import SpanL from "@/components/common/spanL";
import { PropertyHelpers } from "@/helpers/helpers";
import { LocaleTypes } from "@/i18n/routing";
import { ProductModel } from "@/models/ProductModel";
import { useLocale } from "next-intl";
import React, { Fragment } from "react";

interface Props {
  product: ProductModel;
  measurement: "metric" | "imperial";
}

function Comparison({ product, measurement }: Props) {
  const locale = useLocale() as LocaleTypes;

  return (
    <div className="overflow-x-auto my-4">
      <div
        className={`min-w-max grid ${
          product.variants.length === 2
            ? "grid-cols-[3fr_2fr_2fr] max-md:grid-cols-3"
            : product.variants.length === 3
            ? "grid-cols-[3fr_2fr_2fr_2fr] max-md:grid-cols-4"
            : ""
        } `}
      >
        <div className="min-w-max py-6 px-10 border-b border-tertiary max-md:px-4" />
        {product.variants.map((variant, index) => {
          return (
            <div
              key={variant.key}
              className={`min-w-max flex gap-2 justify-center px-6 py-10 border-b border-tertiary text-3xl font-medium max-2xl:text-2xl max-md:px-4 ${
                index % 2 === 0 ? "bg-primary" : ""
              }`}
            >
              <span>{variant.title.displayText(locale)}</span>
            </div>
          );
        })}
        {product.variants[0].properties.map((property) => {
          return (
            <Fragment key={property.key}>
              <SpanL className="flex h-full py-6 px-10 opacity-80 self-center text-nowrap border-b border-tertiary/50 max-md:px-4">
                {property.title.displayText(locale)}
              </SpanL>
              {product.variants.map((variant, index) => {
                const variantProperty = variant.properties.find(
                  (x) => x.key === property.key
                );
                const value = PropertyHelpers.renderDataModel(
                  variantProperty!.data,
                  locale,
                  measurement
                );

                return (
                  <div
                    key={variant.key}
                    className={`flex h-full items-end gap-1 p-6 justify-center text-nowrap border-b border-tertiary/50 max-md:items-center max-md:px-4 ${
                      index % 2 === 0 ? "bg-primary" : ""
                    }`}
                  >
                    <span className="text-lg">{value}</span>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Comparison;
