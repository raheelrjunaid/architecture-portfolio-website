import { Instagram, Linkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="container py-5 flex justify-between border-b border-zinc-400/50">
      <h2 className="font-['BioRhyme'] text-2xl text-zinc-800">DJ</h2>
      {/* Nav Links */}
      <div className="flex gap-5 text-zinc-800 items-center text-sm">
        <NavLink href="/">home</NavLink>
        <NavLink href="/about">about</NavLink>
        <NavLink href="/work">work</NavLink>
        <NavLink href="/artwork">artwork</NavLink>
        <NavLink href="mailto:duajunaid@email.com">contact</NavLink>
        <NavLink href="https://www.instagram.com/duajunaid/">
          <Instagram size={20} />
        </NavLink>
        <NavLink href="https://www.linkedin.com/in/duajunaid/">
          <Linkedin size={20} />
        </NavLink>
      </div>
    </div>
  );
};

const NavLink = ({ children, href }) => (
  <Link href={href}>
    <a className="hover:opacity-80">{children}</a>
  </Link>
);

export default Navigation;
