import React from "react";
import { adminDb } from "@/lib/firebaseAdmin";
import { ProductModel } from "@/data/productData";
import EditArea from "@/components/admin/editArea";

async function Dashboard() {
  const snapshot = await adminDb.collection("products").get();
  const products = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ProductModel[];

  return (
    <main className="flex flex-col w-full min-h-screen items-center px-60 py-20 bg-background gap-10">
      <EditArea products={products} />
    </main>
  );
}

export default Dashboard;
