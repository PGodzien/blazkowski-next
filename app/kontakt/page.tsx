import Image from "next/image";
import slider from "../../public/kontakt.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Damian Błakowski - Barber Room Przemyśl',
    description: 'Oferujemy najwyższej jakości profesjonalne usługi barberskie w Przemyślu – strzyenie męski, trymowanie brody, barber full combo, konturowanie, covering up gray, golenie i konturowanie brzytwą.',
}

const Contact = () => {
    return (
        <>
            <header className="relative w-full h-auto overflow-hidden bg-center bg-no-repeat bg-cover" >
                <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " alt="" src={slider} />
                <div className="absolute inset-0 bg-primary opacity-70"></div>
                <div className="relative">
                    <div className="relative py-24 font-serif text-6xl font-black text-center lg:text-left lg:ml-64 lg:text-9xl text-secondary lg:py-64">
                        <h1 className="">Kontakt</h1>
                    </div>
                </div>
            </header>
            <div className="flex justify-center py-12 mx-auto bg-primary">
                <div className="container w-full h-1 mx-8 bg-white"></div>
            </div>
            <div className="bg-primary">
                <div className="mx-auto max-w-7xl container px-4 flex justify-around flex-col md:flex-row">
                    <div className="space-y-14">
                        <h3 className="font-serif text-3xl font-bold lg:text-5xl text-secondary uppercase">Błażkowski <br /> Barber Room</h3>
                        <div className="">
                            <p className="text-3xl font-bold text-secondary">Rezerwacja telefoniczna</p>
                            <p className="text-2xl text-white">(16) 670 45 83</p>
                        </div>
                    </div>
                    <div className="space-y-14">
                        <div className="">
                            <p className="text-3xl font-bold text-secondary">Dane kontaktowe</p>
                            <p className="text-2xl text-white">Grunwaldzka 5<br />37-700 Przemyśl</p>
                        </div>
                        <div className="">
                            <p className="mt-12 text-3xl font-bold lg:mt-0 text-secondary">Godziny otwarcia</p>
                            <p className="text-2xl text-white">Wtorek-Piątek 10-18<br />Sobota 8-13</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
