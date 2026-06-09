import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "300"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Forge - AI App Builder",
  description: "App builder",
  icons: {
    icon: "/logo-short.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          // This maps Clerk's base typography to your Tailwind theme's DM Sans font
          fontFamily: "var(--font-sans)",
        },
        elements: {
          // If you want specific headings inside the modal to use your Lora serif font:
          cardBox: "font-sans",
          headerTitle: "font-serif tracking-wide text-2xl",
          formButtonPrimary: "font-sans font-medium",
        },
      }}
    >
      <html suppressHydrationWarning lang="en">
        <body className={`${lora.variable} ${dmSans.variable} `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
