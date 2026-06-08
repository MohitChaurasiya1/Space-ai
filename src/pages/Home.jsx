function Home() {
  return (
    <div>
      <section
        className="h-[520px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/space-bg.png')",
        }}
      >
        <div className="px-6">
          <h4 className="text-5xl md:text-6xl font-serif font-bold text-white mb-5">
             AI-Based Embedded System for Spacecraft Health Monitoring
          </h4>

          

          <p className="mt-4 text-lg md:text-xl text-white">
            Optimization of AI Models for Efficient Performance Under Limited Computational Resources
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;