import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import { ChevronLeft } from "tabler-icons-react";
import Image from "next/image";
import { urlFor } from "../../sanity";
import Head from "next/head";

export default function Project({ project }) {
  const router = useRouter();

  return (
    <article className="text-zinc-900">
      <Head>
        <title>Dua Junaid | {project.title}</title>
      </Head>
      <button
        className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-100 flex items-center gap-2 transition"
        onClick={() => router.back()}
      >
        <ChevronLeft size={18} />
        Back
      </button>
      <div className="my-14 space-y-1 text-center">
        <h1 className="text-4xl font-medium leading-tight mb-1 text-zinc-800 dark:text-zinc-100">
          {project.title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="prose dark:prose-invert prose-sm md:prose-base prose-blockquote:border-zinc-400 prose-blockquote:text-zinc-600 prose-blockquote:font-normal mx-auto">
        {project.mainImage && (
          <div className="relative w-full aspect-video">
            <Image
              src={urlFor(project.mainImage).url()}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
        <PortableText
          value={project.body}
          components={{
            types: {
              image: ({ value }) => {
                return (
                  <div className="relative w-full aspect-video">
                    <Image
                      src={urlFor(value).url()}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                );
              },
            },
          }}
        />
      </div>
    </article>
  );
}
