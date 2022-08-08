import Link from "next/link";
import Image from "next/image";

export const MainImage = ({ title, imageUrl, link }) => (
  <Link href={link || "#"}>
    <div className="relative w-full aspect-[4/3] bg-center cursor-pointer">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-white/80 hover:opacity-100 opacity-0 z-10 transition">
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
  </Link>
);

export default MainImage;
