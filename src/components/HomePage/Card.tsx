import Image from "next/image";
import Link from "next/link";
type Props = {
  title: string;
  subtitle: string;
  imgSrc: string;
  slug: string;
};

const Card = (props: Props) => {
  return (
    <div className="  bg-[#004870] overflow-hidden rounded-2xl ">
      <div className="">
        <Link href={`/blog/${props.slug}`}>
          <Image
            src={props.imgSrc}
            alt={props.title}
            className="w-full h-48 object-center object-cover"
            height="500"
            width="600"
          />
        </Link>
      </div>
      <div className="pb-10 px-4 sm:px-6 pt-4 space-y-3">
        <h2 className="line-clamp-2">
          <Link
            href={`/blog/${props.slug}`}
            className="text-white block font-semibold text-xl font-sans "
          >
            {props.title}
          </Link>
        </h2>
        <p className=" text-white font-normal text-sm font-sans line-clamp-3">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
