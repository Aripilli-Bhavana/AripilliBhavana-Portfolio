
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-full flex items-center justify-center border-4 border-gray-600 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-500/20 to-transparent"></div>
            <span className="text-gray-300 text-sm relative z-10">Profile Image</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Aripilli
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent">
              Bhavana
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Creating solutions that help others is my ikigai!!
          </p>
          
          <p className="text-lg bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent mb-8 max-w-2xl mx-auto font-medium">
            "The future belongs to those who believe in the beauty of their dreams"
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            B.Tech CSE Student at GITAM University | I thrive on adaptability, learning and organizing
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:aripilli.bhavana8@gmail.com"
              className="p-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full hover:from-gray-600 hover:to-gray-500 transition-all duration-300 hover:scale-110 transform shadow-lg border border-gray-600"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/Aripilli-Bhavana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-110 transform shadow-lg border border-gray-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aripillibhavana/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-110 transform shadow-lg border border-blue-600"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            <span className="mr-2">Explore my journey</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
