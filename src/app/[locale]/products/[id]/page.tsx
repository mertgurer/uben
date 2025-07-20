import React from "react";
import { ProductData } from "@/data/productData";
import { redirect } from "@/i18n/navigation";

interface Props {
    params: Promise<{ id: string; locale: string }>;
}

async function ProductPage({ params }: Props) {
    const { id, locale } = await params;

    const product = ProductData.find((product) => product.key === id);

    if (!product) {
        redirect({ href: "/products", locale });
    }

    return <main className="flex flex-col">{product?.key}</main>;
}

export default ProductPage;
