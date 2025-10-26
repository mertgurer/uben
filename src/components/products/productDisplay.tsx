"use client";

import React, { useEffect, useState } from "react";
import Categories from "./categories";
import ProductList from "./productList";
import { CategoryData } from "@/data/categoryData";
import { ProductModel } from "@/data/productData";

interface Props {
  category?: string;
  products: ProductModel[];
}

function ProductDisplay({ category, products }: Props) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    category ? [category] : []
  );

  useEffect(() => {
    if (selectedCategories.length === CategoryData.length) {
      setSelectedCategories([]);
    }
  }, [selectedCategories]);

  return (
    <section id="productDisplay" className="flex flex-col">
      <Categories
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <ProductList
        selectedCategories={selectedCategories}
        products={products}
      />
    </section>
  );
}

export default ProductDisplay;
