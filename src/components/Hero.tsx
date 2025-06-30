
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Aripilli <span className="text-blue-600">Bhavana</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            CSE Undergraduate | Interested in Product & Startups
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Pre-final year student at GITAM University, passionate about technology, 
            product thinking, and building innovative solutions for early-stage startups.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:bhavana@example.com"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
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
