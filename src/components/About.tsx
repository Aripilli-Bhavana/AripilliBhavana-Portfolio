
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a B.Tech Computer Science and Engineering student at GITAM University 
              with a CGPA of 8.02. My passion lies in creating solutions that help others - 
              it's truly my ikigai! I thrive on adaptability, learning, and organizing.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey spans from developing AI-powered geospatial chatbots at ISRO's IIRS 
              to creating inventory management systems for DRDO. I've founded Refuel, an 
              on-demand fuel delivery startup, and am passionate about bridging technology 
              with real-world solutions.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              As someone who believes that "the future belongs to those who believe in the beauty 
              of their dreams," I'm constantly exploring how technology can create meaningful 
              impact in people's lives.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education & Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4"></div>
                <span className="text-gray-600">B.Tech CSE, GITAM University (Aug 2022 - Present)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4"></div>
                <span className="text-gray-600">CGPA: 8.02/10.00</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4"></div>
                <span className="text-gray-600">Founder at Refuel.co</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4"></div>
                <span className="text-gray-600">Rank 1 in Cocubes Pre-Assessment (1,509 students)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4"></div>
                <span className="text-gray-600">President, Throwball SIG GITAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
