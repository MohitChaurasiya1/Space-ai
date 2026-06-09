import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    setMobileTeamOpen(false);
  };



  const links = [
    { name: "Welcome", path: "/" },
    { name: "About", path: "/about" },
    { name: "Objectives", path: "/objectives" },
    { name: "Methodology", path: "/methodology" },
    { name: "Architecture", path: "/architecture" },
    { name: "Publications", path: "/publications" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] w-full bg-[#071d49] text-white shadow-lg">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 md:h-20 md:px-6">

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

        <div className="hidden items-center gap-6 lg:gap-8 text-[15px] font-medium md:flex">
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

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 cursor-pointer hover:text-blue-300 transition"
            >
              Team
              <ChevronDown size={16} />
            </button>

            <div className="absolute right-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="min-w-[220px] overflow-hidden rounded-lg border border-white/10 bg-[#071d49] shadow-xl">
                <Link
                  to="/team/members"
                  onClick={scrollTop}
                  className="block px-5 py-4 hover:bg-blue-900 transition"
                >
                  Members
                </Link>

                <Link
                  to="/team/students"
                  onClick={scrollTop}
                  className="block px-5 py-4 hover:bg-blue-900 transition"
                >
                  Students
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            onClick={scrollTop}
            className="hover:text-blue-300 transition"
          >
            Contact
          </Link>
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

          <div className="border-t border-white/10">
            <button
              type="button"
              onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
              className="flex w-full items-center justify-between px-6 py-4"
            >
              <span>Team</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${mobileTeamOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {mobileTeamOpen && (
              <>
                <Link
                  to="/team/members"
                  onClick={scrollTop}
                  className="block px-10 py-3 text-sm text-gray-300 hover:text-white"
                >
                  Members
                </Link>

                <Link
                  to="/team/students"
                  onClick={scrollTop}
                  className="block px-10 py-3 text-sm text-gray-300 hover:text-white"
                >
                  Students
                </Link>
              </>
            )}
          </div>

          <Link
            to="/contact"
            onClick={scrollTop}
            className="block border-t border-white/10 px-6 py-4 text-base"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;