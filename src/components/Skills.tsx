
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & CS Fundamentals",
      skills: ["C", "Python", "Data Structures and Algorithms", "Computer Networks"],
      color: "indigo"
    },
    {
      title: "Technologies & Frameworks",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Flask"],
      color: "purple"
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "Power BI", "Tableau", "Excel", "GitHub", "Git", "VS Code", "QGIS"],
      color: "blue"
    },
    {
      title: "Data Processing & Analytics",
      skills: ["Data Cleaning", "Data Processing", "Data Preprocessing", "Data Visualization", "Matplotlib"],
      color: "green"
    },
    {
      title: "NLP & AI Tools",
      skills: ["Natural Language Processing (NLP)", "LangChain", "LLM integration (LLaMA3, Mistral)", "Prompt Engineering"],
      color: "pink"
    },
    {
      title: "Additional Skills",
      skills: ["Leadership", "Problem Solving", "Technical Documentation", "Business Development"],
      color: "orange"
    }
  ];

  const certifications = [
    "Deloitte Australia Data Analytics (Forage)",
    "TATA Group Data Visualization (Forage)"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      indigo: "bg-indigo-100 text-indigo-800",
      purple: "bg-purple-100 text-purple-800",
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      pink: "bg-pink-100 text-pink-800",
      orange: "bg-orange-100 text-orange-800"
    };
    return colors[color as keyof typeof colors] || colors.indigo;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Certifications</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Certifications</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
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
