import { Toaster } from "react-hot-toast";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "color-mix(in srgb, var(--primary), transparent 40%)",
            color: "var(--tertiary)",
            border: "1px solid var(--primary)",
            borderRadius: "12px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "12px",
            paddingBlock: "12px",
            gap: "8px",
          },
        }}
      />
      <div className="flex flex-col">{children}</div>
    </>
  );
}
