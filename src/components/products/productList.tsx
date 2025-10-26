import React from "react";
import { ProductModel } from "@/data/productData";
import Image from "next/image";
import SpanL from "../common/spanL";
import { Link } from "@/i18n/navigation";
import { FirebaseImages } from "@/lib/firebaseImage";

interface ProductListProps {
  selectedCategories: string[];
  products: ProductModel[];
}

function ProductList({ selectedCategories, products }: ProductListProps) {
  return (
    <section
      id="productList"
      className="w-full flex flex-wrap gap-[2%] px-[15%] pb-16 max-md:gap-0 max-md:px-[5%]"
    >
      {products.map((product) => {
        const isVisible =
          selectedCategories.length === 0 ||
          selectedCategories.includes(product.category);

        return (
          <Link
            key={product.key}
            href={`/products/${product.key}`}
            className={`flex flex-col w-[32%] mb-10 max-2xl:mb-6 max-md:w-full ${
              isVisible ? "" : "hidden"
            }`}
          >
            <div className="relative aspect-[6/7] w-full rounded-md bg-tertiary overflow-hidden">
              <Image
                src={FirebaseImages.getCover(product.key)}
                alt={product.key}
                fill
                priority
                sizes="100%"
                className="object-contain"
              />
            </div>
            <SpanL className="text-xl font-semibold mt-3 ml-2 max-md:mt-2">{`Products.${product.key}.title`}</SpanL>
            {/* <SpanL className="ml-2">{`Products.${product.key}.description`}</SpanL> */}
          </Link>
        );
      })}
    </section>
  );
}

export default ProductList;
