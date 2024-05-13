import Blog from "@/components/Blog/Blog";
import Suggestion from "@/components/Blog/Suggestion";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="pt-6 md:pt-12">
          <Blog />
          <Suggestion />
        </div>
      </div>
    </>
  );
}
