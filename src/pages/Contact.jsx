function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#071d49] to-[#0a2d73] text-white py-24 text-center">
        <h1 className="text-6xl font-extrabold tracking-wide mb-4">
          Contact Information
        </h1>

        <p className="text-xl text-gray-300">
          Get in touch regarding the SPACE-AI research project
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Project Contact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#071d49] border-l-4 border-blue-600 pl-4 mb-6">
            Project Contact
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-2xl">
            <p className="text-gray-700 text-lg leading-8">
              This research project is conducted at the Indian Institute of
              Information Technology Allahabad (IIITA).
            </p>
          </div>
        </div>

        {/* Research Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#071d49] border-l-4 border-blue-600 pl-4 mb-8">
            Research Team
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-2xl">

            <div className="flex flex-col gap-8">

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-bold text-[#071d49] mb-3">
                  Principal Investigator
                </h3>

                <p className="text-lg text-gray-700 mb-2">
                  Prof. Sonali Aggrawal
                </p>

                <p className="text-blue-600">
                  sonali@iiita.ac.in
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-bold text-[#071d49] mb-3">
                  Co-Principal Investigator
                </h3>

                <p className="text-lg text-gray-700 mb-2">
                  Mr. ABC
                </p>

                <p className="text-blue-600">
                  abc@istrac.gov.in
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#071d49] mb-3">
                  Research Associate
                </h3>

                <p className="text-lg text-gray-700 mb-2">
                  Mr. ABC
                </p>

                <p className="text-blue-600">
                  abc@istrac.gov.in
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Institutional Address */}
        <div>
          <h2 className="text-3xl font-bold text-[#071d49] border-l-4 border-blue-600 pl-4 mb-8">
            Institutional Address
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-2xl">

            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                <strong>Department:</strong> Computer Science &
                Engineering
              </p>

              <p>
                <strong>Institution:</strong> Indian Institute of
                Information Technology Allahabad (IIITA)
              </p>

              <p>
                <strong>Location:</strong> CC-3, IIITA, Prayagraj,
                Uttar Pradesh, India
              </p>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

export default Contact;