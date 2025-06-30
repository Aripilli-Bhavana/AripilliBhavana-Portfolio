
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Student Associate",
      company: "Caarya",
      period: "Current",
      description: "Researching startups, writing articles, and leading student consultant activities. Focused on startup ecosystem analysis and content creation.",
      type: "current"
    },
    {
      title: "Intern & Volunteer",
      company: "TCD",
      period: "2023",
      description: "Assisted in organizing events and bridging academic-corporate gaps. Contributed to community building and knowledge sharing initiatives.",
      type: "past"
    },
    {
      title: "Product Intern",
      company: "Agnirva",
      period: "2023",
      description: "Involved in basic product documentation and research. Gained hands-on experience in product development lifecycle and market analysis.",
      type: "past"
    },
    {
      title: "Project Contributor",
      company: "DRDO",
      period: "2022-2023",
      description: "Developed a role-based inventory management system using Flask. Contributed to defense technology requirements and system design.",
      type: "past"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <Briefcase className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-slate-400 mr-2" size={20} />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exp.type === 'current' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {exp.period}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
