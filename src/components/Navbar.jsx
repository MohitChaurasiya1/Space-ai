import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const links = [
    { name: "Welcome", path: "/" },
    { name: "About", path: "/about" },
    { name: "Objectives", path: "/objectives" },
    { name: "Methodology", path: "/methodology" },
    { name: "Architecture", path: "/architecture" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] w-full bg-[#071d49] text-white shadow-lg">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 md:h-20 md:px-6">

        <Link
          to="/"
          onClick={scrollTop}
          className="flex min-w-0 items-center gap-2 md:gap-3"
        >
          <img
            src="/images/iiita-logo.png"
            alt="SPACE-AI Logo"
            className="h-9 w-9 flex-shrink-0 object-contain md:h-14 md:w-14"
          />

          <span className="truncate text-lg font-bold tracking-wide sm:text-2xl md:text-3xl">
            SPACE-AI
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={scrollTop}
              className="hover:text-blue-300 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="flex flex-shrink-0 items-center justify-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="w-full bg-[#071d49] md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={scrollTop}
              className="block border-t border-white/10 px-6 py-4 text-base"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;