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
        {/* Architecture Phases */}
        <div className="mt-20 space-y-10">

          {/* Phase 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100">

            <h2 className="text-3xl font-bold text-[#071d49] mb-6">
              Phase 1: CNN Feature Extraction
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              The Convolutional Neural Network (CNN) operates on the raw telemetry data [11]:
            </p>

            <div className="bg-gray-100 rounded-xl p-5 text-center text-2xl font-semibold text-[#071d49] mb-6">
              X = [x₁, x₂, ..., xₜ]
            </div>

            <p className="text-gray-700 leading-8 mb-6">
              where each xᵢ represents a data point recorded at a specific time step
              or within a defined time window. The primary objective of the CNN is to
              capture spatial patterns and extract meaningful features from the
              telemetry data.
            </p>

            <div className="bg-[#071d49] text-white rounded-xl p-5 text-center text-2xl font-semibold mb-6">
              Fcnn(X) = CNN(X, Wcnn)
            </div>

            <p className="text-gray-700 leading-8">
              Fcnn(X) serves as the spatial feature representation derived from the
              input telemetry data, enabling subsequent anomaly detection and analysis.
            </p>

          </div>

          {/* Phase 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100">

            <h2 className="text-3xl font-bold text-[#071d49] mb-6">
              Phase 2: LSTM Temporal Modeling
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              The CNN extracts spatial features, which are then processed by the
              Long Short-Term Memory (LSTM) network to capture the temporal
              dependencies in the telemetry data.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              Let Flstm(X) represent the LSTM's output after temporal feature
              extraction, and Wlstm stand for the LSTM model's weights.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              The following is an expression for the temporal modeling:
            </p>

            <div className="bg-[#071d49] text-white rounded-xl p-5 text-center text-2xl font-semibold mb-6">
              Flstm(X) = LSTM(Fcnn(X), Wlstm)
            </div>

            <p className="text-gray-700 leading-8">
              Here, Flstm(X) represents the temporal feature representation
              derived from the CNN-extracted features and Fcnn(X), capturing
              the time-dependent patterns essential for anomaly detection.
            </p>

          </div>

          {/* Phase 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100">

            <h2 className="text-3xl font-bold text-[#071d49] mb-6">
              Phase 3: Anomaly Detection
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              The outputs of the CNN and LSTM models are integrated to provide
              the final anomaly detection result. This can be accomplished by:
            </p>

            <ol className="list-decimal pl-8 text-gray-700 leading-8 mb-6 space-y-2">
              <li>
                Individual thresholds can be set for the CNN and LSTM predictions.
              </li>
              <li>
                Their outputs can be combined using a probabilistic method like
                weighted fusion or averaging.
              </li>
            </ol>

            <p className="text-gray-700 leading-8 mb-6">
              The symbols pcnn and plstm represent the anomaly scores generated
              by the CNN and LSTM models, respectively.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              The following equation can be used to get the cumulative anomaly score:
            </p>

            <div className="bg-[#071d49] text-white rounded-xl p-5 text-center text-2xl font-semibold mb-6">
              pfinal(X) = α · pcnn(X) + (1 − α) · plstm(X)
            </div>

            <p className="text-gray-700 leading-8 mb-6">
              where α is a weighting coefficient that controls how much each
              model contributes to the ultimate choice.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              When pfinal(X) exceeds a predetermined threshold, the system marks
              the case as anomalous.
            </p>

            <p className="text-gray-700 leading-8">
              The anomaly scores from both models are calculated by the
              detect_anomaly function and combined using a weighted total,
              where α indicates each model's effect. The function labels the
              instance as "Anomaly Detected" if the final anomaly score is
              greater than the threshold, and as "Normal" otherwise.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Architecture;