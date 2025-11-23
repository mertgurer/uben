"use client";

import React, { useState } from "react";
import ProductList from "./productList";
import LogoutButton from "./logoutButton";
import ProductFields from "./productFields";
import { ProductModel, ProductModelType } from "@/models/ProductModel";

interface Props {
  rawProducts: ProductModelType[];
  images: Record<string, string[]>;
}

function EditArea({ rawProducts, images }: Props) {
  const products = rawProducts.map(
    (p) => new ProductModel(p as ProductModelType)
  );
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
        <ProductFields
          initialProduct={selectedProduct}
          initialImages={images[selectedProduct.key]}
        />
      </div>
    </div>
  );
}

export default EditArea;
