
import { Mail, Github, Linkedin, Download, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about technology and innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-gray-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-gray-100">Email</p>
                  <a href="mailto:aripilli.bhavana8@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    aripilli.bhavana8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-gray-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-gray-100">Location</p>
                  <p className="text-gray-300">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-100">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/aripillibhavana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-800 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-200 hover:scale-110 transform shadow-lg border border-blue-600"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Aripilli-Bhavana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full hover:from-gray-700 hover:to-gray-600 transition-all duration-200 hover:scale-110 transform shadow-lg border border-gray-600"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:aripilli.bhavana8@gmail.com"
                  className="p-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full hover:from-gray-600 hover:to-gray-500 transition-all duration-200 hover:scale-110 transform shadow-lg border border-gray-600"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Download Resume & Quick Contact */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 backdrop-blur-sm border border-gray-600 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">Quick Actions</h3>
            
            <div className="space-y-6">
              <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white py-4 px-6 rounded-xl transition-all duration-200 font-medium shadow-lg border border-gray-600">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              
              <div className="border-t border-gray-600 pt-6">
                <p className="text-gray-300 mb-4">
                  Interested in collaboration or have a project in mind? 
                  I'd love to hear from you!
                </p>
                <a
                  href="mailto:aripilli.bhavana8@gmail.com"
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-800 to-green-700 hover:from-green-700 hover:to-green-600 text-white py-4 px-6 rounded-xl transition-all duration-200 font-medium shadow-lg border border-green-600"
                >
                  <Mail size={20} />
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Aripilli Bhavana. Creating solutions that help others is my ikigai!!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
