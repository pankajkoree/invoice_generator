import { BackgroundLines } from "@/components/ui/background-lines";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice generator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundLines>{children}</BackgroundLines>
      </body>
    </html>
  );
}
