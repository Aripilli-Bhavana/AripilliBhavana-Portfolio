
import { Users, Award, Trophy, Heart } from "lucide-react";

const AdditionalInfo = () => {
  const additionalItems = [
    {
      title: "Facilitator - Google Cloud Arcade",
      description: "Participated in Google Cloud's gamified learning program, exploring hands-on labs in cloud computing, AI/ML, and application development. Engaged in monthly challenges and activities to build practical cloud skills and deepen technical knowledge.",
      icon: <Award className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Member - Women in Cloud Digital Network",
      description: "Active member of the Women in Cloud Digital Network, contributing to the advancement of women in cloud computing and technology fields through networking, mentorship, and skill development.",
      icon: <Users className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Participant - Infosys Springboard Pragati Cohort 4",
      description: "Participated in The Pragati: Path to Future cohort by Infosys Springboard, a 3.5-month hybrid skilling program for women, featuring in-person and virtual training by industry experts in cutting-edge technologies.",
      icon: <Trophy className="w-6 h-6" />,
      color: "green"
    },
    {
      title: "President - Throwball Club, GITAM",
      description: "Led the Throwball Club at GITAM University as President, managing team activities, organizing tournaments, and fostering sportsmanship among students while balancing academic and athletic responsibilities.",
      icon: <Heart className="w-6 h-6" />,
      color: "red"
    },
    {
      title: "Participant - GirlScript Summer of Code 2024",
      description: "Participated in GirlScript Summer of Code (GSSoC) 2024, contributing to open-source projects and collaborating with developers worldwide to enhance coding skills and contribute to meaningful software development.",
      icon: <Award className="w-6 h-6" />,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-900/30 border-blue-700/50 text-blue-300",
      purple: "bg-purple-900/30 border-purple-700/50 text-purple-300",
      green: "bg-green-900/30 border-green-700/50 text-green-300",
      red: "bg-red-900/30 border-red-700/50 text-red-300",
      orange: "bg-orange-900/30 border-orange-700/50 text-orange-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="additional" className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Additional Information</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-500 to-gray-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {additionalItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 rounded-xl p-6 shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-lg border ${getColorClasses(item.color)} mr-4 flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
