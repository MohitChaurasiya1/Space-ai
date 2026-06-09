function Students() {
  const students = [
    {
      id: 2,
      name: "Rahul Sharma",
      role: "PhD Research Scholar",
      desc: "Research focused on deep learning model optimization and deployment in resource-constrained spacecraft environments.",
      image: "/images/students/rahul.jpg",
    },
    {
      id: 3,
      name: "Mohit Chaurasiya",
      role: "B.Tech Research Scholar",
      desc: "Working on telemetry data preprocessing, feature extraction, and anomaly detection in space mission datasets.",
      image: "/images/students/priya.jpg",
    },
    {
      id: 4,
      name: "Ankit Kumar",
      role: "Research Intern",
      desc: "Contributing to AI model evaluation, spacecraft diagnostics, and visualization of telemetry insights.",
      image: "/images/students/ankit.jpg",
    },
    {
      id: 5,
      name: "Sneha Gupta",
      role: "Research Assistant",
      desc: "Working on machine learning pipelines and predictive health monitoring systems for spacecraft applications.",
      image: "/images/students/sneha.jpg",
    },
    {
      id: 6,
      name: "Aman Mishra",
      role: "B.Tech Research Assistant",
      desc: "Focused on embedded AI systems, telemetry simulations, and optimization of onboard computational resources.",
      image: "/images/students/aman.jpg",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Page Heading */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-serif font-bold text-[#071d49] mb-4">
            Students
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Research scholars, student researchers, and contributors involved
            in the SPACE-AI project focusing on spacecraft health monitoring,
            telemetry analysis, and artificial intelligence applications in
            space systems.
          </p>
        </div>

        {/* Students Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Student Image */}
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-72 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#071d49]">
                  {student.name}
                </h2>

                <p className="text-purple-700 font-medium mt-2">
                  {student.role}
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                  {student.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Students;