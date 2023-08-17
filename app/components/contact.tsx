import Image from 'next/image'
import Nav from './nav'
import Hero from './hero'

export default function Contact() {
    return (

        <>
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
            {/* <div className="mx-auto bg-primary flex justify-center">
                <div className="mx-8">
                    <div className="">
                        <h3 className="font-serif text-3xl font-bold lg:text-5xl text-secondary">BŁAŻKOWSKI<br /> BARBER ROOM</h3>
                    </div>
                    <div className="pt-12 lg:flex">
                        <div className="md:mr-20 mr-36">
                            <h4 className="text-3xl font-bold text-secondary">Dane kontaktowe</h4>
                            <p className="text-2xl text-white">Grunwaldzka 5<br />37-700 Przemyśl</p>
                        </div>
                        <div className="">
                            <h4 className="mt-12 text-3xl font-bold lg:mt-0 text-secondary">Godziny otwarcia</h4>
                            <p className="text-2xl text-white">Wtorek-Piątek 10-18<br />Sobota 8-13</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-12 mb-12 lg:mb-0 lg:flex">
                        <p className="text-3xl font-bold text-secondary">Rezerwacja telefoniczna</p>
                        <p className="text-2xl text-white">(16) 670 45 83</p>
                    </div>
                </div>
            </div> */}
        </>

    )
}




