import { RevealOnScroll } from "../RevealOnScroll"; 


export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-center ">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Simple To-Do App</h3>
            <p className="text-gray-400 mb-6">
              The Simple To-Do App project is a web application that allows users to create and manage tasks.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "HTML", "Node.js", "Express","CSS", "Vite"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="block mt-4 text-green-300 hover:text-green-400 transition"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Mortgage Calculator</h3>
            <p className="text-gray-400 mb-6">
              The Mortgage Calculator project is a web application that allows users to calculate mortgage payments. 
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Chart.js", "Node.js", "Javascript", "CSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="block mt-4 text-green-300 hover:text-green-400 transition"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Change Calculator</h3>
            <p className="text-gray-400 mb-6">
              The Change Calculator project is a web application that allows users to calculate change for a given amount.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "HTML", "Node.js", "Express", "Javascript", "CSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="block mt-4 text-green-300 hover:text-green-400 transition"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">San Diego Top Spots</h3>
            <p className="text-gray-400 mb-6">
              The San Diego Top Spots project is a web application that allows
              users to view popular spots in San Diego.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "HTML", "Node.js", "Bootstrap"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="block mt-4 text-green-300 hover:text-green-400 transition"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Weather App</h3>
            <p className="text-gray-400 mb-6">
              The Weather App project is a web application that allows users to view the weather forecast for a given location.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "HTML", "Node.js", "Express","CSS", "Vite"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="block mt-4 text-green-300 hover:text-green-400 transition"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Astro Weight Calculator</h3>
            <p className="text-gray-400 mb-6">
              The Astro Weight Calculator project is a web application that allows users to calculate their weight on different planets.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "Javascript"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="block mt-4 text-green-300 hover:text-green-400 transition"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
