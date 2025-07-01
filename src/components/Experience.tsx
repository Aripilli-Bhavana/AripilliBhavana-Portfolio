
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
      title: "PwC Launchpad - Salesforce Trainee",
      company: "PwC Acceleration Centers in India",
      location: "Remote",
      period: "Feb 2025 – May 2025",
      description: "Selected for the PwC Salesforce Launchpad, an exclusive learning program designed to enhance skills in Salesforce technologies and cloud-based solutions.",
      type: "upcoming"
    },
    {
      title: "AI-Driven Internship & Placement Recommendation System",
      company: "Personal Project",
      location: "Remote",
      period: "Feb 2025 – Present",
      description: "Developing an AI-powered platform using Python and React.js to bridge the gap between student skills and internship/placement requirements. Implementing NLP and content-based filtering for automated recommendations.",
      type: "current"
    },
    {
      title: "Student Representative",
      company: "Student Tribe (formerly stuMagz)",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "Nov 2024 – May 2025",
      description: "Acting as a bridge between students of Visakhapatnam and Student Tribe to promote initiatives, events and opportunities within the community.",
      type: "current"
    },
    {
      title: "Student Associate",
      company: "Caarya",
      location: "Visakhapatnam / Remote",
      period: "Nov 2024 – Jan 2025",
      description: "Provided executive assistant services supporting startup ecosystem building and student engagement initiatives. Led team research on startup journeys, managed content calendars, conducted founder interviews, and published weekly newsletters.",
      type: "past"
    },
    {
      title: "Andhra Pradesh Cohort Training Program",
      company: "Academy for Women Entrepreneurs (AWE)",
      location: "Andhra Pradesh",
      period: "Aug 2024 – Nov 2024",
      description: "Selected participant in the exclusive AWE Program 2024 cohort (Top 40 in Andhra Pradesh), supported by U.S. Consulate Hyderabad and ACIR. Gained essential business knowledge, mentorship, and networking opportunities through workshops and strategic guidance.",
      type: "past"
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
      title: "Finalist LevUP Ideathon",
      company: "Levyug",
      location: "Remote",
      period: "Apr 2024 – May 2024",
      description: "Finalist among 327 applicants for the LevUP Ideathon with Refuel startup concept. Made it to the final 10, demonstrating innovative solutions in the on-demand fuel delivery sector.",
      type: "past"
    },
    {
      title: "Lead of Public Relations (PR)",
      company: "SHORE GITAM (Deemed To Be University)",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "Dec 2023 – Feb 2024",
      description: "Led PR strategies for SHORE fest, managing relationships and communication with the public. Successfully contributed to attracting 12K+ attendees through effective PR campaigns and public image management.",
      type: "past"
    },
    {
      title: "Intern",
      company: "Training and Competency Development (TCD) - GCGC",
      location: "Hybrid",
      period: "2023",
      description: "Organized events that bridge the gap between academics and corporate connections. Assisted in organizing events and bridging academic-corporate gaps, contributing to community building and knowledge sharing initiatives.",
      type: "past"
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
