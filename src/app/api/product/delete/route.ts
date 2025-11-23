import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    console.log("Received delete ID:", id);

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Product ID is required" },
        { status: 400 }
      );
    }

    await adminDb.collection("products").doc(id).delete();

    return NextResponse.json({
      success: true,
      message: `Product ${id} deleted successfully`,
    });
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete product", error },
      { status: 500 }
    );
  }
}
