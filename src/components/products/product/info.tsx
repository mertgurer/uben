"use client";

import React, { Dispatch } from "react";
import { ProductModel } from "@/data/productData";
import SpanL from "@/components/common/spanL";
import Combobox from "@/components/common/combobox";
import { Dot } from "lucide-react";

interface Props {
  product: ProductModel;
  selectedVariant: string;
  setSelectedVariant: Dispatch<React.SetStateAction<string>>;
}

function Info({ product, selectedVariant, setSelectedVariant }: Props) {
  return (
    <div className="flex-1 flex flex-col gap-6 mt-3">
      {product.variants.length > 1 && (
        <Combobox
          name="Product.variants"
          label="Product.variants"
          options={product.variants.map((variant) => {
            return {
              key: variant.key,
              label: `Product.${variant.key}`,
            };
          })}
          setSelected={setSelectedVariant}
          dark
          noEmptySelection
        />
      )}
      <div className="flex flex-col gap-1">
        <SpanL>Product.paperKind</SpanL>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            {product.variants
              .find((x) => x.key === selectedVariant)
              ?.properties.color.data.map((color, index) => {
                return (
                  <SpanL
                    key={index}
                    className={`bg-trim px-4 py-2 rounded-md shadow-[0_2px_5px_-3px] shadow-text max-2xl:px-3 max-2xl:py-1.5`}
                  >{`Colors.${color}`}</SpanL>
                );
              })}
          </div>
          {/* <ButtonL
                        className="bg-trim px-4 py-2 rounded-md shadow-[0_2px_5px_-3px] shadow-text max-2xl:px-3 max-2xl:py-1.5"
                        afterElement={<Download size={16} strokeWidth={1.75} />}
                        onClick={() => console.log(product.pdf)}
                    >
                        Product.pdfDownload
                    </ButtonL> */}
        </div>
      </div>
      <SpanL className="mt-2" style={{ textWrap: "stable" }}>
        {product.description}
      </SpanL>
      <div className="flex flex-col gap-1">
        {product.bulletPoints.map((point, index) => (
          <div key={index} className="flex gap-2">
            <Dot size={20} strokeWidth={5} className="shrink-0 text-primary" />
            <SpanL style={{ textWrap: "stable" }}>{point}</SpanL>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;
