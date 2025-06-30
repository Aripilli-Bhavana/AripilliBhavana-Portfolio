
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-80 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg shadow-2xl border-2 border-gray-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-500/20 to-transparent"></div>
              <span className="text-gray-300 text-sm relative z-10 text-center px-4">
                Professional Photo<br/>
                (Add your photo here)
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Aripilli Bhavana
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-3">
              Computer Science Engineering Student
            </p>
            
            <p className="text-lg text-gray-400 mb-4">
              GITAM University • CGPA: 8.02
            </p>
            
            <p className="text-lg text-gray-300 mb-6 italic">
              "Creating solutions that help others is my ikigai!!"
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="mailto:aripilli.bhavana8@gmail.com"
                className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110 transform shadow-lg"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/Aripilli-Bhavana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform shadow-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aripillibhavana/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform shadow-lg"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <a
              href="#about"
              className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              <span className="mr-2">Learn more about me</span>
              <ArrowDown size={18} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
