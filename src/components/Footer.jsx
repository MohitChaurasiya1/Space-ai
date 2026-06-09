function Footer() {
  return (
    <footer className="bg-[#001a4d] border-t-4 border-blue-600 text-white">
      <div className="flex flex-col items-center justify-center py-6">

        <img
          src="/images/iiita-logo.png"
          alt="IIITA Logo"
          className="h-14 w-14 mb-3"
        />

        <p className="text-center text-sm md:text-base font-semibold">
          © 2026 | Funded Academic Research Project
        </p>

        <p className="text-center text-sm md:text-base font-semibold">
          Indian Institute of Information Technology Allahabad (IIITA)
        </p>

      </div>
    </footer>
  );
}

export default Footer;