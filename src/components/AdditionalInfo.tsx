
import { Users, Award, Trophy, Heart, Briefcase, Star } from "lucide-react";

const AdditionalInfo = () => {
  const additionalItems = [
  
    {
      title: "Finalist - LevUP Ideathon",
      description: "Finalist among 327 applicants for the LevUP Ideathon with Refuel startup concept. Made it to the final 10, demonstrating innovative solutions in the on-demand fuel delivery sector.",
      icon: <Star className="w-6 h-6" />,
      color: "yellow",
      date: "Apr 2024 – May 2024"
    },
    {
      title: "Academy for Women Entrepreneurs (AWE) - Andhra Pradesh Cohort",
      description: "Selected participant in the exclusive AWE Program 2024 cohort (Top 40 in Andhra Pradesh), supported by U.S. Consulate Hyderabad and ACIR. Gained essential business knowledge, mentorship, and networking opportunities through workshops and strategic guidance.",
      icon: <Trophy className="w-6 h-6" />,
      color: "orange",
      date: "Aug 2024 – Nov 2024"
    },
    {
      title: "Member - Women in Cloud Digital Network",
      description: "Active member of the Women in Cloud Digital Network, contributing to the advancement of women in cloud computing and technology fields through networking, mentorship, and skill development.",
      icon: <Users className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Facilitator - Google Cloud Arcade",
      description: "Participated in Google Cloud's gamified learning program, exploring hands-on labs in cloud computing, AI/ML, and application development. Engaged in monthly challenges and activities to build practical cloud skills and deepen technical knowledge.",
      icon: <Award className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Participant - Infosys Springboard Pragati Cohort 4",
      description: "Participated in The Pragati: Path to Future cohort by Infosys Springboard, a 3.5-month hybrid skilling program for women, featuring in-person and virtual training by industry experts in cutting-edge technologies.",
      icon: <Trophy className="w-6 h-6" />,
      color: "green"
    },
    {
      title: "Participant - GirlScript Summer of Code 2024",
      description: "Participated in GirlScript Summer of Code (GSSoC) 2024, contributing to open-source projects and collaborating with developers worldwide to enhance coding skills and contribute to meaningful software development.",
      icon: <Award className="w-6 h-6" />,
      color: "orange"
    },
    {
      title: "Student Representative - Student Tribe",
      description: "Acting as a bridge between students of Visakhapatnam and Student Tribe to promote initiatives, events and opportunities within the community.",
      icon: <Users className="w-6 h-6" />,
      color: "green",
      date: "Nov 2024 – May 2025"
    },
    {
      title: "Student Associate - Caarya",
      description: "Provided executive assistant services supporting startup ecosystem building and student engagement initiatives. Led team research on startup journeys, managed content calendars, conducted founder interviews, and published weekly newsletters.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "purple",
      date: "Nov 2024 – Jan 2025"
    },
    
   
    {
      title: "Lead of Public Relations (PR) - SHORE GITAM",
      description: "Led PR strategies for SHORE fest, managing relationships and communication with the public. Successfully contributed to attracting 12K+ attendees through effective PR campaigns and public image management.",
      icon: <Users className="w-6 h-6" />,
      color: "red",
      date: "Dec 2023 – Feb 2024"
    },
    
    
    
    {
      title: "President - Throwball Club, GITAM",
      description: "Led the Throwball Club at GITAM University as President, managing team activities, organizing tournaments, and fostering sportsmanship among students while balancing academic and athletic responsibilities.",
      icon: <Heart className="w-6 h-6" />,
      color: "red"
    },
    
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-900/30 border-blue-700/50 text-blue-300",
      purple: "bg-purple-900/30 border-purple-700/50 text-purple-300",
      green: "bg-green-900/30 border-green-700/50 text-green-300",
      red: "bg-red-900/30 border-red-700/50 text-red-300",
      orange: "bg-orange-900/30 border-orange-700/50 text-orange-300",
      yellow: "bg-yellow-900/30 border-yellow-700/50 text-yellow-300"
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
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
                    {item.date && (
                      <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                        {item.date}
                      </span>
                    )}
                  </div>
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
