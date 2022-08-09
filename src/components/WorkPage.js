import { useRouter } from "next/router";
import MainImage from "./MainImage";
import { urlFor } from "../../sanity";
import Head from "next/head";

export const WorkPage = ({ projects }) => {
  const router = useRouter();
  return projects.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Head>
        <title>
          Dua Junaid |{" "}
          {router.pathname[1].toUpperCase() + router.pathname.slice(2)}
        </title>
      </Head>
      {projects.map((project) => (
        <div key={project.id}>
          <MainImage
            title={project.title}
            imageUrl={urlFor(project.mainImage).url()}
            link={`${router.pathname}/${project.slug.current}`}
            hideCaption
          />
        </div>
      ))}
    </div>
  ) : (
    <>
      <Head>
        <title>
          Dua Junaid |{" "}
          {router.pathname[1].toUpperCase() + router.pathname.slice(2)}
        </title>
      </Head>
      <h1 className="text-center text-3xl text-zinc-700">
        Stay Tuned for Upcoming Projects!
      </h1>
    </>
  );
};

export default WorkPage;
