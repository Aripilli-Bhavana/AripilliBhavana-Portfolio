
import { Mail, Github, Linkedin, Download, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about technology and innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-indigo-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:aripilli.bhavana8@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    aripilli.bhavana8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-indigo-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/aripillibhavana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Aripilli-Bhavana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:aripilli.bhavana8@gmail.com"
                  className="p-3 bg-indigo-600 rounded-full hover:bg-indigo-500 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Download Resume & Quick Contact */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
            
            <div className="space-y-6">
              <button className="w-full flex items-center justify-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-xl transition-colors duration-200 font-medium">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-gray-300 mb-4">
                  Interested in collaboration or have a project in mind? 
                  I'd love to hear from you!
                </p>
                <a
                  href="mailto:aripilli.bhavana8@gmail.com"
                  className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl transition-colors duration-200 font-medium"
                >
                  <Mail size={20} />
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Aripilli Bhavana. Creating solutions that help others is my ikigai!!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
