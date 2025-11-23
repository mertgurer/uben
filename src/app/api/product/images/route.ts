import { NextResponse } from "next/server";
import { adminStorage } from "@/lib/firebaseAdmin";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { success: false, message: "Content-Type must be multipart/form-data" },
        { status: 400 }
      );
    }

    const formData = await request.formData();

    console.log(formData);

    const productKey = formData.get("productKey") as string | null;
    if (!productKey) {
      return NextResponse.json(
        { success: false, message: "Missing productKey" },
        { status: 400 }
      );
    }

    const slotFilenames = [
      "cover.jpg",
      "image_1.jpg",
      "image_2.jpg",
      "image_3.jpg",
    ];
    const uploadPromises: Promise<unknown>[] = [];

    for (let i = 0; i < slotFilenames.length; i++) {
      const fileField = formData.get(String(i)) ?? null;
      const arrayFiles = formData.getAll("images");
      const file =
        fileField instanceof File
          ? fileField
          : arrayFiles[i] instanceof File
          ? (arrayFiles[i] as File)
          : null;

      if (!file) continue;

      const ab = await file.arrayBuffer();
      const buffer = Buffer.from(ab);

      const contentTypeHeader = file.type || "application/octet-stream";

      const destination = `${productKey}/${slotFilenames[i]}`;
      const bucketFile = adminStorage.file(destination);

      uploadPromises.push(
        bucketFile.save(buffer, {
          contentType: contentTypeHeader,
          resumable: false,
        })
      );
    }

    await Promise.all(uploadPromises);

    return NextResponse.json({
      success: true,
      message: "Images uploaded successfully",
    });
  } catch (err) {
    console.error("UPLOAD IMAGES ERROR:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to upload images",
        error: String(err),
      },
      { status: 500 }
    );
  }
}
