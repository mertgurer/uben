import React from "react";
import Intro from "@/components/products/intro";
import ProductDisplay from "@/components/products/productDisplay";
import { adminDb } from "@/lib/firebaseAdmin";
import { ProductModelType } from "@/models/ProductModel";

interface Props {
  searchParams: Promise<{ category?: string }>;
}

async function Products({ searchParams }: Props) {
  const { category } = await searchParams;

  const snapshot = await adminDb
    .collection("products")
    .where("isActive", "==", true)
    .get();

  const products = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ProductModelType[];

  return (
    <main className="flex flex-col">
      <Intro />
      <ProductDisplay category={category} rawProducts={products} />
    </main>
  );
}

export default Products;
