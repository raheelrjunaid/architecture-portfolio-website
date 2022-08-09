import Project from "../../components/Project";
import sanityClient from "../../../sanity";

export default Project;

export async function getStaticProps({ params }) {
  const query = `*[_type == "project" && slug.current == "${params.slug}" && isArtwork == false]`;
  const project = await sanityClient.fetch(query);
  return {
    props: {
      project: project[0],
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "project"] | order(publishedAt desc)`;
  const projects = await sanityClient.fetch(query);
  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug.current,
      },
    })),
    fallback: false,
  };
}
