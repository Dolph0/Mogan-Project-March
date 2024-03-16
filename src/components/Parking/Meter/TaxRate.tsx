import Accordion from "./Accordion";
export default function TaxRate() {
  return (
    <section className="px-8 pt-10 pb-6 lg:py-12 ">
      <div className="max-w-screen-xl mx-auto space-y-6 sm:space-y-12">
        <div className="space-y-3">
          <h2 className="  font-extrabold max-[400px]:text-xl text-2xl md:text-[42px] leading-[1.2] text-brand-teal">
            Cuota tributaria
          </h2>
          <p className="text-sm text-dark max-[430px]:text-justify">
            Las cuotas que regirán para la aplicación de la tasa serán las
            siguientes:
          </p>
        </div>
        <div className="grid gap-0.5 md:gap-2">
          <Accordion title="Tarifa mínima" rate="0,20 €">
            20 minutos por autoliquidación previa al estacionamiento
          </Accordion>
          <Accordion title="1ª Hora" rate="0,55 €">
            Autoliquidación previa al estacionamiento
          </Accordion>
          <Accordion title="2ª Hora" rate="1,35 €">
            Autoliquidación previa al estacionamiento
          </Accordion>
          <Accordion title="3ª Hora" rate="2,00 €">
            Autoliquidación previa al estacionamiento
          </Accordion>
          <Accordion title="4ª Hora" rate="3,00 €">
            Autoliquidación previa al estacionamiento
          </Accordion>
        </div>
      </div>
    </section>
  );
}
