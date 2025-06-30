
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Refuel - On-Demand Fuel Delivery Startup",
      description: "Founded and developing an on-demand fuel delivery service designed to revolutionize the way people refuel their vehicles, focusing on convenience, safety, and efficiency for individual and fleet customers. Aiming to serve 1 million users by 2027, focusing on urban commuters, fleet operators, and rural areas. Finalist at Levyug's LevUP Ideathon over 327+ participating teams.",
      tags: ["Startup", "Product Design", "Business Development", "Market Research"],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Founder | Feb 2023 – Present"
    },
    {
      title: "AI-Driven Internship & Placement Recommendation System",
      description: "Addressed the disconnect between student skills and internship/placement requirements by developing an AI-powered platform using Python and React.js. Automated internship/placement recommendations by analyzing resumes, skills, and job descriptions via NLP and content-based filtering, enhancing role relevancy for students. Full-stack platform with ATS resume analysis, internship search, and real-time collaboration.",
      tags: ["Python", "React.js", "NLP", "AI/ML", "Full-Stack"],
      links: {
        demo: "#",
        github: "#"
      },
      status: "Feb 2025 – Present"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <span className="text-sm text-indigo-600 font-medium bg-indigo-100 px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.links.demo}
                  className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-2" />
                  <span>Demo</span>
                </a>
                <a
                  href={project.links.github}
                  className="flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200"
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
