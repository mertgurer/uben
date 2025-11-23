"use client";

import React, { useState } from "react";
import SpanL from "@/components/common/spanL";
import HierarchyNavigation from "./hierarchyNavigation";
import ImageCarousel from "./imageCarousel";
import Info from "./info";
import DetailInfo from "./detailInfo";
import { ProductModel, ProductModelType } from "@/models/ProductModel";

interface Props {
  rawProduct: ProductModelType;
  images: string[];
}

function Body({ rawProduct, images }: Props) {
  const product = new ProductModel(rawProduct);
  const [selectedVariantKey, setSelectedVariantKey] = useState(
    rawProduct.variants[0].key
  );

  if (product == null) {
    return null;
  }

  return (
    <>
      <div className="flex gap-[4%] px-[15%] max-2xl:px-[10%] max-md:px-[5%] max-md:flex-col">
        <div className="flex flex-col gap-6 md:hidden">
          <div className="flex flex-col gap-3">
            <HierarchyNavigation product={product} />
            <span className="opacity-70 text-sm">
              {
                product.variants.find((x) => x.key === selectedVariantKey)
                  ?.productCode
              }
            </span>
          </div>
          <SpanL className="text-4xl font-medium mb-2 text-primary">
            {product.title}
          </SpanL>
        </div>
        <ImageCarousel images={images} />
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-3 max-md:hidden">
            <HierarchyNavigation product={product} />
            <span className="opacity-70 text-sm">
              {
                product.variants.find((x) => x.key === selectedVariantKey)
                  ?.productCode
              }
            </span>
          </div>
          <SpanL className="text-4xl font-medium mb-2 text-primary max-md:hidden">
            {product.title}
          </SpanL>
          <Info
            product={product}
            selectedVariantKey={selectedVariantKey}
            setSelectedVariantKey={setSelectedVariantKey}
          />
        </div>
      </div>
      <DetailInfo product={product} selectedVariant={selectedVariantKey} />
    </>
  );
}
export default Body;
