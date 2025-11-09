import { createEmptyLocaleField, ProductModel } from "@/data/productData";
import React, { useEffect, useState } from "react";
import Input from "../common/input";
import Combobox from "../common/combobox";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import ButtonL from "../common/buttonL";
import { CategoryData } from "@/data/categoryData";
import SpanL from "../common/spanL";

interface Props {
  product: ProductModel;
}

function ProductFields({ product }: Props) {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [bulletPointCount, setBulletPointCount] = useState(
    product.bulletPoints.length
  );
  // const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  useEffect(() => {
    product.bulletPoints = product.bulletPoints.filter((bp) => {
      return bp.tr.trim() !== "" || bp.en.trim() !== "";
    });

    setBulletPointCount(product.bulletPoints.length);
  }, [product]);

  const updateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        data[key] = value.trim();
      }
    }

    const requiredFields = [
      "key",
      "titleTr",
      "titleEn",
      "descriptionTr",
      "descriptionEn",
      "category",
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        toast.error(t("About.Contact.Error.required"));
        return;
      }
    }

    const bulletPoints: { tr: string; en: string }[] = [];
    let index = 0;
    while (true) {
      const tr = formData.get(`bulletPointTr${index}`)?.toString().trim() ?? "";
      const en = formData.get(`bulletPointEn${index}`)?.toString().trim() ?? "";

      if (!tr && !en) break;

      if (tr || en) {
        bulletPoints.push({ tr, en });
      }

      index++;
    }

    setLoading(true);

    const object = {
      key: data.key,
      pdf: "",
      title: {
        tr: data.titleTr,
        en: data.titleEn,
      },
      description: {
        tr: data.descriptionTr,
        en: data.descriptionEn,
      },
      category: data.category,
      bulletPoints: bulletPoints,
    };

    console.log("Submitting data:", object);

    setLoading(false);

    // toast
    //   .promise(
    //     fetch("/api/product", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ data }),
    //     }).then(async (res) => {
    //       const result = await res.json();
    //       if (!result.success) {
    //         throw new Error("Failed to update product");
    //       }
    //       (e.target as HTMLFormElement).reset();
    //       return result;
    //     }),
    //     {
    //       loading: t("Admin.Dashboard.updating"),
    //       success: t("Admin.Dashboard.Success.productUpdated"),
    //       error: t("Admin.Dashboard.Error.productUpdateFailed"),
    //     }
    //   )
    //   .finally(() => setLoading(false));
  };

  return (
    <form
      key={product.key}
      onSubmit={updateProduct}
      className="flex flex-col items-center gap-5 bg-primary/10 p-12 rounded-lg"
    >
      <Input
        name="key"
        label="Admin.Dashboard.key"
        defaultValue={product.key}
        className="text-text"
        required
      />
      <Combobox
        name="category"
        label="Admin.Dashboard.category"
        options={CategoryData.map((c) => ({
          key: c.key,
          label: `Products.Categories.${c.key}.title`,
        }))}
        defaultValue={product.category}
        noEmptySelection
        className="text-text"
      />
      <div className="flex gap-10 mt-10 text-primary">
        <SpanL>Locale.tr</SpanL>
        <div className="bg-primary w-px" />
        <SpanL>Locale.en</SpanL>
      </div>
      <div className="flex gap-10 w-full">
        <Input
          name="titleTr"
          label="Admin.Dashboard.title"
          defaultValue={product.title["tr"]}
          className="text-text"
          required
        />
        <Input
          name="titleEn"
          label="Admin.Dashboard.title"
          defaultValue={product.title["en"]}
          className="text-text"
          required
        />
      </div>
      <div className="flex gap-10 w-full mb-14">
        <Input
          name="descriptionTr"
          label="Admin.Dashboard.description"
          defaultValue={product.description["tr"]}
          className="text-text"
          textArea
          required
        />
        <Input
          name="descriptionEn"
          label="Admin.Dashboard.description"
          defaultValue={product.description["en"]}
          className="text-text"
          textArea
          required
        />
      </div>
      {Array.from({
        length: bulletPointCount === 0 ? 1 : bulletPointCount,
      }).map((_, index) => {
        if (product.bulletPoints[index] === undefined) return;

        return (
          <div key={index} className="flex gap-10 w-full relative">
            <div
              className={`absolute -left-8 text-primary ${
                index === 0 ? "top-8" : "top-2"
              }`}
            >
              {index + 1} )
            </div>
            <Input
              name={`bulletPointTr${index}`}
              label={index === 0 ? `Admin.Dashboard.bulletPoint` : undefined}
              defaultValue={product.bulletPoints[index]["tr"]}
              className="text-text"
              textArea
            />
            <Input
              name={`bulletPointEn${index}`}
              label={index === 0 ? `Admin.Dashboard.bulletPoint` : undefined}
              defaultValue={product.bulletPoints[index]["en"]}
              className="text-text"
              textArea
            />
          </div>
        );
      })}
      <div className="flex gap-4 w-full items-center justify-center">
        <button
          type="button"
          className="bg-primary text-tertiary text-3xl w-12 aspect-square rounded-full hover:-translate-y-1 duration-500"
          onClick={() => {
            if (bulletPointCount + 1 > product.bulletPoints.length) {
              product.bulletPoints.push(createEmptyLocaleField());
            }
            setBulletPointCount((prev) => prev + 1);
          }}
        >
          +
        </button>
        <button
          type="button"
          className="bg-primary text-tertiary text-3xl w-12 aspect-square rounded-full hover:-translate-y-1 duration-500"
          onClick={() => {
            if (bulletPointCount === 1) return;
            setBulletPointCount((prev) => prev - 1);
          }}
        >
          -
        </button>
      </div>
      <ButtonL
        type="submit"
        disabled={loading}
        className="bg-primary text-tertiary px-9 py-2 rounded-full hover:-translate-y-1 duration-500 max-2xl:px-7 max-md:self-center max-md:px-12 max-md:py-2.5"
      >
        Admin.Dashboard.update
      </ButtonL>
    </form>
  );
}

export default ProductFields;
