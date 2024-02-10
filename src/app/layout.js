import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog de viagem",
  description: "Blog de viagem descrição",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
