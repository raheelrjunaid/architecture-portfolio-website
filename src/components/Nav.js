import { Instagram, Linkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useState } from "react";
import { Menu2, X } from "tabler-icons-react";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Artwork",
    href: "/artwork",
  },
  {
    name: "Contact",
    href: "mailto:example@email.com",
  },
];

export const Navigation = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="container py-5 flex justify-between border-b border-zinc-400/50 items-center">
      <Link href="/">
        <h2 className="font-['BioRhyme'] text-2xl text-zinc-800 cursor-pointer select-none">
          DJ
        </h2>
      </Link>
      <div className="gap-5 text-zinc-800 items-center text-sm hidden sm:flex">
        {NAV_ITEMS.map(({ name, href }) => (
          <NavLink key={name} href={href}>
            {name}
          </NavLink>
        ))}
        <NavLink href="https://www.instagram.com/duajunaid/">
          <Instagram size={20} />
        </NavLink>
        <NavLink href="https://www.linkedin.com/in/duajunaid/">
          <Linkedin size={20} />
        </NavLink>
      </div>
      <Menu2 className="sm:hidden" size={26} onClick={() => setOpened(true)} />
      {opened && <MobileNav setOpened={setOpened} />}
    </div>
  );
};

const NavLink = ({ children, href }) => (
  <Link href={href}>
    <a className="lowercase hover:opacity-80">{children}</a>
  </Link>
);

const MobileNav = ({ setOpened }) => (
  <div
    className="z-50 fixed inset-0 bg-zinc-100 sm:hidden flex flex-col text-zinc-700 justify-between"
    onClick={() => setOpened(false)}
  >
    <div className="flex flex-col divide-y divide-zinc-300">
      <div className="py-5 pr-4 flex gap-2 items-center justify-end">
        <p className="text-lg text-zinc-800">Close</p>
        <X className="text-zinc-800" size={26} />
      </div>
      {NAV_ITEMS.map(({ name, href }) => (
        <Link href={href} key={name}>
          <a className="lowercase p-6 text-3xl font-extralight">{name}</a>
        </Link>
      ))}
    </div>
    <div className="p-5 flex gap-2 items-center justify-center">
      <NavLink href="https://www.instagram.com/duajunaid/">
        <Instagram size={20} />
      </NavLink>
      <NavLink href="https://www.linkedin.com/in/duajunaid/">
        <Linkedin size={20} />
      </NavLink>
    </div>
  </div>
);

export default Navigation;
