function Objectives() {
  const objectives = [
    {
      title: "Development of Telemetry Data Acquisition & Simulation",
      points: [
        "Extract and preprocess historical telemetry data from previous space missions using time-series feature extraction techniques such as Fast Fourier Transform (FFT), Discrete Wavelet Transform (DWT), and Autoregressive Integrated Moving Average (ARIMA) to identify normal and anomalous behavior patterns.",
        "Generate synthetic telemetry datasets using physics-based simulations, generative adversarial networks (GANs), and Variational Autoencoders (VAEs) to ensure model robustness under diverse operational scenarios.",
      ],
    },
    {
      title: "Development of Anomaly Detection Models",
      points: [
        "Transformer-based anomaly detection models for learning long-range dependencies in telemetry sequences.",
        "Hybrid LSTM-Autoencoder models for sequential anomaly detection with memory-efficient encoding.",
        "Graph Neural Networks (GNNs) and Spatio-Temporal Graph Convolution Networks (ST-GCNs) for relational anomaly detection in spacecraft telemetry data streams.",
        "Bayesian Neural Networks (BNNs) for uncertainty quantification and anomaly score prediction in telemetry data.",
      ],
    },
    {
      title: "Resource-Constrained Optimization for Embedded Systems",
      points: [
        "Quantization-aware training (QAT), post-training quantization (PTQ), and mixed-precision training to reduce memory footprint and computational load on embedded processors.",
        "Sparse Neural Networks (SNNs) and low-rank factorization techniques (SVD, Tucker Decomposition, CP-Decomposition) to enhance model efficiency without sacrificing detection accuracy.",
        "Knowledge distillation (TinyBERT, DistilBERT) and layer-wise pruning (Lottery Ticket Hypothesis, Magnitude-Based Pruning) for lightweight deep learning model deployment on embedded hardware.",
        "TensorRT for NVIDIA Jetson, OpenVINO for Intel FPGAs, XLA for TensorFlow models, and TVM for cross-platform inference acceleration.",
        "Edge AI acceleration frameworks (Edge TPU, TinyML, NNoM) for ultra-low power execution on radiation-hardened space processors.",
        "Parallelized matrix operations, Eigen-based optimizations, and graph compilation for execution on heterogeneous architectures.",
        "Design an adaptive resource allocation algorithm to dynamically adjust model complexity based on Quality of Service (QoS) constraints, power availability, and mission-critical priority levels.",
      ],
    },
    {
      title: "Embedded Real-Time API-Based Status Extraction",
      points: [
        "Implement a low-latency, event-driven telemetry ingestion pipeline.",
        "Develop a lightweight telemetry database for onboard status extraction.",
        "Implement a real-time anomaly alert system.",
        "Ensure telemetry visualization and mission control integration.",
        "Develop a lightweight RESTful API and MQTT-based telemetry event manager for secure, asynchronous spacecraft health monitoring.",
      ],
    },
    {
      title: "Validation & Testing in Embedded Environments",
      points: [
        "Validate model accuracy and efficiency using customized benchmarking suites for telemetry anomaly detection.",
        "Conduct hardware-in-the-loop (HIL) simulations with FPGA-based emulated spacecraft telemetry systems for real-world operational testing.",
        "Perform stress testing under adverse conditions.",
      ],
    },
    {
      title: "Deployment & Embedded System Integration",
      points: [
        "Package the optimized AI anomaly detection model as a deployable embedded firmware module.",
        "Ensure integration with spacecraft flight software frameworks.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#071d49] mb-4">
          Research Objectives
        </h1>

        <p className="text-xl text-purple-700 font-semibold mb-10">
          The primary objectives of this research are:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.14)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-[#071d49] mb-5">
                {item.title}
              </h2>

              <ul className="space-y-3 list-disc pl-5 text-gray-700 leading-7">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Objectives;