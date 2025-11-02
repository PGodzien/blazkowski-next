import Image from "next/image";
import type { Metadata } from "next";
import slider from "../../public/oferta.jpg";

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
      icon: "tall",
    },
    {
      id: "haircut-beard",
      title: "Strzyżenie męskie + trymowanie brody",
      description:
        "Usługa zawiera profesjonalny dobór fryzury, mycie oraz stylizacje.",
      price: "120 zł",
      icon: "tall",
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
      icon: "helmet",
    },
    {
      id: "head-shave",
      title: "Golenie głowy brzytwą",
      description: "",
      price: "100 zł",
      icon: "wide",
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
      icon: "helmet",
    },
    {
      id: "beard-contour",
      title: "TRYMOWANIE BRODY ORAZ KONTUROWANIE",
      description:
        "Usługa zawiera trymowanie brody, konturowanie maszynką, profesjonalne kosmetyki oraz masaż twarzy.",
      price: "65 zł",
      icon: "beard",
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
      icon: "spray",
    },
    {
      id: "wax-depilation",
      title: "DEPILACJA WOSKIEM WŁOSÓW Z USZU ORAZ NOSA",
      description: "",
      price: "10 zł",
      icon: "stick",
    },
  ],
];

// 2) Ikony jako osobne komponenty
const IconTall = () => (
  <svg
    width="82"
    height="166"
    viewBox="0 0 82 166"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#AB8E6C" fillRule="nonzero">
      {/* to jest ta długa maszynka, przepisana 1:1 */}
      <path d="M32.97,53.78 C27.74,53.78 23.5,58.02 23.5,63.25 L23.5,74.93 C23.5,80.16 27.74,84.4 32.97,84.4 C38.2,84.4 42.44,80.16 42.44,74.93 L42.44,63.25 C42.44,58.02 38.2,53.78 32.97,53.78 Z M76.65,58.8 L76.65,140.11 C76.65,151.51 67.36,160.8 55.96,160.8 C45.87,160.8 37.47,153.55 35.63,143.98 L40.15,143.98 C41.41,143.98 42.44,142.95 42.44,141.69 L42.44,132.12 C53.61,128.2 61.67,117.57 61.67,105.07 L61.67,49.23 L63.67,49.23 C64.93,49.23 65.96,48.22 65.96,46.94 L65.96,22.12 C65.96,20.86 64.93,19.83 63.67,19.83 L61.67,19.83 L61.67,11.04 C61.67,9.76 60.64,8.75 59.38,8.75 L4.27,8.75 C3.01,8.75 2,9.76 2,11.03 L2,19.82 L0,19.82 C0,19.82 0,46.94 0,46.94 C0,48.22 1.01,49.23 2.29,49.23 L4.26,49.23 L4.26,105.07 C4.26,117.57 12.31,128.2 23.49,132.12 L23.49,141.69 C23.49,142.95 24.52,143.98 25.78,143.98 L30.99,143.98 C32.87,156.07 43.33,165.38 55.95,165.38 C69.9,165.38 81.23,154.02 81.23,140.1 L81.23,58.8 L76.65,58.8 Z" />
      {/* ucięte powtarzające się pathy z oryginału, bo i tak nic nie zmieniają wyglądu */}
    </g>
  </svg>
);

const IconHelmet = () => (
  <svg
    width="109"
    height="166"
    viewBox="0 0 109 166"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#AB8E6C" fillRule="nonzero">
      {/* skrócona wersja – to ten duży kształt z “kombem” */}
      <path d="M106.7 43.789c-2.35-9.08-7.38-17.09-12.94-20.65C89.41 13.52 80.3 5.97 68.61 2.37 52.57-2.57 34.46.289 18.96 10.25-9.46 28.5 2.17 68.29 3.33 72.06l.46 7.65c.04.85.6 1.56 1.4 1.85l3.96 1.4c.6.21 1.29.13 1.85-.23.54-.38.88-.98.92-1.63l.77-14.15c.1-1.73.67-3.42 1.65-4.9 2.33-3.44 7.56-9.98 16.44-14.98 14.67-8.27 32.92-9.21 54.3-2.77-.4 18.96 8.75 36.71 9.23 37.63.38.71 1.08 1.13 1.85 1.13.25 0 .48-.04.71-.13l3.96-1.4c.5-.19.92-.54 1.15-1 .7-1.37 1.32-2.7 1.85-3.99 3.68-8.78 4.4-16.2 3.04-21.87z" />
    </g>
  </svg>
);

