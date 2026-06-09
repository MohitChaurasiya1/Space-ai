function Members() {
  const members = [
    {
      id: 1,
      name: "Dr. Amit Kumar Singh",
      role: "Co-PI (Focal Point)",
      organization: "Indian Space Research Organisation (ISRO)",
      desc: "Leading the SPACE-AI project with expertise in spacecraft operations, telemetry systems, and mission-critical monitoring technologies.",
      image: "/images/members/amit-kumar-singh.jpg",
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Principal Investigator",
      organization: "IIIT Allahabad",
      desc: "Researching artificial intelligence, machine learning, and embedded systems for next-generation aerospace applications.",
      image: "/images/members/rajesh-kumar.jpg",
    },
    {
      id: 3,
      name: "Dr. Neha Sharma",
      role: "Co-Investigator",
      organization: "IIIT Allahabad",
      desc: "Specializes in deep learning, anomaly detection, and intelligent data analytics for telemetry systems.",
      image: "/images/members/neha-sharma.jpg",
    },
    {
      id: 4,
      name: "Dr. Anil Verma",
      role: "Research Scientist",
      organization: "ISRO",
      desc: "Working on spacecraft health diagnostics, telemetry processing, and mission-support AI technologies.",
      image: "/images/members/anil-verma.jpg",
    },
    {
      id: 5,
      name: "Dr. Priyanka Singh",
      role: "Faculty Collaborator",
      organization: "IIIT Allahabad",
      desc: "Focused on optimization of AI models under computational constraints and real-time embedded deployments.",
      image: "/images/members/priyanka-singh.jpg",
    },
    {
      id: 6,
      name: "Dr. Sandeep Mishra",
      role: "Technical Advisor",
      organization: "ISRO",
      desc: "Providing domain expertise in spacecraft systems, mission planning, and operational AI integration.",
      image: "/images/members/sandeep-mishra.jpg",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Page Heading */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-serif font-bold text-[#071d49] mb-4">
            Members
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Faculty members, principal investigators, collaborators, and
            research experts contributing to the SPACE-AI project and its
            mission of advancing artificial intelligence for spacecraft health
            monitoring and telemetry analysis.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#071d49]">
                  {member.name}
                </h2>

                <p className="text-purple-700 font-medium mt-2">
                  {member.role}
                </p>

                <p className="text-gray-500 mt-1">
                  {member.organization}
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Members;