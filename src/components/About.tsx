const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto"></div>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600">
          <div className="space-y-6 text-center">
            {/* Paragraph 1 */}
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated Computer Science and Engineering student at GITAM University, Visakhapatnam. 
              My passion lies in creating solutions that solve real-world problems.
              My interests lie in web development, backend systems and startup product building. I enjoy collaborating with others, leading projects from ideation to execution, and continuously learning new tech stacks.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Through internships at prestigious organizations like <span className="text-white font-semibold">IIRS - ISRO</span> and <span className="text-white font-semibold">DRDL - DRDO</span>, 
              I've gained hands-on experience in AI/ML, web development, and system design. I thrive on adaptability, continuous learning, and organizing complex projects.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">8.02</div>
                <div className="text-gray-400">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">3+</div>
                <div className="text-gray-400">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">6+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">2026</div>
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
