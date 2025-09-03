import React, { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 dark:from-black dark:via-gray-900 dark:to-black" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Vignesh
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                Ambaykar
              </span>
            </h1>

            {/* Terminal-style typing animation */}
            <h2
              className={`text-lg md:text-xl lg:text-2xl font-mono text-green-400 mb-6 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-green-400 font-bold">{'> '}</span>
              <Typewriter
                words={[
                  'Aspiring SOC Analyst',
                  'Passionate About SOC Operations',
                  'Focused on Real-World Threat Response',
                  'Specializing in SIEM, SOAR & IR'
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p
              className={`text-lg md:text-xl text-gray-400 mb-10 leading-relaxed transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              "Proactively defending digital assets through smart security automation and log-driven threat detection. 
              Passionate about building scalable SOC workflows that respond faster, detect deeper, and adapt smarter. 
              <span className="text-white font-medium"> Driven by curiosity. Powered by purpose.</span>"
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button
                onClick={scrollToProjects}
                className="group bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
              
              <a
                href="https://drive.google.com/uc?export=download&id=106wntxMpB8hBrjXrK9vltBg0CcOArWmv"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-1"
              >
                Download Resume
                <Download size={20} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-900 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img
                  src="https://i.postimg.cc/Ss788SRb/vignesh-coat-coat.jpg"
                  alt="Vignesh Ambaykar - Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full -z-10 opacity-30 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;