
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Refuel",
      description: "A project idea focused on fuel delivery solutions, pitched at multiple student innovation events. Explored market opportunities and user experience design for on-demand fuel services.",
      tags: ["Product Design", "Market Research", "Innovation"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Inventory Management System",
      description: "Flask-based web application built for DRDO requirements. Features role-based access control, real-time inventory tracking, and comprehensive reporting dashboard.",
      tags: ["Flask", "Python", "Web Development", "Database"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.links.demo}
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-2" />
                  <span>Demo</span>
                </a>
                <a
                  href={project.links.github}
                  className="flex items-center text-slate-600 hover:text-slate-700 transition-colors duration-200"
                >
                  <Github size={20} className="mr-2" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
