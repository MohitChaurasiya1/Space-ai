function Architecture() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#071d49] mb-4">
              System Architecture
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-8">
              Integrated AI-Based Fault Classification and Health Monitoring
            </h2>

            <p className="text-gray-700 leading-8 mb-5">
              In the primary connection, if the telemetry link is functional,
              on-board AI-based fault classification processes spacecraft
              health data in real-time. The proposed model within the
              telemetry system detects faults and anomalies, ensuring
              continuous monitoring of both spacecraft systems and health.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              The AI Core in the health monitoring system utilizes this data
              for multi-layered monitoring, including biomarker tracking,
              environmental sensing, and passive health assessments. This
              allows for real-time decision-making without relying on
              Earth-based intervention.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              In case of on-board AI processing failure or unreliable
              telemetry links, a backup connection ensures continued
              monitoring through ground-based processing.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              The telemetry data is sent to Earth via the SST Server and
              INET transceiver, where the Telemetry Processing System and
              AI fault classification models analyze the encrypted data.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              The processed results are then transmitted back to the
              spacecraft, providing critical health insights and mission
              adjustments.
            </p>

            <p className="text-gray-700 leading-8">
              This dual-layered approach ensures robust, AI-driven fault
              detection and health monitoring, even in the event of
              communication challenges during deep space missions. The
              proposed solution will follow the setup shown in Figure 1.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/images/Architecture1.jpeg"
              alt="System Architecture"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

        </div>
        {/* AI Pipelines Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/images/Architecture2.jpeg"
              alt="AI Pipelines"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#071d49] mb-4">
              System Architecture - AI Pipelines
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-8">
              Approach
            </h2>

            <p className="text-gray-700 leading-8 mb-5">
              This Project involves a hybrid AI strategy that combines edge
              computing-optimized ML and DL approaches. That strategy makes use of
              both supervised and unsupervised learning to help discover anomalies in a
              variety of operational contexts.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              In order to reduce resource consumption, frameworks like TensorFlow Lite,
              ONNX, and custom inference engines will be used to ensure lightweight
              model deployment. The AI model will be designed to function autonomously
              with limited or no ground intervention, enhancing spacecraft resilience.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              Anomalies will be categorized based on severity, with predictive
              mechanisms in place to anticipate potential failures before they occur. To
              improve anomaly classification efficiency, feature selection methods like
              Principal Component Analysis (PCA) and autoencoders will be used.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              Additionally, to allow the AI model to adjust to shifting spacecraft
              conditions during long mission durations, adaptive learning approaches
              that incorporate reinforcement learning and transfer learning will be
              applied.
            </p>

            <p className="text-gray-700 leading-8">
              In onboard telemetry monitoring, in a typical scenario, anomaly detection
              can be accomplished using the CNN-LSTM ensemble model. The Hybrid
              LSTM-Autoencoder models for sequential anomaly detection with
              memory-efficient encoding is shown in Figure 3. The various stages of
              anomaly detection approach is as follows:
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Architecture;