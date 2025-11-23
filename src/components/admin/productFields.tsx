"use client";

import React, { useEffect, useState } from "react";
import Input from "../common/input";
import Combobox from "../common/combobox";
import { useTranslations } from "next-intl";
import ButtonL from "../common/buttonL";
import { Category, CategoryData } from "@/data/categoryData";
import SpanL from "../common/spanL";
import { ProductModel } from "@/models/ProductModel";
import { LocaleModel } from "@/models/LocaleModel";
import { VariantModel } from "@/models/VariantModel";
import { DataUnit, DataUnitList } from "@/models/DataModel";
import { PropertyModel } from "@/models/PropertyModel";
import { CountDataModel } from "@/models/CountDataModel";
import toast from "react-hot-toast";
import ImageInput from "../common/imageInput";

interface Props {
  initialProduct: ProductModel;
  initialImages: string[];
}

function ProductFields({ initialProduct, initialImages }: Props) {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductModel>(initialProduct);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [images, setImages] = useState<(File | null)[]>([]);

  useEffect(() => {
    if (initialProduct.bulletPoints.length === 0) {
      initialProduct.bulletPoints.push(LocaleModel.empty());
    }
    setProduct(initialProduct);
    setSelectedVariantIndex(0);
  }, [initialImages, initialProduct]);

  const updateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    let oldKey: string | null = null;
    if (initialProduct.key !== "new" && product.key !== initialProduct.key) {
      oldKey = initialProduct.key;
    }

    toast
      .promise(
        fetch("/api/product", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product, oldKey }),
        }).then(async (res) => {
          const result = await res.json();
          if (!result.success) {
            throw new Error("Failed to update product");
          }

          window.location.reload();
          return result;
        }),
        {
          loading: t("Admin.Dashboard.updating"),
          success: t("Admin.Dashboard.Success.productUpdated"),
          error: t("Admin.Dashboard.Error.productUpdateFailed"),
        }
      )
      .finally(() => setLoading(false));
  };

  const deleteProduct = async (id: string) => {
    setLoading(true);
    toast
      .promise(
        fetch("/api/product/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: id }),
        }).then(async (res) => {
          const result = await res.json();
          if (!result.success) {
            throw new Error("Failed to delete product");
          }

          window.location.reload();
          return result;
        }),
        {
          loading: t("Admin.Dashboard.deleting"),
          success: t("Admin.Dashboard.Success.productDeleted"),
          error: t("Admin.Dashboard.Error.productDeleteFailed"),
        }
      )
      .finally(() => setLoading(false));
  };

  const updateImages = async () => {
    console.log(images);

    setLoading(true);

    const formData = new FormData();
    formData.append("productKey", initialProduct.key);
    images.forEach((file, index) => {
      if (file) formData.append(String(index), file);
    });

    toast
      .promise(
        fetch("/api/product/images", {
          method: "POST",
          body: formData,
        }).then(async (res) => {
          const result = await res.json();
          if (!result.success) {
            throw new Error("Failed to delete product");
          }

          window.location.reload();
          return result;
        }),
        {
          loading: t("Admin.Dashboard.updatingImages"),
          success: t("Admin.Dashboard.Success.imagesUpdated"),
          error: t("Admin.Dashboard.Error.imagesUpdateFailed"),
        }
      )
      .finally(() => setLoading(false));
  };

  const deleteImage = async (index: number) => {
    setLoading(true);
    toast
      .promise(
        fetch("/api/product/images/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productKey: initialProduct.key, index }),
        }).then(async (res) => {
          const result = await res.json();
          if (!result.success) {
            throw new Error("Failed to delete product");
          }

          window.location.reload();
          return result;
        }),
        {
          loading: t("Admin.Dashboard.deletingImage"),
          success: t("Admin.Dashboard.Success.imageDeleted"),
          error: t("Admin.Dashboard.Error.imageDeleteFailed"),
        }
      )
      .finally(() => setLoading(false));
  };

  if (product === undefined) return null;

  return (
    <form
      key={initialProduct.key}
      onSubmit={updateProduct}
      className="flex flex-col items-center gap-5 bg-primary/10 p-12 rounded-lg"
    >
      <ButtonL
        type="submit"
        disabled={loading}
        className="fixed right-5 top-32 bg-primary text-tertiary px-9 py-2 rounded-full hover:-translate-y-1 duration-500"
      >
        Admin.Dashboard.update
      </ButtonL>
      <div className="flex w-full items-center justify-between mb-10">
        <div className="flex gap-4">
          <ButtonL
            type="submit"
            disabled={loading}
            className="bg-primary text-tertiary px-9 py-2 rounded-full hover:-translate-y-1 duration-500 max-2xl:px-7 max-md:self-center max-md:px-12 max-md:py-2.5"
          >
            Admin.Dashboard.update
          </ButtonL>
          <ButtonL
            type="button"
            className="bg-primary text-tertiary px-9 py-2 rounded-full hover:-translate-y-1 duration-500 max-2xl:px-7 max-md:self-center max-md:px-12 max-md:py-2.5"
            disabled={loading}
            onClick={() => deleteProduct(product.id)}
          >
            Admin.Dashboard.delete
          </ButtonL>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="isActive" className=" cursor-pointer">
            {t("Admin.Dashboard.isActive")}
          </label>
          <input
            id="isActive"
            type="checkbox"
            className=" cursor-pointer"
            checked={product.isActive}
            onChange={(e) =>
              setProduct(
                (prev) =>
                  ({ ...prev, isActive: e.target.checked } as ProductModel)
              )
            }
          />
        </div>
      </div>
      <Input
        label="Admin.Dashboard.key"
        className="text-text"
        required
        value={product.key}
        onValueChange={(val) =>
          setProduct(
            (prev) =>
              ({
                ...prev,
                key: val,
              } as ProductModel)
          )
        }
      />
      <Combobox
        label="Admin.Dashboard.category"
        options={CategoryData.map((c) => ({
          key: c.key,
          label: `Products.Categories.${c.key}.title`,
        }))}
        noEmptySelection
        className="text-text"
        value={product.category}
        onValueChange={(val) =>
          setProduct(
            (prev) =>
              ({
                ...prev,
                category: val as Category,
              } as ProductModel)
          )
        }
      />
      <div className="flex gap-10 mt-10 text-primary">
        <SpanL>Locale.tr</SpanL>
        <div className="bg-primary w-px" />
        <SpanL>Locale.en</SpanL>
      </div>
      <div className="flex gap-10 w-full">
        <Input
          label="Admin.Dashboard.title"
          value={product.title.tr}
          className="text-text"
          required
          onValueChange={(val) =>
            setProduct(
              (prev) =>
                ({
                  ...prev,
                  title: { en: prev.title.en, tr: val },
                } as ProductModel)
            )
          }
        />
        <Input
          label="Admin.Dashboard.title"
          value={product.title.en}
          className="text-text"
          required
          onValueChange={(val) =>
            setProduct(
              (prev) =>
                ({
                  ...prev,
                  title: { en: val, tr: prev.title.tr },
                } as ProductModel)
            )
          }
        />
      </div>
      <div className="flex gap-10 w-full mb-14">
        <Input
          label="Admin.Dashboard.description"
          value={product.description.tr}
          className="text-text"
          textArea
          required
          onValueChange={(val) =>
            setProduct(
              (prev) =>
                ({
                  ...prev,
                  description: {
                    en: prev.description.en,
                    tr: val,
                  },
                } as ProductModel)
            )
          }
        />
        <Input
          label="Admin.Dashboard.description"
          value={product.description.en}
          className="text-text"
          textArea
          required
          onValueChange={(val) =>
            setProduct(
              (prev) =>
                ({
                  ...prev,
                  description: {
                    en: val,
                    tr: prev.description.tr,
                  },
                } as ProductModel)
            )
          }
        />
      </div>
      {product.bulletPoints.map((bp, index) => {
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
              label={index === 0 ? `Admin.Dashboard.bulletPoint` : undefined}
              value={bp.tr}
              className="text-text"
              textArea
              required
              onValueChange={(val) =>
                setProduct(
                  (prev) =>
                    ({
                      ...prev,
                      bulletPoints: prev.bulletPoints.map((b, i) =>
                        i === index ? { ...b, tr: val } : b
                      ),
                    } as ProductModel)
                )
              }
            />
            <Input
              label={index === 0 ? `Admin.Dashboard.bulletPoint` : undefined}
              value={bp.en}
              className="text-text"
              textArea
              required
              onValueChange={(val) =>
                setProduct(
                  (prev) =>
                    ({
                      ...prev,
                      bulletPoints: prev.bulletPoints.map((b, i) =>
                        i === index ? { ...b, en: val } : b
                      ),
                    } as ProductModel)
                )
              }
            />
          </div>
        );
      })}
      <div className="flex gap-4 w-full items-center justify-center">
        <button
          type="button"
          className="bg-primary text-tertiary text-3xl w-12 aspect-square rounded-full hover:-translate-y-1 duration-500"
          onClick={() => {
            setProduct((prev) => {
              const updatedBulletPoints = [
                ...prev.bulletPoints,
                LocaleModel.empty(),
              ];
              return {
                ...prev,
                bulletPoints: updatedBulletPoints,
              } as ProductModel;
            });
          }}
        >
          +
        </button>
        <button
          type="button"
          className="bg-primary text-tertiary text-3xl w-12 aspect-square rounded-full hover:-translate-y-1 duration-500"
          onClick={() => {
            setProduct((prev) => {
              const updatedBulletPoints = prev.bulletPoints.slice(0, -1);
              return {
                ...prev,
                bulletPoints: updatedBulletPoints,
              } as ProductModel;
            });
          }}
        >
          -
        </button>
      </div>
      <div className="flex w-full justify-between items-end mt-10">
        <div className="flex flex-col w-full">
          <SpanL className="text-lg text-primary mb-3">
            Admin.Dashboard.variants
          </SpanL>
          <div className="flex h-max">
            <button
              type="button"
              onClick={() => {
                if (product.variants.some((v) => v.key === "new")) {
                  setSelectedVariantIndex(product.variants.length - 1);
                  return;
                }
                setProduct((prev) => {
                  const newVariants = [...prev.variants, VariantModel.empty()];
                  return { ...prev, variants: newVariants } as ProductModel;
                });
                setSelectedVariantIndex(product.variants.length);
              }}
              className={`border border-primary px-3 text-2xl ${
                -1 === selectedVariantIndex ? "bg-primary text-tertiary" : ""
              }`}
            >
              +
            </button>
            {product.variants.map((variant, index) => {
              return (
                <button
                  key={variant.key}
                  type="button"
                  onClick={() => setSelectedVariantIndex(index)}
                  className={`border border-primary border-l-0 px-6 ${
                    index === selectedVariantIndex
                      ? "bg-primary text-tertiary"
                      : ""
                  }`}
                >
                  {variant.key}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <Input
            value={product.variants[selectedVariantIndex].key}
            name="variantKey"
            required
            label="Admin.Dashboard.variant.key"
            onValueChange={(val) => {
              setProduct((prev) => {
                const updatedVariants = prev.variants.map((variant, i) =>
                  i === selectedVariantIndex
                    ? { ...variant, key: val }
                    : variant
                );

                return { ...prev, variants: updatedVariants } as ProductModel;
              });
            }}
          />
          <Input
            value={product.variants[selectedVariantIndex].productCode}
            name="variantProductCode"
            required
            label="Admin.Dashboard.variant.productCode"
            onValueChange={(val) => {
              setProduct((prev) => {
                const updatedVariants = prev.variants.map((variant, i) =>
                  i === selectedVariantIndex
                    ? { ...variant, productCode: val }
                    : variant
                );

                return { ...prev, variants: updatedVariants } as ProductModel;
              });
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
        {product.variants[selectedVariantIndex].properties.map(
          (property, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-3 border-b border-primary pb-5 relative"
              >
                <button
                  type="button"
                  className="bg-primary text-tertiary text-xl w-8 pb-1 aspect-square rounded-full hover:-translate-y-1 duration-500 absolute -left-10 top-8"
                  onClick={() => {
                    if (
                      product.variants[selectedVariantIndex].properties
                        .length <= 1
                    )
                      return;

                    setProduct((prev) => {
                      const updatedVariants = prev.variants.map(
                        (variant, i) => {
                          if (i === selectedVariantIndex) {
                            const updatedProperties = variant.properties.filter(
                              (_, j) => j !== index
                            );
                            return {
                              ...variant,
                              properties: updatedProperties,
                            };
                          }
                          return variant;
                        }
                      );
                      return {
                        ...prev,
                        variants: updatedVariants,
                      } as ProductModel;
                    });
                  }}
                >
                  -
                </button>
                <div className="flex gap-10">
                  <Input
                    value={property.key}
                    required
                    label="Admin.Dashboard.property.key"
                    onValueChange={(val) => {
                      setProduct((prev) => {
                        const updatedVariants = prev.variants[
                          selectedVariantIndex
                        ].properties.map((property, i) =>
                          i === index
                            ? {
                                ...property,
                                key: val,
                              }
                            : property
                        );

                        return {
                          ...prev,
                          variants: [
                            ...prev.variants.slice(0, selectedVariantIndex),
                            {
                              ...prev.variants[selectedVariantIndex],
                              properties: updatedVariants,
                            },
                            ...prev.variants.slice(selectedVariantIndex + 1),
                          ],
                        } as ProductModel;
                      });
                    }}
                  />
                  <Combobox
                    label="Admin.Dashboard.property.type"
                    options={DataUnitList.map((c) => ({
                      key: c.value,
                      label: `Admin.Dashboard.property.Type.${c.key}`,
                    }))}
                    noEmptySelection
                    className="text-text"
                    value={property.data.unit as string}
                    onValueChange={(val) => {
                      setProduct(
                        (prev) =>
                          ({
                            ...prev,
                            variants: prev.variants.map((variant, i) =>
                              i === selectedVariantIndex
                                ? {
                                    ...variant,
                                    properties: variant.properties.map((p) =>
                                      p.key === property.key
                                        ? val === DataUnit.TEXT
                                          ? PropertyModel.emptyTextProperty()
                                          : val === DataUnit.COUNT
                                          ? PropertyModel.emptyCountProperty()
                                          : val === DataUnit.WEIGHT
                                          ? PropertyModel.emptyWeightProperty()
                                          : PropertyModel.emptyLengthProperty()
                                        : p
                                    ),
                                  }
                                : variant
                            ),
                          } as ProductModel)
                      );
                    }}
                  />
                </div>
                <div className="flex gap-10">
                  <Input
                    value={property.title.tr}
                    required
                    label="Admin.Dashboard.property.titleTr"
                    onValueChange={(val) => {
                      setProduct((prev) => {
                        const updatedProperties = prev.variants[
                          selectedVariantIndex
                        ].properties.map((property, i) =>
                          i === index
                            ? {
                                ...property,
                                title: {
                                  ...property.title,
                                  tr: val,
                                },
                              }
                            : property
                        );

                        return {
                          ...prev,
                          variants: [
                            ...prev.variants.slice(0, selectedVariantIndex),
                            {
                              ...prev.variants[selectedVariantIndex],
                              properties: updatedProperties,
                            },
                            ...prev.variants.slice(selectedVariantIndex + 1),
                          ],
                        } as ProductModel;
                      });
                    }}
                  />
                  <Input
                    value={property.title.en}
                    required
                    label="Admin.Dashboard.property.titleEn"
                    onValueChange={(val) => {
                      setProduct((prev) => {
                        const updatedProperties = prev.variants[
                          selectedVariantIndex
                        ].properties.map((property, i) =>
                          i === index
                            ? {
                                ...property,
                                title: {
                                  ...property.title,
                                  en: val,
                                },
                              }
                            : property
                        );

                        return {
                          ...prev,
                          variants: [
                            ...prev.variants.slice(0, selectedVariantIndex),
                            {
                              ...prev.variants[selectedVariantIndex],
                              properties: updatedProperties,
                            },
                            ...prev.variants.slice(selectedVariantIndex + 1),
                          ],
                        } as ProductModel;
                      });
                    }}
                  />
                </div>
                <div>
                  {property.data.unit === DataUnit.COUNT ? (
                    <div className="flex gap-10">
                      <Input
                        label="Admin.Dashboard.amount"
                        defaultValue={property.data.value.amount.toString()}
                        onBlur
                        required
                        onValueChange={(val) => {
                          const newValue =
                            val === "" || isNaN(parseFloat(val))
                              ? 0
                              : parseFloat(val);
                          setProduct(
                            (prev) =>
                              ({
                                ...prev,
                                variants: prev.variants.map((variant, i) =>
                                  i === selectedVariantIndex
                                    ? {
                                        ...variant,
                                        properties: variant.properties.map(
                                          (p) =>
                                            p.key === property.key
                                              ? {
                                                  ...p,
                                                  data: {
                                                    ...p.data,
                                                    value: {
                                                      amount: newValue,
                                                      unitText: (
                                                        p.data as CountDataModel
                                                      ).value.unitText,
                                                    },
                                                  },
                                                }
                                              : p
                                        ),
                                      }
                                    : variant
                                ),
                              } as ProductModel)
                          );
                        }}
                      />
                      <Input
                        value={property.data.value.unitText.tr}
                        label="Admin.Dashboard.unitTextTr"
                        onValueChange={(val) => {
                          setProduct(
                            (prev) =>
                              ({
                                ...prev,
                                variants: prev.variants.map((variant, i) =>
                                  i === selectedVariantIndex
                                    ? {
                                        ...variant,
                                        properties: variant.properties.map(
                                          (p) =>
                                            p.key === property.key
                                              ? {
                                                  ...p,
                                                  data: {
                                                    ...p.data,
                                                    value: {
                                                      amount: (
                                                        p.data as CountDataModel
                                                      ).value.amount,
                                                      unitText: {
                                                        ...(
                                                          p.data as CountDataModel
                                                        ).value.unitText,
                                                        tr: val,
                                                      },
                                                    },
                                                  },
                                                }
                                              : p
                                        ),
                                      }
                                    : variant
                                ),
                              } as ProductModel)
                          );
                        }}
                      />
                      <Input
                        value={property.data.value.unitText.en}
                        label="Admin.Dashboard.unitTextEn"
                        onValueChange={(val) => {
                          setProduct(
                            (prev) =>
                              ({
                                ...prev,
                                variants: prev.variants.map((variant, i) =>
                                  i === selectedVariantIndex
                                    ? {
                                        ...variant,
                                        properties: variant.properties.map(
                                          (p) =>
                                            p.key === property.key
                                              ? {
                                                  ...p,
                                                  data: {
                                                    ...p.data,
                                                    value: {
                                                      amount: (
                                                        p.data as CountDataModel
                                                      ).value.amount,
                                                      unitText: {
                                                        ...(
                                                          p.data as CountDataModel
                                                        ).value.unitText,
                                                        en: val,
                                                      },
                                                    },
                                                  },
                                                }
                                              : p
                                        ),
                                      }
                                    : variant
                                ),
                              } as ProductModel)
                          );
                        }}
                      />
                    </div>
                  ) : property.data.unit === DataUnit.TEXT ? (
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-10 mt-10 text-primary self-center">
                        <SpanL>Locale.tr</SpanL>
                        <div className="bg-primary w-px" />
                        <SpanL>Locale.en</SpanL>
                      </div>
                      {property.data.value.map((textData, index) => (
                        <div key={index} className="flex gap-10">
                          <Input
                            value={textData.tr}
                            required
                            onValueChange={(val) => {
                              setProduct(
                                (prev) =>
                                  ({
                                    ...prev,
                                    variants: prev.variants.map((variant, i) =>
                                      i === selectedVariantIndex
                                        ? {
                                            ...variant,
                                            properties: variant.properties.map(
                                              (p) =>
                                                p.key === property.key
                                                  ? {
                                                      ...p,
                                                      data: {
                                                        ...p.data,
                                                        value: (
                                                          p.data
                                                            .value as LocaleModel[]
                                                        ).map((value, idx) =>
                                                          idx === index
                                                            ? {
                                                                ...value,
                                                                tr: val,
                                                              }
                                                            : value
                                                        ),
                                                      },
                                                    }
                                                  : p
                                            ),
                                          }
                                        : variant
                                    ),
                                  } as ProductModel)
                              );
                            }}
                          />
                          <Input
                            value={textData.en}
                            required
                            onValueChange={(val) => {
                              setProduct(
                                (prev) =>
                                  ({
                                    ...prev,
                                    variants: prev.variants.map((variant, i) =>
                                      i === selectedVariantIndex
                                        ? {
                                            ...variant,
                                            properties: variant.properties.map(
                                              (p) =>
                                                p.key === property.key
                                                  ? {
                                                      ...p,
                                                      data: {
                                                        ...p.data,
                                                        value: (
                                                          p.data
                                                            .value as LocaleModel[]
                                                        ).map((value, idx) =>
                                                          idx === index
                                                            ? {
                                                                ...value,
                                                                en: val,
                                                              }
                                                            : value
                                                        ),
                                                      },
                                                    }
                                                  : p
                                            ),
                                          }
                                        : variant
                                    ),
                                  } as ProductModel)
                              );
                            }}
                          />
                        </div>
                      ))}
                      <div className="flex gap-4 self-center">
                        <button
                          type="button"
                          className="bg-primary text-tertiary text-2xl w-8 aspect-square rounded-full hover:-translate-y-1 duration-500"
                          onClick={() => {
                            setProduct(
                              (prev) =>
                                ({
                                  ...prev,
                                  variants: prev.variants.map((variant, i) =>
                                    i === selectedVariantIndex
                                      ? {
                                          ...variant,
                                          properties: variant.properties.map(
                                            (p) =>
                                              p.key === property.key
                                                ? {
                                                    ...p,
                                                    data: {
                                                      ...p.data,
                                                      value: [
                                                        ...(p.data
                                                          .value as LocaleModel[]),
                                                        LocaleModel.empty(),
                                                      ],
                                                    },
                                                  }
                                                : p
                                          ),
                                        }
                                      : variant
                                  ),
                                } as ProductModel)
                            );
                          }}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="bg-primary text-tertiary text-2xl w-8 aspect-square rounded-full hover:-translate-y-1 duration-500"
                          onClick={() => {
                            setProduct(
                              (prev) =>
                                ({
                                  ...prev,
                                  variants: prev.variants.map((variant, i) =>
                                    i === selectedVariantIndex
                                      ? {
                                          ...variant,
                                          properties: variant.properties.map(
                                            (p) =>
                                              p.key === property.key
                                                ? {
                                                    ...p,
                                                    data: {
                                                      ...p.data,
                                                      value: [
                                                        ...(
                                                          p.data
                                                            .value as LocaleModel[]
                                                        ).slice(0, -1),
                                                      ],
                                                    },
                                                  }
                                                : p
                                          ),
                                        }
                                      : variant
                                  ),
                                } as ProductModel)
                            );
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ) : property.data.unit === DataUnit.LENGTH ? (
                    <div className="flex gap-3">
                      <Input
                        label="Admin.Dashboard.width"
                        defaultValue={property.data.value.width.toString()}
                        onBlur
                        onValueChange={(val) => {
                          const newValue =
                            val === "" || isNaN(parseFloat(val))
                              ? 0
                              : parseFloat(val);
                          setProduct(
                            (prev) =>
                              ({
                                ...prev,
                                variants: prev.variants.map((variant, i) =>
                                  i === selectedVariantIndex
                                    ? {
                                        ...variant,
                                        properties: variant.properties.map(
                                          (p) =>
                                            p.key === property.key
                                              ? {
                                                  ...p,
                                                  data: {
                                                    ...p.data,
                                                    value: {
                                                      ...(p.data.value as {
                                                        width: number;
                                                        height: number;
                                                        depth: number;
                                                      }),
                                                      width: newValue,
                                                    },
                                                  },
                                                }
                                              : p
                                        ),
                                      }
                                    : variant
                                ),
                              } as ProductModel)
                          );
                        }}
                      />
                      <Input
                        label="Admin.Dashboard.height"
                        defaultValue={
                          property.data.value.height === undefined
                            ? ""
                            : property.data.value.height.toString()
                        }
                        onBlur
                        onValueChange={(val) => {
                          const newValue =
                            val === "" || isNaN(parseFloat(val))
                              ? 0
                              : parseFloat(val);

                          const property =
                            product.variants[selectedVariantIndex].properties[
                              index
                            ];

                          const oldPropertyValue = property.data.value as {
                            width: number;
                            height: number;
                            depth?: number;
                          };

                          const newPropertyValue: {
                            width?: number;
                            height?: number;
                            depth?: number;
                          } = {
                            ...(oldPropertyValue.width !== undefined
                              ? { width: oldPropertyValue.width }
                              : {}),
                            ...(newValue !== 0 ? { height: newValue } : {}),
                            ...(oldPropertyValue.depth !== undefined
                              ? { depth: oldPropertyValue.depth }
                              : {}),
                          };

                          setProduct(
                            (prev) =>
                              ({
                                ...prev,
                                variants: prev.variants.map((variant, i) =>
                                  i === selectedVariantIndex
                                    ? {
                                        ...variant,
                                        properties: variant.properties.map(
                                          (p) =>
                                            p.key === property.key
                                              ? {
                                                  ...p,
                                                  data: {
                                                    ...p.data,
                                                    value: newPropertyValue,
                                                  },
                                                }
                                              : p
                                        ),
                                      }
                                    : variant
                                ),
                              } as ProductModel)
                          );
                        }}
                      />
                      <Input
                        label="Admin.Dashboard.depth"
                        defaultValue={
                          property.data.value.depth === undefined
                            ? ""
                            : property.data.value.depth.toString()
                        }
                        onBlur
                        onValueChange={(val) => {
                          const newValue =
                            val === "" || isNaN(parseFloat(val))
                              ? 0
                              : parseFloat(val);

                          const property =
                            product.variants[selectedVariantIndex].properties[
                              index
                            ];

                          const oldPropertyValue = property.data.value as {
                            width: number;
                            height: number;
                            depth?: number;
                          };

                          const newPropertyValue: {
                            width?: number;
                            height?: number;
                            depth?: number;
                          } = {
                            ...(oldPropertyValue.width !== undefined
                              ? { width: oldPropertyValue.width }
                              : {}),
                            ...(oldPropertyValue.height !== undefined
                              ? { height: oldPropertyValue.height }
                              : {}),
                            ...(newValue !== 0 ? { depth: newValue } : {}),
                          };
                          setProduct(
                            (prev) =>
                              ({
                                ...prev,
                                variants: prev.variants.map((variant, i) =>
                                  i === selectedVariantIndex
                                    ? {
                                        ...variant,
                                        properties: variant.properties.map(
                                          (p) =>
                                            p.key === property.key
                                              ? {
                                                  ...p,
                                                  data: {
                                                    ...p.data,
                                                    value: newPropertyValue,
                                                  },
                                                }
                                              : p
                                        ),
                                      }
                                    : variant
                                ),
                              } as ProductModel)
                          );
                        }}
                      />
                    </div>
                  ) : property.data.unit === DataUnit.WEIGHT ? (
                    <Input
                      label="Admin.Dashboard.weight"
                      defaultValue={property.data.value.toString()}
                      onBlur
                      required
                      onValueChange={(val) => {
                        const newValue =
                          val === "" || isNaN(parseFloat(val))
                            ? 0
                            : parseFloat(val);
                        setProduct(
                          (prev) =>
                            ({
                              ...prev,
                              variants: prev.variants.map((variant, i) =>
                                i === selectedVariantIndex
                                  ? {
                                      ...variant,
                                      properties: variant.properties.map((p) =>
                                        p.key === property.key
                                          ? {
                                              ...p,
                                              data: {
                                                ...p.data,
                                                value: newValue,
                                              },
                                            }
                                          : p
                                      ),
                                    }
                                  : variant
                              ),
                            } as ProductModel)
                        );
                      }}
                    />
                  ) : (
                    <div>Error</div>
                  )}
                </div>
              </div>
            );
          }
        )}
        <div className="flex gap-3">
          <ButtonL
            className="border border-primary px-6 py-1"
            onClick={() => {
              setProduct(
                (prev) =>
                  ({
                    ...prev,
                    variants: prev.variants.map((variant, i) =>
                      i === selectedVariantIndex
                        ? {
                            ...variant,
                            properties: [
                              ...variant.properties,
                              PropertyModel.emptyCountProperty(),
                            ],
                          }
                        : variant
                    ),
                  } as ProductModel)
              );
            }}
          >
            Admin.Dashboard.countModel
          </ButtonL>
          <ButtonL
            className="border border-primary px-6 py-1"
            onClick={() => {
              setProduct(
                (prev) =>
                  ({
                    ...prev,
                    variants: prev.variants.map((variant, i) =>
                      i === selectedVariantIndex
                        ? {
                            ...variant,
                            properties: [
                              ...variant.properties,
                              PropertyModel.emptyTextProperty(),
                            ],
                          }
                        : variant
                    ),
                  } as ProductModel)
              );
            }}
          >
            Admin.Dashboard.textModel
          </ButtonL>
          <ButtonL
            className="border border-primary px-6 py-1"
            onClick={() => {
              setProduct(
                (prev) =>
                  ({
                    ...prev,
                    variants: prev.variants.map((variant, i) =>
                      i === selectedVariantIndex
                        ? {
                            ...variant,
                            properties: [
                              ...variant.properties,
                              PropertyModel.emptyLengthProperty(),
                            ],
                          }
                        : variant
                    ),
                  } as ProductModel)
              );
            }}
          >
            Admin.Dashboard.lengthModel
          </ButtonL>
          <ButtonL
            className="border border-primary px-6 py-1"
            onClick={() => {
              setProduct(
                (prev) =>
                  ({
                    ...prev,
                    variants: prev.variants.map((variant, i) =>
                      i === selectedVariantIndex
                        ? {
                            ...variant,
                            properties: [
                              ...variant.properties,
                              PropertyModel.emptyWeightProperty(),
                            ],
                          }
                        : variant
                    ),
                  } as ProductModel)
              );
            }}
          >
            Admin.Dashboard.weightModel
          </ButtonL>
        </div>
        <div className="flex gap-6 border-t border-primary mt-10 pt-10">
          <div className="flex flex-col gap-1">
            <SpanL className="text-primary text-lg ml-2">
              Admin.Dashboard.coverImage
            </SpanL>
            <ImageInput
              initialImage={initialImages ? initialImages[0] : undefined}
              onChange={(file) =>
                setImages((prev) => {
                  prev[0] = file;
                  return [...prev];
                })
              }
              onRemove={() => {
                setImages((prev) => {
                  prev[0] = null;
                  return [...prev];
                });

                if (initialImages[0]) {
                  deleteImage(0);
                }
              }}
            />
          </div>
          <div className="bg-primary w-px mt-15 mb-5" />
          <div className="flex flex-col gap-1">
            <SpanL className="text-primary text-lg ml-2">
              Admin.Dashboard.images
            </SpanL>
            <div className="flex gap-3">
              <ImageInput
                initialImage={initialImages ? initialImages[1] : undefined}
                onChange={(file) =>
                  setImages((prev) => {
                    prev[1] = file;
                    return [...prev];
                  })
                }
                onRemove={() => {
                  setImages((prev) => {
                    prev[1] = null;
                    return [...prev];
                  });

                  if (initialImages[1]) {
                    deleteImage(1);
                  }
                }}
              />
              <ImageInput
                initialImage={initialImages ? initialImages[2] : undefined}
                onChange={(file) =>
                  setImages((prev) => {
                    prev[2] = file;
                    return [...prev];
                  })
                }
                onRemove={() => {
                  setImages((prev) => {
                    prev[2] = null;
                    return [...prev];
                  });

                  if (initialImages[2]) {
                    deleteImage(2);
                  }
                }}
              />
              <ImageInput
                initialImage={initialImages ? initialImages[3] : undefined}
                onChange={(file) =>
                  setImages((prev) => {
                    prev[3] = file;
                    return [...prev];
                  })
                }
                onRemove={() => {
                  setImages((prev) => {
                    prev[3] = null;
                    return [...prev];
                  });

                  if (initialImages[3]) {
                    deleteImage(3);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <ButtonL
          type="button"
          disabled={loading}
          className="bg-primary text-tertiary px-9 py-2 mt-4 rounded-full hover:-translate-y-1 duration-500 max-2xl:px-7 max-md:self-center max-md:px-12 max-md:py-2.5"
          onClick={() => updateImages()}
        >
          Admin.Dashboard.updateImages
        </ButtonL>
      </div>
    </form>
  );
}

export default ProductFields;
