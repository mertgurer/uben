import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ReactLenis from "lenis/react";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "UBEN",
  description: "UBEN world-class papers",
  icons: {
    icon: "/images/uben-logo-square.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <ReactLenis root>
            <div className="flex flex-col">{children}</div>
          </ReactLenis>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
