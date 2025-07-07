import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Summer Trainee",
      company: "Indian Institute of Remote Sensing (IIRS), ISRO",
      location: "Dehradun (On-site)",
      period: "May 2025 – July 2025",
      description: "Developed GEO-Himalaya – a Flask-based AI chatbot integrated with LangChain and Ollama to answer geospatial queries using government-published vector datasets of Uttarakhand. Leveraged structured metadata to enable accurate, context-specific LLM responses based on official geospatial data. The chatbot is planned to be integrated into the public GIS portal maps.iirs.gov.in",
      type: "upcoming"
    },
    {
      title: "Intern",
      company: "Defence Research and Development Laboratory (DRDL), DRDO",
      location: "Hyderabad (On-site)",
      period: "May 2024 – June 2024",
      description: "Designed a role-based access control inventory management web application system which led to seamless updates and real-time visibility for all divisions. Implemented access control mechanisms, allowing scientists to view only their division's inventory while restricting access to others.",
      type: "past"
    },
    {
      title: "Intern",
      company: "Training and Competency Development TCD - GCGC",
      location: "Visakhapatnam (On-site)",
      period: "Nov 2024 – Present",
      description: "Part of the placement cell where we organize events that bridge the gap between academics and corporate connections. Assisted in organizing events and bridging academic-corporate gaps, contributing to community building and knowledge sharing initiatives.",
      type: "current"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'upcoming':
        return 'bg-blue-900/50 text-blue-300 border border-blue-700';
      case 'current':
        return 'bg-green-900/50 text-green-300 border border-green-700';
      default:
        return 'bg-gray-700/50 text-gray-300 border border-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-gray-600 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start mb-2 md:mb-0">
                  <Briefcase className="text-slate-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{exp.title}</h3>
                    <p className="text-gray-300 font-medium">{exp.company}</p>
                    <p className="text-slate-400 text-sm">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-slate-500 mr-2 flex-shrink-0" size={16} />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                    {exp.period}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
