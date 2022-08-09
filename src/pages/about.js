import Image from "next/image";
import Button from "../components/Button";
import sanityClient, { urlFor } from "../../sanity";

export const About = ({ aboutImage }) => (
  <div className="max-w-screen-sm mx-auto space-y-9">
    <div className="flex flex-col sm:flex-row gap-5">
      <div className="relative aspect-square w-full sm:w-[50em] sm:aspect-auto">
        <Image
          src={urlFor(aboutImage).url()}
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
    <Button type="secondary">Virtual Portfolio</Button>
  </div>
);

export async function getStaticProps() {
  const query = `*[_type == "siteconfig"]`;
  const fields = await sanityClient.fetch(query);
  return {
    props: {
      aboutImage: fields[0].aboutImage,
    },
    revalidate: 60,
  };
}

export default About;
