import React from "react";
import { redirect } from "@/i18n/navigation";
import Body from "@/components/products/product/body";
import { adminDb } from "@/lib/firebaseAdmin";
import { ProductModel } from "@/data/productData";
import { FirebaseImages } from "@/lib/firebaseImage";

interface Props {
  params: Promise<{ id: string; locale: string }>;
}

async function ProductPage({ params }: Props) {
  const { id, locale } = await params;

  const snapshot = await adminDb
    .collection("products")
    .where("key", "==", id)
    .limit(1)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  const product = doc.data() as ProductModel;

  if (!product) {
    redirect({ href: "/products", locale });
    return;
  }

  const images = [
    FirebaseImages.getCover(product.key),
    ...(await FirebaseImages.getImages(product.key, 4)),
  ];

  return (
    <main className="flex flex-col pt-12 gap-14 max-md:pt-8">
      <Body product={product} images={images} />
    </main>
  );
}

export default ProductPage;
