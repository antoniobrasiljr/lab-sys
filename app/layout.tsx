import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "lab.sys — sistemas, semânticas, digitalização";
const description =
  "Laboratório heterárquico dedicado a observar sistemas, reconstruir semânticas e investigar infraestruturas digitais.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title,
    description,
    icons: { icon: "/brand/assets/lab-sys-mark.svg" },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      title,
      description,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "lab.sys — observar observações, mapear distinções, reconstruir semânticas." }],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
