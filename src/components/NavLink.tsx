import Link from "next/link";

export function NavLink({
  href,
  children,
  color = "default",
}: {
  href: string;
  children: React.ReactNode;
  color?: "default" | "white";
}) {
  return (
    <Link
      href={href}
      className={
        color === "default"
          ? "inline-block rounded-lg px-2 py-1 font-medium text-default transition hover:text-main-500"
          : "inline-block rounded-lg px-2 py-1 font-medium text-white transition hover:text-main-100"
      }
    >
      {children}
    </Link>
  );
}
