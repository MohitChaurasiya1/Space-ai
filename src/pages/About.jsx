function About() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#071d49] mb-4">
              About
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-8">
              Spacecraft Health Monitoring (SHM)
            </h2>

            <p className="text-gray-700 leading-8 mb-5">
              Spacecraft health monitoring (SHM) is critical for ensuring the
              reliability, safety, and efficiency of space missions. Advanced
              solutions for real-time anomaly detection, fault diagnosis, and
              predictive maintenance are required due to the growing complexity
              of spacecraft systems.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              Traditional techniques for finding anomalies mostly rely on
              ground-based analysis, which is challenging to use because of
              communication delays, bandwidth limits, and the inability to make
              decisions in real time.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              This project is aimed to develop an AI-based embedded system that
              can function within the computing limitations of space missions
              and carry out real-time onboard anomaly identification and
              diagnosis.
            </p>

            <p className="text-gray-700 leading-8">
              The proposed system will use both Machine Learning (ML) and Deep
              Learning (DL) to find faults, classify anomalies, and support
              autonomous spacecraft decision-making while ensuring high
              accuracy, low latency, and efficient utilization of onboard
              computational resources.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/images/about-space.png"
              alt="Spacecraft Health Monitoring"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-t-4 border-[#071d49]">
            <h2 className="text-4xl font-bold  text-blue-900 mb-6">
              Mission
            </h2>

            <p className="text-lg text-gray-700 leading-9">
              To develop an AI-powered embedded system for spacecraft health
              monitoring that enables real-time anomaly detection, fault
              diagnosis, and autonomous decision support while operating
              efficiently within the limited computational resources of
              onboard spacecraft. The system aims to enhance mission safety,
              reliability, and operational efficiency through intelligent
              telemetry analysis and adaptive AI technologies.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-t-4 border-purple-700">
            <h2 className="text-4xl font-bold  text-blue-900 mb-6">
              Vision
            </h2>

            <p className="text-lg text-gray-700 leading-9">
              To build intelligent, autonomous, and resilient spacecraft
              capable of continuously monitoring their own health,
              predicting failures, and ensuring safer, more reliable,
              and mission-ready space exploration. The long-term vision
              is to support future ISRO missions and human spaceflight
              programs with advanced onboard AI systems that reduce
              dependence on ground intervention.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;