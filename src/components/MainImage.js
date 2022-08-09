import Link from "next/link";
import Image from "next/image";

export const MainImage = ({ title, imageUrl, link }) => (
  <Link href={link || "#"}>
    <div className="flex flex-col w-full">
      <div className="relative w-full aspect-[4/3] bg-center cursor-pointer">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 items-center justify-center bg-white/80 hover:opacity-100 opacity-0 z-10 transition hidden lg:flex">
          <h2
            className="text-4xl uppercase font-extralight tracking-widest"
            style={{
              textShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            {title}
          </h2>
        </div>
      </div>
      <p className="text-center text-lg font-light my-2 text-zinc-600 lg:hidden">
        {title}
      </p>
    </div>
  </Link>
);

export default MainImage;
