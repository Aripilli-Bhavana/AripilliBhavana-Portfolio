
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-gray-500 text-sm">Profile Image</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Aripilli <span className="text-indigo-600">Bhavana</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Creating solutions that help others is my ikigai!!
          </p>
          <p className="text-lg text-indigo-600 mb-8 max-w-2xl mx-auto font-medium">
            "The future belongs to those who believe in the beauty of their dreams"
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            B.Tech CSE Student at GITAM University | I thrive on adaptability, learning and organizing
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:aripilli.bhavana8@gmail.com"
              className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/Aripilli-Bhavana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aripillibhavana/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
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
