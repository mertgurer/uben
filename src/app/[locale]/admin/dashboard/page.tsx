import React from "react";
import { adminDb } from "@/lib/firebaseAdmin";
import EditArea from "@/components/admin/editArea";
import { ProductModelType } from "@/models/ProductModel";
import { FirebaseImages } from "@/lib/firebaseImage";

async function Dashboard() {
  const snapshot = await adminDb.collection("products").get();

  const products = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ProductModelType[];

  const images: Record<string, string[]> = {};

  await Promise.all(
    products.map(async (p) => {
      images[p.key] = [
        FirebaseImages.getCover(p.key),
        ...(await FirebaseImages.getImages(p.key, 3)),
      ];
    })
  );

  return (
    <main className="flex flex-col w-full min-h-screen items-center px-60 py-20 bg-background gap-10">
      <EditArea rawProducts={products} images={images} />
    </main>
  );
}

export default Dashboard;
