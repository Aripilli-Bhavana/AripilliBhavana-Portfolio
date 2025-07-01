
import { Award, ExternalLink } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "JavaScript", "HTML/CSS", "SQL"],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Flask", "Matplotlib"],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "VS Code", "Power BI", "Tableau", "QGIS", "Excel"],
      color: "purple"
    },
    {
      title: "AI/ML & Data",
      skills: ["LLM Integration", "Data Visualization", "Data Processing", "Prompt Engineering"],
      color: "orange"
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "Computer Networks", "Database Management"],
      color: "red"
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Foundations",
      link: "#aws-cloud-foundations"
    },
    {
      name: "AWS Data Engineering",
      link: "#aws-data-engineering"
    },
    {
      name: "Cisco CCNA",
      link: "#cisco-ccna"
    },
    {
      name: "Deloitte Australia Data Analytics (Forage)",
      link: "#deloitte-cert"
    },
    {
      name: "TATA Group Data Visualization (Forage)",
      link: "#tata-cert"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-900/30 text-blue-300 border-blue-700/50",
      green: "bg-green-900/30 text-green-300 border-green-700/50",
      purple: "bg-purple-900/30 text-purple-300 border-purple-700/50",
      orange: "bg-orange-900/30 text-orange-300 border-orange-700/50",
      red: "bg-red-900/30 text-red-300 border-red-700/50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-500 to-gray-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 rounded-xl p-6 shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 rounded-xl p-6 shadow-xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center justify-center mb-4">
            <Award className="text-slate-400 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-gray-100">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-4 py-3 bg-slate-700/50 text-gray-300 rounded-lg text-sm font-medium border border-slate-600/50 hover:border-slate-500 hover:bg-slate-700/70 transition-all duration-300"
              >
                <span className="group-hover:text-white transition-colors">{cert.name}</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