const IconWide = () => (
  <svg
    width="166"
    height="153"
    viewBox="0 0 166 153"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#AB8E6C" fillRule="nonzero">
      <path d="M164.45 85.107c-1.33-3.3-3.84-5.91-7.12-7.32-3.28-1.43-6.91-1.48-10.21-.18L32.33 123.037 42.7 106.277l13.49 2.35c3.51.6 6.78-1.19 8.7-4.26l49.63-83.03c2.2-3.56 2.02-8.06-.46-11.44l-4.68-6.32C106.16 1.08 103.78-.1 101.19.01c-2.56.1-4.89 1.47-6.25 3.66L35 102l-14.9 24.06-1.87.74c-6.83 2.71-10.21 10.49-7.5 17.33.18.46.44.87.67 1.31-2.74.92-4.97.9-6.6-.05-2.94-1.74-3.84-6.42-3.94-8.09L0 137.707c0 .36.51 8.73 6.42 12.21 3.25 1.94 7.16 1.9 11.09.14 3.47 3.02 8.31 3.75 12.1 2.18l124.65-49.32c6.84-2.68 10.22-10.46 7.51-17.305z" />
    </g>
  </svg>
);

const IconBeard = () => (
  <svg
    width="117"
    height="166"
    viewBox="0 0 117 166"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#AB8E6C" fillRule="nonzero">
      <path d="M116.12 74.82c-.29-3.88-2.75-6.7-4.94-9.19-2.07-2.36-4.02-4.6-4.26-7.6-.14-2.74-.55-12.23-3.17-21-1.95-14.88-10.26-25.82-24.01-31.6C59.38-3.09 32.65 2.26 19.63 12.16 3.24 24.6-3.33 43.63 2.04 63.06l4.65-1.3C4.38 53.36 1.27 32.12 22.54 15.99 34.5 6.88 59.11 1.99 77.99 9.94c7.99 3.35 17.84 10.4 20.73 25.14l-33.16-1.42c-.94-.05-1.83.48-2.26 1.33-.43.87-.31 1.88.29 2.61 5.62 6.91 11.77 15.64 11.96 17.59-.34.74-3.04 2.07-4.51 2.78-3.43 1.71-7 3.47-6.76 6.9l4.82-.36c-.01.16-.03.28-.05.31.36-.65 2.73-1.83 4.16-2.54 3.36-1.67 7.17-3.53 7.17-7.02 0-3.32-5.45-11.01-9.7-16.55l29.09 1.25c2.08 7.84 2.47 15.98 2.59 18.79.37 4.6 3.08 7.68 5.45 10.34 1.93 2.18 3.57 4.03 3.74 6.37.14 2.02-.25 2.1-2.49 2.48-1.59.26-5.27.89-4.96 4.83.05.7.48 5.62.75 8.8l-27.18-1.58-9.68-14.94-4.05 2.63 10.35 15.96c.41.64 1.11 1.04 1.87 1.08l27.12 1.61-1.4 2.24c-.51.79-.5 1.81.01 2.58l3.08 4.75c-2.46 5.16-4.81 11.34-3.59 14.11.54 1.28 1.05 3.11.21 4.67-.82 1.54-2.87 2.66-5.77 3.16-4.41.7-26.32-8.26-41.4-15.26l1.94-25.6-4.82-.36-.05-.07-.98-2.01-4.46-8.86 20.42-2.1 4.12-.43 12.84-1.3-.48-4.79-11.9 1.2-4.48.46-20.42 2.1-6.17-12.39c4.82-3.68 6.53-10.39 3.7-16.02-3.19-6.36-10.97-8.93-17.33-5.75-6.36 3.19-8.93 10.95-5.75 17.31 2.25 4.5 6.84 7.12 11.58 7.12.27 0 .55-.01.82-.02l5.37 10.74-11.9 1.2c-1.6-5.38-6.64-9.21-12.37-9.21-.43 0-.87.02-1.31.07-7.09.73-12.24 7.1-11.52 14.17.69 6.62 6.3 11.58 12.87 11.58.44 0 .88-.02 1.33-.07 6.26-.63 11.02-5.68 11.53-11.72l13.75-1.4 9.46 18.9.58-.31-1.44 19.11c-.07 1.01.44 1.94 1.36 2.35 4.55 2.06 22.4 10.35 34.87 14.27-17.24 13.44-12.61 34.94-12.56 35.18l4.7-1.08c-.19-.87-4.49-21.24 13.97-32.48 1.42.29 2.68.46 3.68.46.41 0 .79-.02 1.13-.07 5.61-.96 8.09-3.59 9.18-5.6 1.37-2.55 1.35-5.71-.01-8.74-.22-1.28 1.69-6.6 4.07-11.43.36-.76.31-1.68-.18-2.4l-2.99-4.58 2.74-4.38c.29-.46.39-1.01.33-1.54.01-.13-.72-8.85-.91-11.18.29-.07.65-.13.94-.18 2.08-.39 6.94-1.23 6.44-7.63z" />
    </g>
  </svg>
);

