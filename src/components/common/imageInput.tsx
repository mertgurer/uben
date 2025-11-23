"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageInputProps {
  initialImage?: string | null;
  onChange: (file: File | null) => void;
  onRemove: () => void;
}

export default function ImageInput({
  initialImage,
  onChange,
  onRemove,
}: ImageInputProps) {
  const [preview, setPreview] = useState<string | null>(initialImage ?? null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreview(initialImage ?? null);
  }, [initialImage]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      onChange(null);
      return;
    }

    const base64 = await fileToBase64(file);
    setPreview(base64);
    onChange(file);
  };

  const handleRemove = () => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onChange(null);
    if (onRemove) onRemove();
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <div
        className="relative w-40 h-40 rounded-md overflow-hidden bg-gray-200 flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        {preview ? (
          <>
            <Image src={preview} alt="preview" fill className="object-cover" />
            <button
              type="button"
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              onClick={(e) => {
                e.stopPropagation(); // prevent opening file dialog
                handleRemove();
              }}
            >
              ×
            </button>
          </>
        ) : (
          <span className="text-gray-500">Select Image</span>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
