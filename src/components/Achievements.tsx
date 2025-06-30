
import { Award, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Finalist at LevUP Ideathon",
      description: "Recognized for innovative solution and presentation skills in competitive startup environment.",
      type: "award"
    },
    {
      title: "Naaripreneur Participant (IIM V)",
      description: "Selected participant in women entrepreneurship program at Indian Institute of Management Visakhapatnam.",
      type: "participation"
    },
    {
      title: "AWE AP Cohort Member",
      description: "Active member of startup ecosystem community, engaging with fellow entrepreneurs and mentors.",
      type: "participation"
    }
  ];

  const goals = [
    "Continue learning in product and tech domains",
    "Build consistency in coding and technical skills",
    "Explore opportunities in startups and innovation",
    "Consider higher studies for deeper specialization"
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Achievements */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Achievements</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Goals</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <Target className="text-green-600" size={24} />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
