import React from "react";
import Intro from "@/components/products/intro";
import ProductDisplay from "@/components/products/productDisplay";
import { adminDb } from "@/lib/firebaseAdmin";
import { ProductModel } from "@/data/productData";

interface Props {
  searchParams: Promise<{ category?: string }>;
}

async function Products({ searchParams }: Props) {
  const { category } = await searchParams;

  const snapshot = await adminDb.collection("products").get();
  const products = snapshot.docs.map((doc) => ({
    ...doc.data(),
  })) as ProductModel[];

  return (
    <main className="flex flex-col">
      <Intro />
      <ProductDisplay category={category} products={products} />
    </main>
  );
}

export default Products;
