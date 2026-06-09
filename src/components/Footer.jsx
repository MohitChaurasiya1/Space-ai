function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0b1f57] text-white mt-24"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Project Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              SPACE-AI Research Project
            </h2>

            <p className="text-gray-300 leading-9">
              AI-Based Embedded System for Spacecraft Health Monitoring.
              Optimization of AI Models for Efficient Performance Under
              Limited Computational Resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>Welcome</li>
              <li>About</li>
              <li>Objectives</li>
              <li>Methodology</li>
              <li>Architecture</li>
              <li>Publications</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="className=text-4xl font-extrabold mb-8 tracking-wide">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>Co-PI (Focal Point) - ISRO Centre/Unit</p>

              <p>Mr. Amit Kumar Singh</p>

              <p>Email: amit@istrac.gov.in</p>
            </div>
          </div>

        </div>

        

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-gray-300 font-bold">
          © SPACE-AI Research Project | © Indian Institute of Information Technology Allahabad. All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;