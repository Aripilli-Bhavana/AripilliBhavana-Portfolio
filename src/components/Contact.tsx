
import { Mail, Github, Linkedin, Download, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about technology and startups.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:bhavana@example.com" className="text-slate-300 hover:text-white transition-colors">
                    bhavana@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-slate-300">Visakhapatnam, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:bhavana@example.com"
                  className="p-3 bg-green-600 rounded-full hover:bg-green-500 transition-colors duration-200 hover:scale-110 transform"
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
              <button className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl transition-colors duration-200 font-medium">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-slate-300 mb-4">
                  Interested in collaboration or have a project in mind? 
                  I'd love to hear from you!
                </p>
                <a
                  href="mailto:bhavana@example.com"
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
          <p className="text-slate-400">
            © 2024 Aripilli Bhavana. Built with passion for technology and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
