import React from "react";
import ButtonL from "../common/buttonL";
import { ProductModel } from "@/models/ProductModel";

interface Props {
  products: ProductModel[];
  selectedProduct: ProductModel;
  setSelectedProduct: (product: ProductModel) => void;
}

function ProductList({ products, selectedProduct, setSelectedProduct }: Props) {
  return (
    <div className="flex flex-col w-full gap-8 bg-primary/10 px-4 py-8 rounded-lg">
      {products.map((product) => (
        <ButtonL
          key={product.key}
          onClick={() => setSelectedProduct(product)}
          className={`border-b border-primary px-2 text-left !w-full text-sm ${
            selectedProduct.key === product.key ? "font-bold text-primary" : ""
          }`}
        >
          {product.title}
        </ButtonL>
      ))}
      <ButtonL
        onClick={() => setSelectedProduct(ProductModel.empty())}
        className={`border-b border-primary px-2 text-left !w-full text-sm ${
          selectedProduct.key === "new" ? "font-bold text-primary" : ""
        }`}
      >
        Admin.Dashboard.new
      </ButtonL>
    </div>
  );
}

export default ProductList;
