import React from "react";
import { ProductData } from "@/data/productData";
import { redirect } from "@/i18n/navigation";
import Info from "@/components/products/product/info";
import ImageCarousel from "@/components/products/product/imageCarousel";
import DetailInfo from "@/components/products/product/detailInfo";
import HierarchyNavigation from "@/components/products/product/hierarchyNavigation";
import SpanL from "@/components/common/spanL";

interface Props {
    params: Promise<{ id: string; locale: string }>;
}

async function ProductPage({ params }: Props) {
    const { id, locale } = await params;

    const product = ProductData.find((product) => product.key === id);

    if (!product) {
        redirect({ href: "/products", locale });
        return;
    }

    return (
        <main className="flex flex-col pt-12 gap-14 max-md:pt-8">
            <div className="flex gap-[4%] px-[15%] max-2xl:px-[10%] max-md:px-[5%] max-md:flex-col">
                <div className="flex flex-col gap-6 md:hidden">
                    <div className="flex flex-col gap-2">
                        <HierarchyNavigation product={product} />
                        <span className="opacity-70 text-sm">
                            {product.itemCode}
                        </span>
                    </div>
                    <SpanL className="text-4xl font-medium mb-2 text-primary">{`Products.${product.key}.title`}</SpanL>
                </div>
                <ImageCarousel images={[product.cover, ...product.images]} />
                <div className="flex-1 flex flex-col gap-5">
                    <div className="flex flex-col gap-1 max-md:hidden">
                        <HierarchyNavigation product={product} />
                        <span className="opacity-70 text-sm">
                            {product.itemCode}
                        </span>
                    </div>
                    <SpanL className="text-4xl font-medium mb-2 text-primary max-md:hidden">{`Products.${product.key}.title`}</SpanL>
                    <Info product={product} />
                </div>
            </div>
            <DetailInfo product={product} />
        </main>
    );
}

export default ProductPage;
