import React from "react";
import { ProductData } from "@/data/productData";
import { redirect } from "@/i18n/navigation";
import Body from "@/components/products/product/body";

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
            <Body product={product} />
        </main>
    );
}

export default ProductPage;
