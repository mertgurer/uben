import React from "react";
import { ProductData } from "@/data/productData";
import { redirect } from "@/i18n/navigation";
import Info from "@/components/products/product/info";
import ImageCarousel from "@/components/products/product/imageCarousel";
import DetailInfo from "@/components/products/product/detailInfo";

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
        <main className="flex flex-col pt-12 gap-14">
            <div className="flex gap-[4%] px-[15%]">
                <ImageCarousel images={[product.cover, ...product.images]} />
                <Info product={product} />
            </div>
            <DetailInfo />
        </main>
    );
}

export default ProductPage;
