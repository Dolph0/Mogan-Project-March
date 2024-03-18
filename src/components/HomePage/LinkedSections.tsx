import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
};

const LinkedSections = ({ title, subtitle, imageUrl, link }: Props) => {
  return (
    <Link
      href={link}
      className="flex flex-col mt-6 hover:scale-105 transition-all duration-300"
    >
      <div>
        <Image
          alt="title"
          src={imageUrl}
          className=" rounded-3xl"
          layout="cover"
          width={250}
          height={256}
        />
      </div>
      <div className="flex flex-col justify-evenly  items-center">
        <h1 className="font-sans text-blue-900 font-extrabold text-2xl py-1">
          {title}
        </h1>
        <p className="font-sans text-[#004870] font-normal text-sm">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default LinkedSections;
