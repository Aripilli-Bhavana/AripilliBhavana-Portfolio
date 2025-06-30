
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600">
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated Computer Science Engineering student at GITAM University with a strong academic record (CGPA: 8.02). 
              My passion lies in creating technology solutions that make a meaningful impact on people's lives.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Through internships at prestigious organizations like <span className="text-white font-semibold">ISRO's IIRS</span> and <span className="text-white font-semibold">DRDO</span>, 
              I've gained hands-on experience in AI/ML, web development, and system design. I thrive on adaptability, continuous learning, and organizing complex projects.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">8.02</div>
                <div className="text-gray-400">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">3+</div>
                <div className="text-gray-400">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">2025</div>
                <div className="text-gray-400">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
