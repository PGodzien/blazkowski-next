import Image from "next/image";
import type { Metadata } from "next";
import slider from "../../public/oferta.jpg";
import strzyzenieIcon from "@/public/strzyzenie.svg";
import trymowanieIcon from "@/public/trymowanie.svg";
import comboIcon from "@/public/combo.svg";
import golenieIcon from "@/public/golenie.svg";
import coveringIcon from "@/public/covering.svg";
import depilacjaIcon from "@/public/depilacja.svg";

export const metadata: Metadata = {
  title: "Usługi barberskie - Barber Room Przemyśl",
  description:
    "Zapraszamy do zapoznania się z pełną ofertą naszego Barber Roomu. Świadczymy najwyszej jakości usługi barberskie i fryzjerskie na terenie Przemyśla.",
};

// 1) Dane w const
const SERVICE_GROUPS = [
  // grupa 1
  [
    {
      id: "haircut",
      title: "STRZYŻENIE",
      description:
        "Usługa zawiera profesjonalny dobór fryzury, mycie oraz stylizacje.",
      price: "90 zł",
      icon: strzyzenieIcon, // <-- ZMIANA
    },
    {
      id: "haircut-beard",
      title: "Strzyżenie męskie + trymowanie brody",
      description:
        "Usługa zawiera profesjonalny dobór fryzury, mycie oraz stylizacje.",
      price: "125 zł",
      icon: strzyzenieIcon, // <-- ZMIANA
    },
  ],
  // grupa 2
  [
    {
      id: "full-combo",
      title: "BARBER FULL COMBO",
      description:
        "Usługa zawiera strzyżenie męskie, trymowanie brody, okład z gorącego ręcznika, konturowanie brzytwą, depilację woskiem włosów z nosa, profesjonalne kosmetyki oraz masaż twarzy.",
      price: "150 zł",
      icon: comboIcon, // <-- ZMIANA
    },
    {
      id: "head-shave",
      title: "Golenie głowy brzytwą",
      description: "",
      price: "100 zł",
      icon: golenieIcon, // <-- ZMIANA
    },
  ],
  // grupa 3
  [
    {
      id: "beard-razor",
      title: "TRYMOWANIE BRODY ORAZ KONTUROWANIE BRZYTWĄ",
      description:
        "Usługa zawiera trymowanie brody, okład z gorącego ręcznika, konturowanie brzytwą, profesjonalne kosmetyki oraz masaż twarzy.",
      price: "75 zł",
      icon: comboIcon, // <-- ZMIANA
    },
    {
      id: "beard-contour",
      title: "TRYMOWANIE BRODY ORAZ KONTUROWANIE",
      description:
        "Usługa zawiera trymowanie brody, konturowanie maszynką, profesjonalne kosmetyki oraz masaż twarzy.",
      price: "65 zł",
      icon: trymowanieIcon, // <-- ZMIANA (ponowne użycie tej samej ikony)
    },
  ],
  // grupa 4
  [
    {
      id: "cover-gray",
      title: "COVERING UP GRAY",
      description:
        "Usługa zawiera profesjonalne tuszowanie siwizny za pomocą kosmetyków SYSTEM PROFFESIONAL GRADUAL TONE, mycie oraz stylizacje.",
      price: "65 zł",
      icon: coveringIcon, // <-- ZMIANA
    },
    {
      id: "wax-depilation",
      title: "DEPILACJA WOSKIEM WŁOSÓW Z USZU ORAZ NOSA",
      description: "",
      price: "10 zł",
      icon: depilacjaIcon, // <-- ZMIANA
    },
  ],
];

const Services = () => {
  return (
    <>
      <header className="relative w-full h-auto overflow-hidden bg-center bg-no-repeat bg-cover">
        <Image
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
          src={slider}
        />
        <div className="absolute inset-0 bg-primary opacity-70" />
        <div className="relative">
          <div className="relative py-24 font-serif text-6xl font-black text-center lg:text-left lg:ml-64 lg:text-9xl text-secondary lg:py-64">
            <h1>Usługi</h1>
          </div>
        </div>
      </header>

      <section className="bg-primary">
        {/* tu jedziemy po grupach żeby zachować Twój układ: 2 w rzędzie */}
        {SERVICE_GROUPS.map((group, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index === 0 ? "pt-20 lg:pt-32" : ""
            } pb-10 mx-auto space-y-12 max-w-7xl justify-evenly lg:pb-20 lg:space-y-0 lg:flex lg:flex-row ${
              index === 2 ? "mx-4 lg:mx-auto" : ""
            }`}
          >
            {group.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center space-y-6 text-center lg:text-left lg:w-1/3 lg:items-start"
              >
                <Image
                  alt=""
                  width={100}
                  height={200}
                  className=""
                  src={service.icon}
                />
                <p className="font-serif text-3xl font-bold text-white uppercase lg:text-4xl">
                  {service.title}
                </p>
                {service.description ? (
                  <p className="w-3/4 text-center text-white lg:text-left lg:text-lg lg:w-full">
                    {service.description}
                  </p>
                ) : null}
                <h1 className="text-4xl font-bold text-secondary">
                  {service.price}
                </h1>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default Services;
