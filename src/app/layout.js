import "./globals.css";
import { Providers } from "@/provider";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Blog de viagem",
  description: "Blog de viagem descrição",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
    </Providers>
  );
}
