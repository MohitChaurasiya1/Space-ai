function Methodology() {
  const phases = [
    {
      title: "3.1 Data Collection and Preprocessing",
      content:
        "During the data collecting and preprocessing phase, telemetry data from previous space missions is gathered in order to find the trends that differentiate typical spacecraft operations from unusual activity. To enhance the quality and interpretability of telemetry data, preprocessing and feature engineering techniques are applied. This includes time-series transformation methods such as Fast Fourier Transform (FFT), Discrete Wavelet Transform (DWT), and Autoregressive Integrated Moving Average (ARIMA) to extract meaningful patterns and trends. Normalization techniques like Z-score normalization, Min-Max scaling, and adaptive signal filtering ensure data consistency and mitigate noise, enabling more accurate anomaly detection.",
    },
    {
      title: "3.2 AI Model Development",
      content:
        "The development of the anomaly detection system involves implementing and benchmarking hybrid AI architectures that integrate multiple advanced deep learning models. Time-Series Transformer models such as Informer and Anomaly Transformer are utilized for sequence learning. Graph Neural Networks (GNNs), Spatio-Temporal Graph Convolution Networks (ST-GCNs), Hybrid LSTM-Autoencoder architectures, and Bayesian Neural Networks (BNNs) are used for anomaly detection, reconstruction, and uncertainty-aware decision-making.",
    },
    {
      title: "3.3 Resource-Constrained Optimization",
      content:
        "Given the computational limitations of onboard spacecraft processors, this phase focuses on designing ultra-lightweight, low-latency AI models that enable real-time anomaly detection while maintaining power and memory efficiency. Model compression, quantization-aware training (QAT), post-training quantization (PTQ), structured pruning, weight sharing, and low-rank factorization are applied to optimize computational efficiency.",
    },
    {
      title: "3.4 Validation and Testing",
      content:
        "In this phase, rigorous validation and testing are conducted to ensure robust model performance and seamless deployment. The model is benchmarked using Precision-Recall curves, Matthews Correlation Coefficient (MCC), and False Alarm Rate (FAR). Hardware-in-the-loop (HIL) testing is conducted using FPGA-based spacecraft simulators with synthetic anomaly injection and simulated hardware faults.",
    },
    {
      title: "3.5 Integration and Deployment",
      content:
        "The fourth phase focuses on the real-time integration of the AI-driven anomaly detection system into spacecraft telemetry monitoring pipelines, enabling automated status extraction and event-based anomaly alerts. The system incorporates lightweight time-series databases, event processing systems, telemetry visualization dashboards, and rule-based anomaly alerting mechanisms.",
    },
  ];

  const deliverables = [
    {
      title: "Codes",
      points: [
        "Complete source code of the developed AI model, including all ML and DL algorithms used for anomaly detection.",
        "Optimized code suitable for deployment on spacecraft with constrained computational resources.",
      ],
    },
    {
      title: "Final Embedded Package Onboard",
      points: [
        "An embedded package containing the AI model, ready for integration and deployment on spacecraft.",
        "Documentation detailing the integration process, system requirements, and configuration instructions.",
      ],
    },
    {
      title: "Full Documentation",
      points: [
        "Comprehensive documentation covering model design, development process, optimization techniques, and testing results.",
        "User manual and technical documentation for the embedded package, including troubleshooting guides and update procedures.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <h1 className="text-4xl md:text-5xl font-bold text-[#071d49] mb-4 py-10">
          Methodology
        </h1>



        {/* Timeline */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-[#071d49] rounded-2xl p-7 shadow-[0_10px_30px_rgba(0,0,0,0.14)]"
            >
              <h2 className="text-2xl font-bold  text-blue-900 mb-4">
                {phase.title}
              </h2>

              <p className="text-gray-700 leading-8">
                {phase.content}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <p className="text-xl text-purple-700 font-semibold mb-10">
            This figure  explains the step by step phases to develop the proposed solution.
          </p>

          {/* Methodology Image */}
          <div className="mb-15">
            <img
              src="/images/methodology.jpeg"
              alt="Proposed Layered Architecture"
              className="w-full md:w-[70%] lg:w-[60%] mx-auto rounded-2xl shadow-2xl"
            />

            <p className="text-center text-gray-600 mt-4">
              Figure 2: Proposed Layered architecture for AI-based embedded system for Spacecraft health monitoring
            </p>
          </div>
        </div>

        {/* Expected Deliverables */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071d49] mb-10">
            Expected Deliverables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-5">
                  {item.title}
                </h3>

                <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-7">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverable to ISRO */}
        <div className="mt-20 bg-[#071d49] text-white rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">
            Deliverable to ISRO
          </h2>

          <ul className="list-disc pl-5 space-y-4 leading-8 text-gray-100">
            <li>
              Storage Node with Intel Xeon processor, 64GB memory, RAID configuration, and minimum 5TB usable capacity.
            </li>
            <li>
              Desktop Computers equipped with Intel Core i7 processors, up to 32GB RAM, 256GB SSD storage, and Full HD LED monitors.
            </li>
            <li>
              Interactive Whiteboard with 85&quot; 4K LED display, multi-touch support, Intel Core i7 processor, and Windows/Android OS options.
            </li>
            <li>
              Multimedia or LCD Display with Full HD LED display, HDMI, and USB connectivity.
            </li>
            <li>
              Lab space with high speed internet access, printer, scanner, and photocopier.
            </li>
          </ul>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-5">
              <h3 className="font-bold text-xl mb-2">
                Major Scientific Field of Interest
              </h3>
              <p>AI & Advanced Data Analytics</p>
            </div>

            <div className="bg-white/10 rounded-xl p-5">
              <h3 className="font-bold text-xl mb-2">
                Project Duration
              </h3>
              <p>24 Months</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Methodology;