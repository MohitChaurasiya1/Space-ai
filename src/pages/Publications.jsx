import { Search, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";

function Publications() {
  const [searchTerm, setSearchTerm] = useState("");

  const publications = {
    2026: [
      {
        title:
          "AI-Based Embedded System for Spacecraft Health Monitoring",
        authors:
          "A. Kumar Singh, M. Chaurasiya, Research Team",
        venue:
          "International Conference on Space AI Systems",
        type: "Conference",
      },
      {
        title:
          "Optimization of Deep Learning Models for Resource-Constrained Spacecraft",
        authors:
          "SPACE-AI Research Group",
        venue:
          "IEEE Aerospace Conference",
        type: "Journal",
      },
    ],

    2025: [
      {
        title:
          "Telemetry Data Analysis using Machine Learning",
        authors:
          "Research Team",
        venue:
          "Journal of Space Technology",
        type: "Journal",
      },
    ],
  };

  const filteredPublications = Object.entries(publications).reduce(
    (acc, [year, papers]) => {
      const filtered = papers.filter(
        (paper) =>
          paper.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          paper.authors
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );

      if (filtered.length) acc[year] = filtered;

      return acc;
    },
    {}
  );

  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="pt-32 pb-20 bg-[#071d49] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Publications
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Research outputs, journal articles,
            conference papers and technical
            contributions produced under the
            SPACE-AI project.
          </p>
        </div>
      </section>

      {/* Search */}

      <section className="pb-12 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          <div className="relative">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#071d49]"
            />
          </div>
        </div>
      </section>

      {/* Publications */}

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          {Object.entries(filteredPublications).map(
            ([year, papers]) => (
              <div
                key={year}
                className="mb-16"
              >
                <h2 className="text-4xl font-sans font-bold text-[#071d49] mb-8 border-b pb-4">
                  {year}
                </h2>

                <div className="space-y-6">

                  {papers.map((paper, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                        <div>
                          <div className="flex items-center gap-3 mb-4">

                            <FileText
                              size={22}
                              className="text-[#071d49]"
                            />

                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                paper.type === "Journal"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {paper.type}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-[#071d49] mb-3">
                            {paper.title}
                          </h3>

                          <p className="text-gray-700 mb-2">
                            <strong>
                              Authors:
                            </strong>{" "}
                            {paper.authors}
                          </p>

                          <p className="text-gray-600 italic">
                            {paper.venue}
                          </p>
                        </div>

                        <div className="flex gap-3">

                          <button className="px-5 py-2 rounded-lg border border-[#071d49] text-[#071d49] hover:bg-[#071d49] hover:text-white transition flex items-center gap-2">
                            DOI
                            <ExternalLink size={16} />
                          </button>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Publications;