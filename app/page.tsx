import Image from 'next/image'
import Nav from './components/nav'
import Hero from './components/hero'
import Services from './components/services'
import Contact from './components/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barber Room Przemyśl - Damian Błażkowski',
  description: 'Usługi barberskie w Przemyślu. Trymowanie brody, golenie brzytwą, strzyżenie, covering up gray, konnturowanie brody, barber full combo.',
}
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  )
}
