
import { Award, Target, Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Rank 1 in Cocubes Pre-Assessment",
      description: "Secured the top position among 1,509 students in the pre-assessment evaluation.",
      type: "academic"
    },
    {
      title: "Founder at Refuel.co",
      description: "Founded an on-demand fuel delivery startup aimed at revolutionizing vehicle refueling.",
      type: "entrepreneurship"
    },
    {
      title: "Finalist at Levyug's LevUP Ideathon",
      description: "Achieved finalist position competing against 327+ participating teams in the startup ideathon.",
      type: "competition"
    },
    {
      title: "President, Throwball SIG GITAM",
      description: "Revived a dormant SIG and successfully grew the core team to 45 members, demonstrating leadership and organizational skills.",
      type: "leadership"
    }
  ];

  const goals = [
    "Continue advancing in AI/ML and data science domains",
    "Scale Refuel.co to serve 1 million users by 2027",
    "Contribute to impactful open-source projects",
    "Explore opportunities in product management and startups",
    "Consider higher studies for deeper specialization in AI/ML"
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case 'academic':
        return <Trophy className="text-yellow-600" size={24} />;
      case 'entrepreneurship':
        return <Award className="text-purple-600" size={24} />;
      case 'competition':
        return <Award className="text-blue-600" size={24} />;
      case 'leadership':
        return <Award className="text-green-600" size={24} />;
      default:
        return <Award className="text-indigo-600" size={24} />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Achievements */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Achievements</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    {getIconForType(achievement.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Future Goals</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-indigo-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <Target className="text-indigo-600" size={24} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{goal}</p>
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
