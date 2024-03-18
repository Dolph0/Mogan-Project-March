import Beaches from "@/components/Playa/Beaches";
import Download from "@/components/Playa/Download";
import Fees from "@/components/Playa/Fees";
import Hero from "@/components/Playa/Hero";
export default function Home() {
  return (
    <>
      <main className="w-screen min-h-screen">
        <Hero />
        <Download />
        <Beaches />
        <Fees />
      </main>
    </>
  );
}
