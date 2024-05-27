import Image from "next/image";

export default function Fees() {
  const charges = [
    {
      beacheName: "Mogán",
      beachePrefix: "Playa",
      arc: null,
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: [
          "Simple: 3,50 € ud/día",
          "Dobles: 20 € ud/día",
          "Sombrillas: 3,50 € ud/día",
        ],
      },
    },
    {
      beacheName: "Taurito",
      beachePrefix: "Playa",
      arc: "right",
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: [
          "Simple: 3,50 € ud/día",
          // "Dobles: 20 € ud/día",
          "Sombrillas: 3,50 € ud/día",
        ],
      },
    },
    {
      beacheName: "Cura",
      beachePrefix: "Playa del",
      arc: null,
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: [
          "Simple: 3,50 € ud/día",
          // "Dobles: 20 € ud/día",
          "Sombrillas: 3,50 € ud/día",
        ],
      },
    },
    {
      beacheName: "Rico",
      beachePrefix: "Puerto",
      arc: "left",
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: ["Simple: 3,50 € ud/día", "Sombrillas: 3,50 € ud/día"],
      },
    },
    {
      beacheName: "Aquamarina",
      beachePrefix: "Playa del",
      arc: null,
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: ["Simple: 3,50 € ud/día", "Sombrillas: 3,50 € ud/día"],
      },
    },
    {
      beacheName: "Patalavaca",
      beachePrefix: "Playa de",
      arc: "right",
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: ["Simple: 3,50 € ud/día", "Sombrillas: 3,50 € ud/día"],
      },
    },
    {
      beacheName: "Costa Alegre",
      beachePrefix: "Playa de",
      arc: "",
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: [
          "Simple: 3,50 € ud/día",
          "Dobles: 20 € ud/día",
          "Sombrillas: 3,50 € ud/día",
        ],
      },
    },
    {
      beacheName: "Marañuelas",
      beachePrefix: "Playa de",
      arc: "left",
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: ["Simple: 3,50 € ud/día", "Sombrillas: 3,50 € ud/día"],
      },
    },
    {
      beacheName: "El Perchel",
      beachePrefix: "Playa",
      arc: "",
      className: "",
      data: {
        name: "Hamacas y sobrillas",
        prices: [
          "Simple: 3,50 € ud/día",
          "Dobles: 20 € ud/día",
          "Sombrillas: 3,50 € ud/día",
        ],
      },
    },
  ];
  return (
    <section className="relative px-8 w-full sm:min-h-screen  pt-10 pb-[116px] sm:pb-[300px] 2xl:pb-[350px] space-y-8 sm:space-y-0 ">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-extrabold text-[32px] sm:text-[42px] leading-[48px] sm:leading-[63px] text-[#004870]">
          Tarifas por playas
        </h2>
        <p className="font-light text-sm text-[#16214A] leading-[21px] text-justify">
          Gestionamos tu comodidad.
        </p>
      </div>
      <div className="max-w-[965px] mx-auto">
        <div className="relative hidden lg:block">
          <Image alt="Fees" src={"/playa/fees.svg"} width={985} height={969} />
          <div className="w-40 h-20  group absolute top-10 right-[160px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-5 -left-1/4  bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Dobles: 20 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40 h-20  group absolute top-64 left-[100px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-1 -left-1/4  bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  {/* <li className="font-light text-sm leading-[21px] text-white">
                    Dobles: 20 € ud/día
                  </li> */}
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40 h-20  group absolute  top-64 right-[170px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-1 -left-1/4 bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  {/* <li className="font-light text-sm leading-[21px] text-white">
                    Dobles: 20 € ud/día
                  </li> */}
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40 h-20  group absolute top-[395px] left-[130px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-5 -left-1/4  bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-52 h-20  group absolute top-[395px] right-[250px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-5 -left-0  bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40 h-20  group absolute top-[565px] left-[250px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-4 -left-0  bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40 h-20  group absolute top-[565px] right-[140px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-5 -left-0  bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Dobles: 20 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40 h-20  group absolute top-[725px] right-[300px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-2 -left-0  bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-40 h-20  group absolute top-[865px] left-[200px]">
            <div className="relative h-full w-full">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute bottom-full -mb-2 -left-0  bg-[#004870]  px-6 py-7 sm:p-6 rounded-[20px] w-[275px]">
                <p className="font-bold text-white text-sm leading-[21px] text-left ">
                  Hamacas y sobrillas
                </p>
                <ul className="list-disc mx-auto pl-6">
                  <li className="font-light text-sm leading-[21px] text-white">
                    Simple: 3,50 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Dobles: 20 € ud/día
                  </li>
                  <li className="font-light text-sm leading-[21px] text-white">
                    Sombrillas: 3,50 € ud/día
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        {charges.map((charge, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <div className="flex items-end justify-start gap-2">
              <p className="font-extrabold text-[#004870] text-xl leading-[30px]">
                {charge.beachePrefix}
                <br />
                <span className="text-[30px]">{charge.beacheName}</span>
              </p>
              <Image
                alt="Arrow right bottom"
                src={"/icons/arrow-right-bottom.svg"}
                className="mb-2"
                width={22}
                height={22}
              />
            </div>
            <div className="relative bg-[#004870] flex flex-col items-center justify-center px-6 py-7 sm:p-6 rounded-[20px] ">
              <p className="font-bold text-white text-sm leading-[21px] text-left ml-[-70px]">
                {charge.data.name}
              </p>
              <ul className="list-disc mx-auto">
                {charge.data.prices.map((price, index) => (
                  <li className="font-light text-sm leading-[21px] text-white" key={index}>
                    {price}
                  </li>
                ))}
              </ul>
              {charge.arc && (
                <Image
                  alt="Arc"
                  src={
                    charge.arc == "right"
                      ? "/icons/arc.svg"
                      : "/icons/reverse-arc.svg"
                  }
                  className={`absolute ${
                    charge.arc == "right"
                      ? "top-[-18px] right-[-18px]"
                      : "bottom-[-18px] left-[-18px]"
                  }`}
                  width={42}
                  height={42}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <Image
        alt="Footer Wave"
        src={"/playa/footer-wave.svg"}
        layout="cover"
        className="hidden sm:block absolute bottom-[-2px] object-cover object-top left-0 w-full h-[250px]"
        width={1440}
        height={261}
      />
      <Image
        alt="Footer Wave Mobile"
        src={"/playa/footer-wave-mobile.svg"}
        layout="cover"
        className="block sm:hidden absolute bottom-[-2px] object-cover left-0 w-full h-[80px]"
        width={800}
        height={80}
      />
    </section>
  );
}
