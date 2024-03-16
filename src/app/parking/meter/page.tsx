import Banner from "@/components/Parking/Meter/Banner";
import Content from "@/components/Parking/Meter/Content";
import Info from "@/components/Parking/Meter/Info";
import Map from "@/components/Parking/Meter/Map";
import TaxRate from "@/components/Parking/Meter/TaxRate";
export default function Meter() {
  return (
    <main>
      <Banner />
      <Info />
      <TaxRate />
      <Content />
      <Map />
    </main>
  );
}
