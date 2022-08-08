import { ExternalLink } from "tabler-icons-react";
import Button from "../components/Button";
import Link from "next/link";

export const Page404 = () => (
  <div className="text-center mx-auto py-14">
    <div className="space-y-2 mb-8">
      <h1 className="text-6xl font-bold text-zinc-900">404</h1>
      <h2 className="text-lg text-zinc-600">This page doesn&apos;t exist!</h2>
    </div>
    <div className="flex justify-center">
      <Button
        rightIcon={<ExternalLink size={20} className="opacity-80" />}
        href="/"
      >
        Go Back Home
      </Button>
    </div>
  </div>
);

export default Page404;
