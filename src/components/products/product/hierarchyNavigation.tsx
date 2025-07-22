import React from "react";
import LinkL from "@/components/common/linkL";
import { ProductModel } from "@/data/productData";
import { ChevronRight } from "lucide-react";

function HierarchyNavigation({ product }: { product: ProductModel }) {
    return (
        <div className="flex items-center gap-3">
            <LinkL
                className="opacity-70 text-sm"
                href={"/products"}
            >{`Common.products`}</LinkL>
            <ChevronRight size={12} strokeWidth={1.75} />
            <LinkL
                className="opacity-70 text-sm"
                href={`/products?category=${product.category.key}`}
            >{`Products.${product.category.key}.title`}</LinkL>
            <ChevronRight size={12} strokeWidth={1.75} />
            <LinkL
                className="text-sm font-medium"
                href={`/products/${product.category.key}`}
            >{`Products.${product.key}.title`}</LinkL>
        </div>
    );
}

export default HierarchyNavigation;
