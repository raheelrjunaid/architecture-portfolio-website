import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import { ChevronLeft } from "tabler-icons-react";
import Image from "next/image";
import { urlFor } from "../../sanity";
import Head from "next/head";
import MainImage from "./MainImage";
import { useState } from "react";

export default function Project({ project }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(null);

  const toggleModal = (image) => {
    setShowModal(showModal ? null : image);
    document.body.style.overflow = showModal ? "auto" : "hidden";
  };

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
      {project.images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.images?.map((image) => (
            <div key={project.id} onClick={() => toggleModal(image)}>
              <MainImage
                title="Expand"
                imageUrl={urlFor(image).url()}
                hideCaption
              />
            </div>
          ))}
        </div>
      )}
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 opacity-75"></div>
          <div className="bg-white rounded-lg shadow-lg z-10">
            <div className="relative">
              <button
                className="absolute top-0 right-0 m-3 text-zinc-700 hover:text-zinc-900 bg-white/50 rounded-full p-2 transition"
                onClick={toggleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl">
                <img src={urlFor(showModal).url()} />
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
