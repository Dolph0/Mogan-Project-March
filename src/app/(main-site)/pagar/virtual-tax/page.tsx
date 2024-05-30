import Caraousal from "@/components/HomePage/Caraousal.1";
import receiptImg from "@/public/images/pagar/image-1.png";
import reCaptcha from "@/public/images/pagar/image-2.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="container mx-auto max-w-7xl px-4 lg:px-8 md:pb-12 xl:pb-20">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-6">
        <div className="space-y-0.5 sm:space-y-3">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Introducir datos del recibo
          </h2>
          <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
            Oficina Virtual Tributaria
          </p>
        </div>
        <div className="bg-brand-gray/15 px-3 sm:px-8 py-12">
          <div className="grid grid-cols-1 max-md:gap-12 md:grid-cols-2 ">
            <div className="order-2 md:order-1">
              <p className="font-semibold text-sm text-brand-blue">
                1. Señale el impuesto a pagar introduciendo la IDENTIFICACIÓN,
                la REFERENCIA y el IMPORTE del pago. Encontrará estos datos
                impresos en el documento de pago.
              </p>
              <form
                action=""
                className="py-12 md:py-20 xl:pl-5 xl:pr-12 max-sm:max-w-[240px] mx-auto"
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex gap-2 xl:gap-5 xl:items-center flex-col xl:flex-row">
                    <label
                      htmlFor="Reference"
                      className="block xl:w-[265px]  font-semibold shrink-0 text-center sm:text-left xl:text-right text-sm text-brand-blue"
                    >
                      Referencia (12 dígitos)
                    </label>
                    <input
                      type="text"
                      id="Reference"
                      name="Reference"
                      className="border border-black shadow-3xl w-full text-sm text-black font-semibold"
                    />
                  </div>
                  <div className="flex flex-col xl:flex-row gap-2 xl:gap-5 xl:items-center">
                    <label
                      htmlFor="Reference"
                      className="block xl:w-[265px] shrink-0  font-semibold text-center sm:text-left xl:text-right text-sm text-brand-blue"
                    >
                      Identificación (10 dígitos)
                    </label>
                    <input
                      type="text"
                      id="Reference"
                      name="Reference"
                      className="border border-black shadow-3xl w-full text-sm text-black font-semibold"
                    />
                  </div>
                  <div className="flex flex-col xl:flex-row gap-2 xl:gap-5 xl:items-center">
                    <label
                      htmlFor="Reference"
                      className="block xl:w-[265px] font-semibold shrink-0 text-center sm:text-left xl:text-right text-sm text-brand-blue"
                    >
                      Importe (Formato válido:1234,56€)
                    </label>
                    <input
                      type="text"
                      id="Reference"
                      name="Reference"
                      className="border border-black shadow-3xl w-full text-sm text-black font-semibold"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="order-1 md:order-2 space-y-6 lg:space-y-12 lg:pr-8 max-md:px-4 md:pl-8">
              <Image src={receiptImg} alt={"receipt"} />
              <div className="hidden md:flex justify-end">
                <Image src={reCaptcha} alt={"recaptcha"} />
              </div>
            </div>
          </div>
          <div className="pt-6 space-y-14 sm:space-y-16">
            <p className="font-semibold text-sm text-brand-blue max-sm:pb-6">
              2. <br />
              a) Pago mediante tarjeta bancaria <br />
              b) Si lo desea también puede realizar el trámite o pago a través
              de la banca electrónica de su entidad bancaria si es entidad
              colaboradora del Ayuntamiento de Mogán, para lo que ha de entrar a
              través de la página web de su banco.
            </p>

            <p className="font-semibold text-sm text-brand-blue">
              3. Conserve el documento que le emite la entidad colaboradora.
            </p>

            {/*  ==================== put here mobile captcha function  ====================*/}

            <div className="md:hidden flex justify-center">
              <Image src={reCaptcha} alt={"recaptcha"} />
            </div>

            <p className="font-semibold text-[10px] sm:text-sm text-brand-blue">
              Cualquiera que sea la modalidad de pago utilizada, podrá solicitar
              la Carta de Pago transcurridas al menos 24 horas desde la
              transacción, en las Oficinas de Recaudación del Ayuntamiento de
              Mogán.
              <br />
              <br />
              Avda. de la Constitución, 14 <br />
              Calle Tamarán 435140 Mogán 35120 <br />
              Arguineguín Telf.: 928 15 88 06 Telf.: 928 56 85 66 Fax.: 928 56
              85 12 Fax.: 928 73 50 04 <br />
              Correo electrónico:{" "}
              <a
                href="mailto:gestionmunicipal@gestmogan.com"
                className="underline"
              >
                gestionmunicipal@gestmogan.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
