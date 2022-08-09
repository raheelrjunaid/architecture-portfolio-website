import Head from "next/head";
import Button from "../components/Button";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  if (state.succeeded) {
    return (
      <>
        <Head>
          <title>Dua Junaid | Message Sent</title>
        </Head>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-700">Message Sent!</h1>
          <p className="text-lg font-light mb-5 mt-3">
            You&apos;ll recieve a reply soon
          </p>
          <div className="flex justify-center">
            <Button variant="secondary" href="/">
              Home
            </Button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Dua Junaid | Contact</title>
      </Head>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-sm mx-auto flex flex-col justify-center gap-5"
      >
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-lg font-light">
            Want to get in touch? Fill out your details:
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required
          />
          <ValidationError
            prefix="Full Name"
            field="name"
            errors={state.errors}
            className="text-sm text-red-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            name="email"
            id="email-address"
            placeholder="email@domain.tld"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-sm text-red-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-sm text-red-600"
          />
        </div>
        <ValidationError
          errors={state.errors}
          className="text-sm text-red-600"
        />
        <div className="flex justify-center">
          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
