import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between ">
        
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/iiita-logo.png"
            alt="SPACE-AI Logo"
            className="h-14 w-14 object-contain"
          />

          <span className="text-3xl font-bold tracking-wide">
            SPACE-AI
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-[15px] font-medium">
          <Link to="/" className="hover:text-blue-400 transition">
            Welcome
          </Link>

          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link to="/objectives" className="hover:text-blue-400 transition">
            Objectives
          </Link>

          <Link to="/methodology" className="hover:text-blue-400 transition">
            Methodology
          </Link>

          <Link to="/architecture" className="hover:text-blue-400 transition">
            Architecture
          </Link>

          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;