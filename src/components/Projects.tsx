
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Internship & Placement Recommendation System",
      description: "Developing an AI-powered platform using Python and React.js to bridge the gap between student skills and internship/placement requirements. Implementing NLP and content-based filtering for automated recommendations, ATS resume analysis, and real-time collaboration features.",
      tags: ["Python", "React.js", "NLP", "AI/ML", "Full-Stack"],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Feb 2025 – Present"
    },
    {
      title: "Refuel - On-Demand Fuel Delivery Startup",
      description: "Founded and developing an on-demand fuel delivery service designed to revolutionize the way people refuel their vehicles, focusing on convenience, safety, and efficiency for individual and fleet customers. Aiming to serve 1 million users by 2027, focusing on urban commuters, fleet operators, and rural areas.",
      tags: ["Startup", "Product Design", "Business Development", "Market Research"],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Founder | Feb 2023 – Present"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-600 hover:border-gray-500"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-100">{project.title}</h3>
                <span className="text-sm text-gray-300 font-medium bg-gray-700/50 px-3 py-1 rounded-full border border-gray-600">
                  {project.status}
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.links.demo}
                  className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-2" />
                  <span>Demo</span>
                </a>
                <a
                  href={project.links.github}
                  className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
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
