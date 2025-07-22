import React from "react";
import Intro from "@/components/products/intro";
import ProductDisplay from "@/components/products/productDisplay";

interface Props {
    searchParams: { category?: string };
}

async function Products({ searchParams }: Props) {
    const params = await searchParams;
    const category = params.category;

    console.log(category);

    return (
        <main className="flex flex-col">
            <Intro />
            <ProductDisplay category={category} />
        </main>
    );
}

export default Products;
