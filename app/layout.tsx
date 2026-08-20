import type { Metadata } from "next";
import "./globals.css";

const title = "lab.sys — sistemas, semânticas, digitalização";
const description =
  "Laboratório heterárquico dedicado a observar sistemas, reconstruir semânticas e investigar infraestruturas digitais.";
const basePath = process.env.PAGES_BASE_PATH ?? "";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteUrl = configuredSiteUrl.replace(/\/$/, "");
const socialImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  icons: { icon: `${basePath}/brand/assets/lab-sys-mark.svg` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${siteUrl}/`,
    title,
    description,
    images: [{ url: socialImage, width: 1200, height: 630, alt: "lab.sys — observar observações, mapear distinções, reconstruir semânticas." }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
