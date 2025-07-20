import React from "react";
import Intro from "@/components/products/intro";
import ProductDisplay from "@/components/products/productDisplay";

function Products() {
    return (
        <main className="flex flex-col">
            <Intro />
            <ProductDisplay />
        </main>
    );
}

export default Products;
