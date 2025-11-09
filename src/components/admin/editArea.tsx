"use client";

import React, { useState } from "react";
import ProductList from "./productList";
import { ProductModel } from "@/data/productData";
import LogoutButton from "./logoutButton";
import ProductFields from "./productFields";

interface Props {
  products: ProductModel[];
}

function EditArea({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<ProductModel>(
    products[0]
  );

  return (
    <div className="flex w-full gap-10">
      <div className="flex flex-col w-1/4 gap-4 items-center">
        <ProductList
          products={products}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        <LogoutButton />
      </div>
      <div className="w-3/4">
        <ProductFields product={selectedProduct} />
      </div>
    </div>
  );
}

export default EditArea;
