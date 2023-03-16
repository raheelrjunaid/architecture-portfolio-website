import Image from "next/image";
import Button from "../components/Button";
import sanityClient, { urlFor } from "../../sanity";
import Head from "next/head";

export const About = ({ aboutImage, aboutText }) => {
  return (
    <div className="max-w-screen-md mx-auto space-y-9">
      <Head>
        <title>Dua Junaid | About</title>
      </Head>
      <div className="flex flex-col sm:flex-row gap-9 items-start">
        <Image
          src={urlFor(aboutImage).url()}
          alt="Main Portrait"
          width={3000}
          height={4000}
          objectFit="cover"
        />
        <div className="space-y-6 shrink">
          <h1 className="text-zinc-900 text-3xl uppercase leading-normal">
            hello!
            <br />
            <span className="text-zinc-500 text-xl font-light capitalize">
              my name is dua junaid
            </span>
          </h1>
          <p className="text-zinc-800">{aboutText}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button href="mailto:djrehan777@gmail.com">Contact</Button>
        <Button
          variant="secondary"
          href="https://issuu.com/dua_junaid/docs/portfolio"
        >
          Virtual Portfolio
        </Button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "siteconfig"]`;
  const fields = await sanityClient.fetch(query);
  return {
    props: {
      aboutImage: fields[0].aboutImage,
      aboutText: fields[0].aboutText || "",
    },
    revalidate: 10,
  };
}

export default About;
