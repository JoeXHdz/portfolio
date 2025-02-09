import { RevealOnScroll } from "../RevealOnScroll"; 

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Simple To-Do App",
                description: "The Simple To-Do App project is a web application that allows users to create and manage tasks.",
                tech: ["React", "HTML", "Node.js", "Express", "CSS", "Vite"],
                link: "#"
              },
              {
                title: "Mortgage Calculator",
                description: "The Mortgage Calculator project is a web application that allows users to calculate mortgage payments.",
                tech: ["React", "Chart.js", "Node.js", "Javascript", "CSS"],
                link: "#"
              },
              {
                title: "Change Calculator",
                description: "The Change Calculator project is a web application that allows users to calculate change for a given amount.",
                tech: ["React", "HTML", "Node.js", "Express", "Javascript", "CSS"],
                link: "https://joexhdz.github.io/Change-Calculator/"
              },
              {
                title: "San Diego Top Spots",
                description: "The San Diego Top Spots project is a web application that allows users to view popular spots in San Diego.",
                tech: ["React", "HTML", "Node.js", "Bootstrap"],
                link: "#"
              },
              {
                title: "Weather App",
                description: "The Weather App project is a web application that allows users to view the weather forecast for a given location.",
                tech: ["React", "HTML", "Node.js", "Express", "CSS", "Vite"],
                link: "#"
              },
              {
                title: "Astro Weight Calculator",
                description: "The Astro Weight Calculator project is a web application that allows users to calculate their weight on different planets.",
                tech: ["HTML", "CSS", "Javascript"],
                link: "#"
              }
            ].map((project, index) => (
              <div key={index} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span key={key} className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block mt-4 text-green-300 hover:text-green-400 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
