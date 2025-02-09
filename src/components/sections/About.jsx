import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "Bootstrap",
    "Vite",
    "Chart.js",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB", "MySQL", "NoSQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-2"
    >
      <RevealOnScroll>
        <div className="max-2-3xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 w-2/3 mx-auto text-center">
              I am a full-stack developer with a goal of creating clean,
              user-friendly web applications. I have experience in frontend and
              backend technologies, as well as a background in military
              aviation. I am currently an Assistant Instructor for the
              ServiceNow RiseUp SkillBridge program, where I assist in teaching
              other transitioning military members/spouses how to develop and
              administer on the ServiceNow platform. If you like what you see or
              are curious about my work, feel free to reach out by using my
              contact form at the bottom of this page!
            </p>

            <div className="logos">
              <div className="flex gap-3 justify-center">
                <div className="border border-white/10 rounded-xl p-2 flex gap-3">
                  {[
                    "bootstrap.png",
                    "css.png",
                    "html.png",
                    "JS.png",
                    "vite.svg",
                    "react.png",
                    "vscode.png",
                    "nodejs.png",
                    "mysql.png",
                    "mongodb.png",
                    "sn_icon.png",
                  ].map((logo, index) => (
                    <img
                      key={index}
                      src={`./assets/${logo}`}
                      className="h-9 w-auto"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/20 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education 🏫 </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Certified Application Developer</strong> - ServiceNow
                </li>
                <li>
                  <strong>Certified Systems Administrator</strong> - ServiceNow
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Experience 💼</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold mb-2">
                    ServiceNow RiseUp SkillBridge Assistant Instructor
                    (2024-Present)
                  </h4>
                  <p>
                    Assisted in teaching and mentoring military SkillBridge
                    participants transitioning into tech careers. Guided
                    students through ServiceNow development, administration, and
                    hands-on exercises. Provided support in troubleshooting,
                    debugging, and applying best practices. Helped facilitate
                    discussions, workshops, and real-world project applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Software Developer at Creating Coding Careers (2024)
                  </h4>
                  <p>
                    Gained hands-on experience in full-stack web development.
                    Built and deployed custom applications using React, HTML,
                    CSS, and a variety of other languages. Collaborated on
                    real-world projects, focusing on best coding practices in an
                    agile environment. Assisted in teaching and mentoring peers
                    in web development to include testing and debugging.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Active-Duty Marine Corps Aviation Ordnance Technician
                    (2017-2024)
                  </h4>
                  <p>
                    Led quality assurance and safety oversight for aviation
                    ordnance operations. Conducted aircraft inspections as a
                    Collateral Duty Inspector (CDI) to ensure compliance with
                    NAVAIR regulations. Supervised and trained Marines in
                    ordnance handling, maintenance, and safety procedures.
                    Managed risk assessments and enforced strict adherence to
                    operational standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
