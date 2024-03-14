import Articles from "@/components/parking/Articles";
import Discount from "@/components/parking/Discount";
import InfoForm from "@/components/parking/InfoForm/Index";
import Places from "@/components/parking/Places";
import Recharge from "@/components/parking/Recharge";
import VideoArea from "@/components/parking/VideoArea";

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
