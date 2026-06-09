function Home() {
  return (
    <div>
      <section
        className="min-h-[70vh] md:min-h-[85vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/space-bg.png')",
        }}
      >
        <div className="px-6">
          <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5">
            AI-Based Embedded System for Spacecraft Health Monitoring
          </h4>



          <p className="mt-4 text-base sm:text-lg md:text-xl text-white">
            Optimization of AI Models for Efficient Performance Under Limited Computational Resources
          </p>
        </div>
      </section>
      {/* Project Overview Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          <h2 className="text-4xl font-serif font-bold text-purple-700 mb-8">
            Problem Statement
          </h2>

          <p className="text-gray-700 leading-8 mb-5">
            Space missions rely heavily on real-time telemetry data to monitor the health and performance of spacecraft. Given the complexity and criticality of these missions, any anomaly in the telemetry data can have significant consequences, potentially jeopardizing mission success.
          </p>

          <p className="text-gray-700 leading-8 mb-5">
            Traditional methods for anomaly detection often require extensive ground-based analysis, which may not be feasible in deep space missions due to communication delays and limited bandwidth.
          </p>

          <p className="text-gray-700 leading-8 mb-5">
            In Human space missions, where decisions have to be made in a short time, AI tools will aid astronauts in analyzing and making relevant inferences from onboard telemetry data.
          </p>

          <p className="text-gray-700 leading-8 mb-10">
            Additionally, the computational resources available onboard spacecraft are limited, posing challenges in deploying advanced anomaly detection algorithms.
          </p>

          <h2 className="text-3xl font-serif font-bold  mb-8">
            Research Description
          </h2>

          <p className="text-gray-700 leading-8">
            At present multiple AI models have been trained and deployed for anomaly detection at ground. This research aims to optimize an AI model for onboard telemetry monitoring using Machine Learning (ML) and Deep Learning (DL) algorithms while meeting the computational constraints of spacecraft systems.
          </p>

        </div>
      </section>
    </div>
  );
}

export default Home;