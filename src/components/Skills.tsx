
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "JavaScript", "HTML/CSS", "SQL"],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Flask", "LangChain", "Matplotlib"],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "VS Code", "Power BI", "Tableau", "QGIS", "Excel"],
      color: "purple"
    },
    {
      title: "AI/ML & Data",
      skills: ["NLP", "LLM Integration", "Data Visualization", "Data Processing", "Prompt Engineering"],
      color: "orange"
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "Computer Networks", "Database Management"],
      color: "red"
    }
  ];

  const certifications = [
    "Deloitte Australia Data Analytics (Forage)",
    "TATA Group Data Visualization (Forage)"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-900/30 text-blue-300 border-blue-700",
      green: "bg-green-900/30 text-green-300 border-green-700",
      purple: "bg-purple-900/30 text-purple-300 border-purple-700",
      orange: "bg-orange-900/30 text-orange-300 border-orange-700",
      red: "bg-red-900/30 text-red-300 border-red-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
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

        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 shadow-xl border border-gray-600">
          <h3 className="text-xl font-semibold text-gray-100 mb-4 text-center">Certifications</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
