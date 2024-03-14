import Caraousal from "@/components/HomePage/Caraousal";
import LinkedSections from "@/components/HomePage/LinkedSections";
import VideoSection from "@/components/HomePage/VideoSection";
import Card from "@/components/HomePage/Card";
import MyHeading2 from "@/components/HomePage/MyHeading2";
import Services from "@/components/HomePage/services";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <MyHeading2
          title={<span>Gestiona</span>}
          paragraph={<span>Al servicio del ciudadano</span>}
        />
        <Services />
        <MyHeading2
          title={<span>Esto es lo que nos une</span>}
          paragraph={<span>Nuestro compromiso</span>}
        />
        <div className="flex flex-row justify-center container mx-auto flex-wrap  gap-4 max-w-xl">
          <LinkedSections
            imageUrl="/Playa de Mogán.png"
            subtitle="Tu pequeño paraiso"
            title="Playas"
          />
          <LinkedSections
            imageUrl="/Parking.png"
            subtitle="Accesos ilimitados"
            title="Parking"
          />
          <LinkedSections
            imageUrl="/ZonaAzul.png"
            subtitle="Parquímetro en tu mano"
            title="Zona Azul"
          />
          <LinkedSections
            imageUrl="/VPO.png"
            subtitle="Promociones de viviendas"
            title="VPO"
          />
        </div>
        <div>
          <VideoSection />
        </div>
        <MyHeading2
          title={<span>Últimas noticias</span>}
          paragraph={<span></span>}
        />
        <div className="flex flex-row justify-center container mx-auto flex-wrap gap-4 pb-10">
          <Card
            title="Mogán ya gestiona de forma directa las playas que tiene concesionadas"
            subtitle="Saber más..."
            imgSrc="/1.png"
          />
          <Card
            title="Onalia Bueno da la bienvenida al nuevo personal de las playas"
            subtitle="Saber más..."
            imgSrc="/2.png"
          />
          <Card
            title="Gestiona Mogán estrena oficina virtual tributaria"
            subtitle="Saber más..."
            imgSrc="/4.png"
          />
        </div>
      </div>
    </>
  );
}
