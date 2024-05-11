import Card from "@/components/HomePage/Card";
export default function Suggestion() {
  return (
    <div className="space-y-6 lg:space-y-8 pt-4 md:pt-12">
      <h3 className="font-bold text-brand-blue text-xl md:text-[25px]">
        Otras noticias de interés
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-7 lg:grid-cols-3 pb-12 lg:pb-28">
        <Card
          title="Mogán ya gestiona de forma directa las playas que tiene concesionadas"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
          imgSrc="/1.png"
          slug="mogán-ya-gestiona-de"
        />

        <Card
          title="Onalia Bueno da la bienvenida al nuevo personal de las playas"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
          imgSrc="/2.png"
          slug="mogán-ya-gestiona-de"
        />
        <Card
          title="Gestiona Mogán estrena oficina virtual tributaria"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
          imgSrc="/4.png"
          slug="mogán-ya-gestiona-de"
        />
      </div>
    </div>
  );
}
