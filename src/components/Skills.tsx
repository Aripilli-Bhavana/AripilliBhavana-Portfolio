
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & CS Fundamentals",
      skills: ["C", "Python", "Data Structures and Algorithms", "Computer Networks"],
      color: "gray"
    },
    {
      title: "Technologies & Frameworks",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Flask"],
      color: "slate"
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "Power BI", "Tableau", "Excel", "GitHub", "Git", "VS Code", "QGIS"],
      color: "zinc"
    },
    {
      title: "Data Processing & Analytics",
      skills: ["Data Cleaning", "Data Processing", "Data Preprocessing", "Data Visualization", "Matplotlib"],
      color: "stone"
    },
    {
      title: "NLP & AI Tools",
      skills: ["Natural Language Processing (NLP)", "LangChain", "LLM integration (LLaMA3, Mistral)", "Prompt Engineering"],
      color: "neutral"
    },
    {
      title: "Additional Skills",
      skills: ["Leadership", "Problem Solving", "Technical Documentation", "Business Development"],
      color: "gray"
    }
  ];

  const certifications = [
    "Deloitte Australia Data Analytics (Forage)",
    "TATA Group Data Visualization (Forage)"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      gray: "bg-gray-700/50 text-gray-300 border-gray-600",
      slate: "bg-slate-700/50 text-slate-300 border-slate-600",
      zinc: "bg-zinc-700/50 text-zinc-300 border-zinc-600",
      stone: "bg-stone-700/50 text-stone-300 border-stone-600",
      neutral: "bg-neutral-700/50 text-neutral-300 border-neutral-600"
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Skills & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-600 hover:border-gray-500"
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600">
          <h3 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Certifications</h3>
          <div className="flex flex-wrap gap-4 justify-center">
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
