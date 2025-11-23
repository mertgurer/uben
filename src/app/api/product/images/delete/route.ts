import { NextResponse } from "next/server";
import { adminStorage } from "@/lib/firebaseAdmin";

export async function POST(request: Request) {
  try {
    const { productKey, index } = await request.json();

    if (!productKey || index === undefined) {
      return NextResponse.json(
        { success: false, message: "Missing productKey or index" },
        { status: 400 }
      );
    }

    const slotFilenames = [
      "cover.jpg",
      "image_1.jpg",
      "image_2.jpg",
      "image_3.jpg",
    ];

    if (index < 0 || index >= slotFilenames.length) {
      return NextResponse.json(
        { success: false, message: "Invalid image index" },
        { status: 400 }
      );
    }

    const filename = `${productKey}/${slotFilenames[index]}`;
    const file = adminStorage.file(filename);

    const [exists] = await file.exists();

    if (exists) {
      await file.delete();
    }

    return NextResponse.json({
      success: true,
      message: `Image at index ${index} deleted`,
    });
  } catch (error) {
    console.error("DELETE IMAGE ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete image", error },
      { status: 500 }
    );
  }
}
