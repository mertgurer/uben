"use client";

import React, { useState } from "react";
import ProductList from "./productList";
import { ProductModel } from "@/data/productData";
import LogoutButton from "./logoutButton";

interface Props {
  products: ProductModel[];
}

function EditArea({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | "new">(
    products[0]
  );

  return (
    <div className="flex w-full gap-10">
      <div className="flex flex-col w-1/6 gap-4 items-center">
        <ProductList
          products={products}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        <LogoutButton />
      </div>
      <div className="w-5/6">details</div>
    </div>
  );
}

export default EditArea;
