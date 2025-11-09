import React from "react";
import LinkL from "@/components/common/linkL";
import { ProductModel } from "@/data/productData";
import { ChevronRight } from "lucide-react";

function HierarchyNavigation({ product }: { product: ProductModel }) {
  return (
    <div className="flex items-center gap-3 max-md:gap-1">
      <LinkL
        className="opacity-70 text-sm text-nowrap"
        href={"/products"}
      >{`Common.products`}</LinkL>
      <ChevronRight size={12} strokeWidth={1.75} />
      <LinkL
        className="opacity-70 text-sm text-nowrap"
        href={`/products?category=${product.category}`}
      >{`Products.Categories.${product.category}.title`}</LinkL>
      <ChevronRight size={12} strokeWidth={1.75} />
      <LinkL
        className="text-sm text-nowrap font-medium"
        href={`/products/${product.category}`}
      >
        {product.title}
      </LinkL>
    </div>
  );
}

export default HierarchyNavigation;
