import Head from "next/head";
import Button from "../components/Button";
import MainImage from "../components/MainImage";
import sanityClient, { urlFor } from "../../sanity";

export default function Home({ workImage, artworkImage }) {
  return (
    <div>
      <Head>
        <title>Dua Junaid | Home</title>
      </Head>
      <div className="gap-14 flex flex-col">
        <div className="flex flex-col sm:flex-row gap-5">
          <MainImage
            title="Conceptual Work"
            imageUrl={urlFor(workImage).url()}
            link="/work"
          />
          <MainImage
            title="Artwork"
            imageUrl={urlFor(artworkImage).url()}
            link="/artwork"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <Button href="/contact">Contact</Button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const query = `*[_type == "siteconfig"]`;
  const fields = await sanityClient.fetch(query);
  return {
    props: {
      workImage: fields[0].workImage,
      artworkImage: fields[0].artImage,
    },
    revalidate: 10,
  };
}
