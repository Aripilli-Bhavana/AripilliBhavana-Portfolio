
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a B.Tech Computer Science and Engineering student at GITAM University 
              with a CGPA of 8.02. My passion lies in creating solutions that help others - 
              it's truly my ikigai! I thrive on adaptability, learning, and organizing.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey spans from developing AI-powered geospatial chatbots at ISRO's IIRS 
              to creating inventory management systems for DRDO. I've founded Refuel, an 
              on-demand fuel delivery startup, and am passionate about bridging technology 
              with real-world solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              As someone who believes that "the future belongs to those who believe in the beauty 
              of their dreams," I'm constantly exploring how technology can create meaningful 
              impact in people's lives.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600 shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Education & Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mr-4"></div>
                <span className="text-gray-300">B.Tech CSE, GITAM University (Aug 2022 - Present)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mr-4"></div>
                <span className="text-gray-300">CGPA: 8.02/10.00</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mr-4"></div>
                <span className="text-gray-300">Founder at Refuel.co</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mr-4"></div>
                <span className="text-gray-300">Rank 1 in Cocubes Pre-Assessment (1,509 students)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mr-4"></div>
                <span className="text-gray-300">President, Throwball SIG GITAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
