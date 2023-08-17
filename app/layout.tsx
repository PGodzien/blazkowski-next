import './globals.css'
import localFont from "next/font/local";
import Footer from './components/footer';
import { Lora } from "next/font/google";
import Nav from './components/nav';

const barlow = localFont({
  src: [
    {
      path: '../public/fonts/Barlow/Barlow-Thin.ttf',
      weight: '100'
    },
    {
      path: '../public/fonts/Barlow/Barlow-ExtraLight.ttf',
      weight: '200'
    },
    {
      path: '../public/fonts/Barlow/Barlow-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Barlow/Barlow-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/Barlow/Barlow-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/Barlow/Barlow-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/Barlow/Barlow-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/Barlow/Barlow-ExtraBold.ttf',
      weight: '800'
    },
    {
      path: '../public/fonts/Barlow/Barlow-Black.ttf',
      weight: '900'
    },
  ],
  variable: '--font-barlow'
})

const lora = Lora({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora'
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${lora.variable} font-sans`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>

  )
}
