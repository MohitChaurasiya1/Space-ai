import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <div className="flex items-center gap-3">
                    <img
                        src="/images/iiita-logo.png"
                        alt="Logo"
                        className="h-10 w-10 object-contain"
                    />

                    <h1 className="text-2xl font-bold">
                        SPACE-AI
                    </h1>
                </div>

                <div className="flex gap-8 font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/objectives">Objectives</Link>
                    <Link to="/methodology">Methodology</Link>
                    <Link to="/architecture">Architecture</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;