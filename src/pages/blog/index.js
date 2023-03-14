import Link from "next/link";
import Image from "next/image";
import sanityClient from "../../../sanity";
import { urlFor } from "../../../sanity";
import Head from "next/head";

export const Blog = ({ posts }) => (
  <>
    <Head>
      <title>Dua Junaid | Blog</title>
    </Head>
    <h1 className="text-4xl font-bold text-zinc-800 mb-14">Blog</h1>
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.length > 0 &&
        posts.map(
          ({ id, title, slug, publishedAt, mainImage }) =>
            slug && (
              <Link href="/blog/[slug]" as={`/blog/${slug.current}`} key={id}>
                <article className="w-full flex flex-col cursor-pointer gap-0.5">
                  <div className="w-full aspect-[4/3] relative">
                    <Image
                      src={urlFor(mainImage).url()}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-zinc-800">
                    {title}
                  </h2>
                  <span className="text-zinc-500 font-['Zilla_Slab']">
                    {new Date(publishedAt).toLocaleString()}
                  </span>
                </article>
              </Link>
            )
        )}
    </main>
  </>
);

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
