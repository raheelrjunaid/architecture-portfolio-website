import Project from "../../components/Project";
import sanityClient from "../../../sanity";

export default Project;

export async function getStaticProps({ params }) {
  const query = `*[_type == "post" && slug.current == "${params.slug}"][0]`;
  const post = await sanityClient.fetch(query);

  return {
    props: {
      project: {
        ...post,
        description: new Date(post.publishedAt).toLocaleDateString(),
      },
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
