import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#071d49] text-white shadow-lg">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/iiita-logo.png"
            alt="SPACE-AI Logo"
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />

          <span className="text-2xl md:text-3xl font-bold tracking-wide">
            SPACE-AI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <Link to="/" onClick={scrollTop}>Welcome</Link>
          <Link to="/about" onClick={scrollTop}>About</Link>
          <Link to="/objectives" onClick={scrollTop}>Objectives</Link>
          <Link to="/methodology" onClick={scrollTop}>Methodology</Link>
          <Link to="/architecture" onClick={scrollTop}>Architecture</Link>
          <Link to="/contact" onClick={scrollTop}>Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#071d49] border-t border-white/10">
          <div className="flex flex-col">

            <Link to="/" onClick={scrollTop} className="px-6 py-4 border-b border-white/10">
              Welcome
            </Link>

            <Link to="/about" onClick={scrollTop} className="px-6 py-4 border-b border-white/10">
              About
            </Link>

            <Link to="/objectives" onClick={scrollTop} className="px-6 py-4 border-b border-white/10">
              Objectives
            </Link>

            <Link to="/methodology" onClick={scrollTop} className="px-6 py-4 border-b border-white/10">
              Methodology
            </Link>

            <Link to="/architecture" onClick={scrollTop} className="px-6 py-4 border-b border-white/10">
              Architecture
            </Link>

            <Link to="/contact" onClick={scrollTop} className="px-6 py-4">
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;