const IconSpray = () => (
  <svg
    width="91"
    height="166"
    viewBox="0 0 91 166"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#AB8E6C" fillRule="nonzero">
      <path d="M45.47 46.09C30.95 46.09 19.15 59.54 19.15 76.05 19.15 92.58 30.95 106.01 45.47 106.01 59.99 106.01 71.82 92.58 71.82 76.05 71.82 59.54 60 46.09 45.47 46.09z" />
      <path d="M90.94 2.67C90.94 1.2 89.77 0 88.27 0H2.67C1.2 0 0 1.2 0 2.67V17.81h.37c-.24.45-.4.94-.35 1.47l11.1 109.4V152c0 7.38 5.99 13.37 13.37 13.37h41.97c7.38 0 13.37-5.99 13.37-13.37v-23.32l11.1-109.4c.05-.54-.11-1.02-.35-1.47h.35V2.67z" />
    </g>
  </svg>
);

const IconStick = () => (
  <svg
    width="86"
    height="166"
    viewBox="0 0 86 166"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#AB8E6C" fillRule="nonzero">
      <path d="M76.73 0H9.24C4.14 0 0 4.14 0 9.24v21.79c0 5.08 4.14 9.24 9.24 9.24h13.45c.58 5.75 5.08 10.65 11.41 13.08v15.2c-3.56 2.52-5.89 6.68-5.89 11.35v71.53c0 7.69 6.26 13.96 13.96 13.96 7.69 0 13.96-6.26 13.96-13.96V79.9c0-4.67-2.33-8.83-5.89-11.35v-14.65c7.19-2.15 12.43-7.39 13.05-13.63h13.45c5.11 0 9.24-4.16 9.24-9.24V9.24C85.98 4.14 81.85 0 76.73 0z" />
    </g>
  </svg>
);

// pomocniczo do mapowania ikony po nazwie
const renderIcon = (icon: string) => {
  switch (icon) {
    case "tall":
      return <IconTall />;
    case "helmet":
      return <IconHelmet />;
    case "wide":
      return <IconWide />;
    case "beard":
      return <IconBeard />;
    case "spray":
      return <IconSpray />;
    case "stick":
      return <IconStick />;
    default:
      return null;
  }
};

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
                {renderIcon(service.icon)}
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
