import Image from "next/image";
import blazkowski from "../../public/damian_blazkowski_barber.jpg";
import slider from "../../public/o-nas.jpg";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'O nas - Barber Room Przemyśl',
    description: 'Damian Błażkowski to przede wszystkim młody, kreatywny stylista nieustannie szlifujący swoją wiedzę. To właśnie dzięki jego wielkiej pasji do barberingu powstało to klimatyczne miejsce na mapie Przemyśla.',
}

const About = () => {
    return (

        <>
            <header className="relative w-full h-auto overflow-hidden bg-center bg-no-repeat bg-cover" >
                <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " alt="" src={slider} />

                <div className="absolute inset-0 bg-primary opacity-70"></div>
                <div className="relative">

                    <div className="relative py-24 font-serif text-6xl font-black text-center lg:text-left lg:ml-64 lg:text-9xl text-secondary lg:py-64">
                        <h1 className="">O nas</h1>
                    </div>
                </div>
            </header>
            <section className="bg-primary pb-10 md:py-20 px-4 leading-relaxed">
                <div className="items-end pt-16 text-xl lg:mx-8 xl:mx-auto lg:space-x-8 lg:flex xl:w-4/5 container max-w-5xl">
                    <Image className="w-full md:w-1/2" src={blazkowski} alt="Damian Błakowski" />
                    <p className="pt-8 text-white lg:pt-0 w-full md:w-1/2">
                        <strong>BARBER ROOM BŁAŻKOWSKI</strong> to nowe miejsce na mapie Przemyśla, które powstało z myślą o mężczyznach którzy chcą w szczególny sposób zadbać o siebie. Oferujemy najwyższej jakości profesjonalne usługi barberskie. W tym miejscu mężczyźni będą mogli poczuć się wyjątkowo.
                    </p>
                </div>
                <p className="pt-8 text-xl text-white lg:pt-16 lg:mx-8 xl:mx-auto xl:w-4/5 container max-w-5xl">
                    Właściciel Damian Błażkowski to przede wszystkim młody, kreatywny stylista szlifujący swoją wiedzę, to właśnie dzięki jego wielkiej pasji do barberingu powstało to klimatyczne miejsce.
                    Był on instruktorem fryzjerstwa w Studio WELLA Professionals z siedzibą w Warszawie. Swoje cenne doświadczenie oraz wiedzę zdobywa przede wszystkim pod okiem Magdaleny Błażkowskiej i w Akademii Stylizacji Babicz & Babicz, a także w wielu akademiach na świecie miedzy innymi Vidal Sassoon, Sanrizz, Toni&Guy.
                    Brał również udział w wielu szkoleniach Barberskich w kraju a także za granicą m.in. na Ukrainie pod okiem barberów z Syrii oraz w Wielkiej Brytanii.
                </p>
            </section>
        </>
    );
};
export default About;
