import Image from "next/image";
import { cn } from "@/lib/cn";

const Services = () => {
  const landingServices = [
    {
      title: "PAGOS",
      description: "IMPUESTOS, TASAS Y MULTAS",
      descriptionTextColor: "text-[#0B5438]",
      bgColor: "bg-[#2FAF7E]",
      icon: "/icons/pagos.svg",
      iconWidth: 58,
      iconHeight: 46,
      iconClassName: "w-[31px] h-[25px] sm:w-[58px] sm:h-[46px]",
    },
    {
      title: "SIMULADOR DE PLUSVALÍA",
      description: "CALCULADORA PLUSVALÍA",
      descriptionTextColor: "text-[#797803]",
      bgColor: "bg-[#C9C817]",
      icon: "/icons/home-percentage.svg",
      iconWidth: 60,
      iconHeight: 54,
      iconClassName: "w-[34px] h-[31px] sm:w-[60px] sm:h-[54px]",
    },
    {
      title: "OFICINA TRIBUTARIA",
      description: "OFICINA VIRTUAL TRIBUTARIA",
      descriptionTextColor: "text-[#876603]",
      bgColor: "bg-[#FABD05]",
      icon: "/icons/home.svg",
      iconWidth: 60,
      iconHeight: 54,
      iconClassName: "w-[31px] h-[28px] sm:w-[60px] sm:h-[54px]",
    },
    {
      title: "CALENDARIO",
      description: "CONSULTA PLAZOS DE PAGOS VOLUNTARIOS",
      descriptionTextColor: "text-[#875274]",
      bgColor: "bg-[#E6BED8]",
      icon: "/icons/calendar.svg",
      iconWidth: 54,
      iconHeight: 44,
      iconClassName: "w-[30px] h-[23px] sm:w-[54px] sm:h-[44px]",
    },
    {
      title: "IMPRESOS Y MODELOS",
      description: "DESCARGAR MODELOS E IMPRESOS EN PDF",
      descriptionTextColor: "text-[#810144]",
      bgColor: "bg-[#E7298C]",
      icon: "/icons/write-doc.svg",
      iconWidth: 55,
      iconHeight: 55,
      iconClassName: "w-[29px] h-[29px] sm:w-[55px] sm:h-[55px]",
    },
    {
      title: "PORTAL DE TRANSPARENCIA",
      description: "INFORMACIÓN PÚBLICA DE LA EMPRESA",
      descriptionTextColor: "text-[#03456B]",
      bgColor: "bg-[#0883C8]",
      icon: "/icons/doc.svg",
      iconWidth: 46,
      iconHeight: 55,
      iconClassName: "w-[23px] h-[28px] sm:w-[46px] sm:h-[55px]",
    },
  ];
  return (
    <div className="flex w-full flex-col justify-center gap-7 py-5">
      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-[10px]">
        {landingServices.map((item, index) => (
          <div
            key={index}
            className={cn(
              "col-span-2 flex w-full items-center justify-start gap-7 px-5 py-2 sm:col-span-1 sm:px-9 sm:py-7 ",
              item.bgColor,
              !index ? "sm:rounded-tl-[30px]" : "",
              index === 1 ? "sm:rounded-tr-[30px]" : "",
              index === landingServices.length - 1
                ? "sm:rounded-br-[30px]"
                : "",
              index === landingServices.length - 2
                ? "sm:rounded-bl-[30px]"
                : "",
              index % 2 ? "sm:justify-end" : "sm:justify-start"
            )}
          >
            <Image
              src={item.icon}
              className={cn(
                item.iconClassName,
                index % 2 ? "sm:order-2" : "sm:order-1"
              )}
              alt={"service icon"}
              height={item.iconHeight}
              width={item.iconWidth}
            />
            <div
              className={cn(
                "flex flex-col items-start justify-start",
                index % 2 ? "sm:order-1 sm:items-end" : "sm:order-2"
              )}
            >
              <h3 className="text-[15px] font-extrabold uppercase leading-5 text-white sm:text-[22px] sm:leading-[34px]">
                {item.title}
              </h3>
              <p
                className={cn(
                  "text-[12px] font-normal uppercase leading-[18px] sm:text-lg sm:leading-7",
                  item.descriptionTextColor
                )}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
