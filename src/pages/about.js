import Image from "next/image";

export const About = () => (
  <div className="w-2/3 mx-auto space-y-9">
    <div className="flex gap-5">
      <div className="relative w-[50em] aspect-[1/1]">
        <Image
          src="https://dummyimage.com/600x400/000/fff"
          alt="Main Portrait"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-zinc-900 text-4xl uppercase font-light leading-snug">
          hello!
          <br />
          <span className="text-zinc-500">my name is dua junaid</span>
        </h1>
        <p className="text-zinc-800">
          <span className="font-['BioRhyme'] text-4xl">N</span>ostrud fugiat est
          veniam commodo adipisicing fugiat voluptate. Aliquip proident velit
          exercitation voluptate aliquip laborum minim mollit sunt aute.
          Consectetur aute laborum occaecat.
        </p>
      </div>
    </div>
  </div>
);

export default About;
