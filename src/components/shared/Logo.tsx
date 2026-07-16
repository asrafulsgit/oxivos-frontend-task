import Link from "next/link"; 

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-serif italic tracking-tight text-brand-text"
    >
      Lumen &amp; Co.
    </Link>
  );
};

export default Logo;
