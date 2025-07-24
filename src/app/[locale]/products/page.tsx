import React from "react";
import Intro from "@/components/products/intro";
import ProductDisplay from "@/components/products/productDisplay";

interface Props {
    searchParams: { category?: string };
}

function Products({ searchParams }: Props) {
    const category = searchParams.category;

    return (
        <main className="flex flex-col">
            <Intro />
            <ProductDisplay category={category} />
        </main>
    );
}

export default Products;
