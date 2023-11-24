import './globals.css'
import localFont from "next/font/local";
import Footer from './components/footer';
import { Eczar } from "next/font/google";
import Nav from './components/nav';


const barlow = Eczar({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow'
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${barlow.variable} font-sans`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>

  )
}
