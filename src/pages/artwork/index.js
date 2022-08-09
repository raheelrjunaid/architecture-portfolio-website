import WorkPage from "../../components/WorkPage";
import sanityClient from "../../../sanity";

export default WorkPage;

export async function getStaticProps() {
  const query = `*[_type == "project" && isArtwork == true] | order(publishedAt desc)`;
  const projects = await sanityClient.fetch(query);
  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}
