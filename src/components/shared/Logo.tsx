import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="absolute left-1/2 -translate-x-1/2 font-display text-2xl tracking-tight text-primary"
    >
      ZARI
    </Link>
  );
};

export default Logo;
