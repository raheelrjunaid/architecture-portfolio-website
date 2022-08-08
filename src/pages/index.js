import Head from "next/head";
import Link from "next/link";
import { Mail } from "tabler-icons-react";
import Button from "../components/Button";
import MainImage from "../components/MainImage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-14 gap-14 flex flex-col">
        <div className="flex gap-5">
          <MainImage
            title="Conceptual Work"
            imageUrl="https://dummyimage.com/600x400/000/fff"
            link="/conceptual-work"
          />
          <MainImage
            title="Artwork"
            imageUrl="https://dummyimage.com/600x400/000/fff"
            link="/artwork"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <Button type="secondary">Virtual Portfolio</Button>
          <Button rightIcon={<Mail size={20} className="opacity-80" />}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}