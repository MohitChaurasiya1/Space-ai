function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#071d49] text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Contact Information
        </h1>

        <p className="text-lg text-gray-300">
          Get in touch regarding the SPACE-AI research project
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="mb-14">
          <h2 className="text-4xl font-bold text-[#071d49] mb-4">
            Project Contact
          </h2>

          <p className="text-gray-700 leading-8">
            This research project is conducted at the Indian Institute of
            Information Technology Allahabad (IIITA).
          </p>
        </div>

        <div className="mb-14">
          <h2 className="text-4xl font-bold text-[#071d49] mb-6">
            Research Team
          </h2>

          <div className="space-y-6 text-gray-700 leading-8">

            <div>
              <p className="font-bold">
                Principal Investigator:
              </p>
              <p>Prof. Sonali Aggrawal</p>
            </div>

            <div>
              <p className="font-bold">
                Co-Principal Investigator:
              </p>
              <p>Mr. ABC</p>
              <p>Email: abc@istrac.gov.in</p>
            </div>
            <div>
              <p className="font-bold">
                Research Associate
              </p>
              <p>Mr. ABC </p>
              <p>Email: abc@istrac.gov.in</p>
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#071d49] mb-6">
            Institutional Address
          </h2>

          <div className="space-y-3 text-gray-700 leading-8">

            <p>
              <strong>Department:</strong> Computer Science &
              Engineering
            </p>

            <p>
              <strong>Institution:</strong> Indian Institute of
              Information Technology Allahabad (IIITA)
            </p>

            <p>
              <strong>Location:</strong> CC-3, IIITA, Prayagraj, Uttar Pradesh, India
            </p>

          </div>
        </div>

      </section>
    </>
  );
}

export default Contact;