import { ProductModel } from "@/data/productData";
import React from "react";
import ButtonL from "../common/buttonL";

interface Props {
  products: ProductModel[];
  selectedProduct: ProductModel | "new";
  setSelectedProduct: (product: ProductModel | "new") => void;
}

function ProductList({ products, selectedProduct, setSelectedProduct }: Props) {
  return (
    <div className="flex flex-col w-full gap-8 bg-primary/20 p-4 rounded-lg">
      {products.map((product) => (
        <ButtonL
          key={product.key}
          onClick={() => setSelectedProduct(product)}
          className={`border-b border-primary px-2 text-left !w-full text-sm ${
            selectedProduct !== "new" && selectedProduct.key === product.key
              ? "font-bold"
              : "text-text"
          }`}
        >
          {product.title}
        </ButtonL>
      ))}
      <ButtonL
        onClick={() => setSelectedProduct("new")}
        className={`border-b border-primary px-2 text-left !w-full text-sm ${
          selectedProduct === "new" ? "font-bold" : "text-text"
        }`}
      >
        Admin.Dashboard.new
      </ButtonL>
    </div>
  );
}

export default ProductList;
