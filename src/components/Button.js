import Link from "next/link";

export const Button = ({
  children,
  variant,
  leftIcon,
  rightIcon,
  href = "#",
  ...props
}) =>
  props.type === "submit" ? (
    <button
      {...props}
      className={`${
        variant === "secondary"
          ? "border text-zinc-900"
          : "text-white bg-zinc-900 hover:bg-gradient-to-b from-zinc-700 to-zinc-900"
      } border-zinc-900 font-medium py-2 px-4 transition-all hover:shadow-lg flex items-center gap-2`}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  ) : (
    <Link href={href}>
      <button
        {...props}
        className={`${
          variant === "secondary"
            ? "border text-zinc-900"
            : "text-white bg-zinc-900 hover:bg-gradient-to-b from-zinc-700 to-zinc-900"
        } border-zinc-900 font-medium py-2 px-4 transition-all hover:shadow-lg flex items-center gap-2`}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    </Link>
  );

export default Button;
