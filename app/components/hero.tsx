import Image from "next/image";
import Link from "next/link";
import logoBlazkowski from "../../public/logo_blazkowski.png";
import slider from "../../public/slider_barber.jpg";


const Hero = () => {
    return (

        <section className="bg-primary relative overflow-hidden">
            <Image className="absolute inset-0 bg-cover w-full h-auto" alt="blazkowski slider" src={slider} />
            <div className="bg-primary absolute inset-0 bg-opacity-80"></div>
            <div className="container flex flex-col items-center justify-center py-24 mx-auto md:py-24 lg:py-64 lg:flex-row lg:justify-evenly lg:flex">
                <Image className="z-20" alt="Logo Błakowski" src={logoBlazkowski} />
                <div className="z-20 flex flex-col mt-8 text-center text-white lg:text-left lg:mt-0">
                    <h1 className="text-3xl font-bold font-serif">GODZINY OTWARCIA</h1>
                    <p className="text-2xl font-semibold">Wtorek – Piątek: 10-18</p>
                    <p className="text-2xl font-bold">Sobota 8-13</p>
                    <div className="w-auto lg:hidden mt-4">
                        <div className="inline-block">
                            <Link className="relative group inline-block py-3 px-9 font-semibold text-white hover:text-black bg-secondary border-primary border transition duration-300 overflow-hidden" href="tel:+48(16) 670 45 83">
                                <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                <span className="relative">UMÓW SIĘ</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-auto hidden lg:block mt-4">
                        <div className="inline-block">
                            <Link className="relative group inline-block py-3 px-9 font-semibold text-white hover:text-black bg-secondary border-primary border transition duration-300 overflow-hidden" href="/kontakt">
                                <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                <span className="relative">UMÓW SIĘ </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;
