import Image from 'next/image'
import Nav from './components/nav'
import Hero from './components/hero'
import Services from './components/services'
import Contact from './components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  )
}
