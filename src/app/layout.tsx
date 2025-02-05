import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ThemeProvider from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import CoinContextProvider from "@/components/Home/Hero/CoinContext";
import CryptoDataProvider from "@/context/CryptoDataContext";
const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"></script>

        <ThemeProvider>
          <CryptoDataProvider>
            <CoinContextProvider>
              <Header />
              {children}
              <Footer />

              <ScrollToTop />
            </CoinContextProvider>
          </CryptoDataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
