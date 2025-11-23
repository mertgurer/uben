import { adminDb, adminStorage } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { product, oldKey } = await request.json();
    console.log("Received product data:", product);
    console.log("Has old key:", oldKey);

    const productsRef = adminDb.collection("products");
    let docRef;

    if (!product.id || product.id === "") {
      docRef = productsRef.doc();
      const productToSave: Omit<typeof product, "id"> = { ...product };

      await docRef.set(productToSave);

      return NextResponse.json({
        success: true,
        message: "Product created",
        id: docRef.id,
      });
    }

    docRef = productsRef.doc(product.id);
    await docRef.set(product, { merge: true });

    if (oldKey && oldKey !== product.key) {
      const [files] = await adminStorage.getFiles({ prefix: oldKey + "/" });

      const copyPromises = files.map(async (file) => {
        const newPath = file.name.replace(oldKey + "/", product.key + "/");
        await file.copy(adminStorage.file(newPath));
      });

      await Promise.all(copyPromises);

      const deletePromises = files.map((file) => file.delete());
      await Promise.all(deletePromises);
      console.log(`Renamed folder from ${oldKey} -> ${product.key}`);
    }

    return NextResponse.json({
      success: true,
      message: "Product updated",
      id: product.id,
    });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save product.", error },
      { status: 500 }
    );
  }
}
