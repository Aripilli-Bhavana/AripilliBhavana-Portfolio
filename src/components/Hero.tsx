import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Enhanced Background with blur effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(100,100,100,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(80,80,80,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-56 rounded-lg shadow-2xl overflow-hidden border-2 border-slate-700">
              <img
                src="public/bhavana-photo.jpg" 
                alt="Aripilli Bhavana"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-gray-100 via-slate-200 to-gray-300 bg-clip-text text-transparent">
                Aripilli Bhavana
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300">
              Final Year Computer Science and Engineering Student
            </p>

            <p className="text-lg text-slate-400">
              GITAM University • CGPA: 8.02
            </p>

            <p className="text-lg md:text-xl text-gray-300 italic max-w-2xl">
              "Creating solutions that help others is my ikigai!!"
            </p>

            <div className="flex justify-center md:justify-start space-x-6 pt-4">
              <a
                href="mailto:aripilli.bhavana8@gmail.com"
                className="p-4 bg-slate-700/80 text-white rounded-full hover:bg-slate-600 transition-all duration-300 hover:scale-110 transform shadow-lg border border-slate-600 backdrop-blur-sm"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/Aripilli-Bhavana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800/80 text-white rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 transform shadow-lg border border-slate-600 backdrop-blur-sm"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aripillibhavana/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-700/80 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform shadow-lg border border-blue-600 backdrop-blur-sm"
              >
                <Linkedin size={24} />
              </a>
            </div>

            <div className="pt-6">
              <a
                href="#about"
                className="inline-flex items-center text-slate-400 hover:text-gray-300 transition-colors duration-200 text-lg"
              >
                <span className="mr-2">Learn more about me</span>
                <ArrowDown size={20} className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
