import Articles from "@/components/Parking/Home/Articles";
import Discount from "@/components/Parking/Home/Discount";
import InfoForm from "@/components/Parking/Home/InfoForm/Index";
import Places from "@/components/Parking/Home/Places";
import Recharge from "@/components/Parking/Home/Recharge";
import VideoArea from "@/components/Parking/Home/VideoArea";

export default function page() {
  return (
    <main>
      <VideoArea />
      <Places />
      <InfoForm />
      <Discount />
      <Articles />
      <Recharge />
    </main>
  );
}
