
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a pre-final year Computer Science and Engineering student at GITAM University 
              with a CGPA of 8.22. My journey in technology has been driven by curiosity about 
              how products are built and how startups create innovative solutions.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Currently working as a Student Associate at Caarya, I focus on startup research 
              and content creation while leading student consultant activities. My experience 
              spans from product management internships to contributing to defense projects 
              with DRDO.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm passionate about bridging the gap between technology and business, 
              exploring how innovative ideas can be transformed into meaningful products 
              that solve real-world problems.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-slate-600">Pre-final year CSE student</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-slate-600">GITAM University (CGPA: 8.22)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-slate-600">Student Associate at Caarya</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-slate-600">Product & Startup Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
