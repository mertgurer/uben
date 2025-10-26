"use client";

import React, { useState } from "react";
import SpanL from "@/components/common/spanL";
import { ProductModel } from "@/data/productData";
import HierarchyNavigation from "./hierarchyNavigation";
import ImageCarousel from "./imageCarousel";
import Info from "./info";
import DetailInfo from "./detailInfo";

interface Props {
  product: ProductModel;
  images: string[];
}

function Body({ product, images }: Props) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0].key
  );

  return (
    <>
      <div className="flex gap-[4%] px-[15%] max-2xl:px-[10%] max-md:px-[5%] max-md:flex-col">
        <div className="flex flex-col gap-6 md:hidden">
          <div className="flex flex-col gap-3">
            <HierarchyNavigation product={product} />
            <span className="opacity-70 text-sm">
              {
                product.variants.find((x) => x.key === selectedVariant)
                  ?.productCode
              }
            </span>
          </div>
          <SpanL className="text-4xl font-medium mb-2 text-primary">{`Products.${product.key}.title`}</SpanL>
        </div>
        <ImageCarousel images={images} />
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-3 max-md:hidden">
            <HierarchyNavigation product={product} />
            <span className="opacity-70 text-sm">
              {
                product.variants.find((x) => x.key === selectedVariant)
                  ?.productCode
              }
            </span>
          </div>
          <SpanL className="text-4xl font-medium mb-2 text-primary max-md:hidden">{`Products.${product.key}.title`}</SpanL>
          <Info product={product} setSelectedVariant={setSelectedVariant} />
        </div>
      </div>
      <DetailInfo product={product} selectedVariant={selectedVariant} />
    </>
  );
}
export default Body;
