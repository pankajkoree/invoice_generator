// layout.tsx
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Invoice generator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
