import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ButtonEffectWrapper from '@/components/util/ButtonEffectWrapper';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "큐비몰 - 최고의 전자제품 쇼핑몰",
  description: "최고의 전자제품을 합리적인 가격으로 만나보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <CartProvider>
          <ButtonEffectWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
          </ButtonEffectWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
