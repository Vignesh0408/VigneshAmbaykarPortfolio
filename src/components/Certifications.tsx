import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certifications: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      icon: '🥇',
      title: 'SOC Analyst Learning Path',
      issuer: 'LetsDefend',
      year: '2025',
      description: 'Comprehensive SOC analyst training covering threat detection and incident response',
      link: [
        {
          label: 'View Certificate',
          url: 'https://drive.google.com/file/d/1lOHdZ88ByiKYKI25vkYiw2q3sfS77zQ_/view?usp=sharing'
        }
      ]
    },
    {
      icon: '🏅',
      title: 'Network Support and Security',
      issuer: 'Cisco Networking Academy',
      year: '2024',
      description: 'Network fundamentals and security principles certification',
      link: [
        {
          label: 'View Certificate',
          url: 'https://www.credly.com/badges/9bda5c13-8afd-4405-96e1-46513216ea33/linked_in_profile'
        }
      ]
    },
    {
      icon: '🛡',
      title: 'Cybersecurity Virtual Experience Programs',
      issuer: 'Mastercard & AIG – Forage Platform',
      year: '2023',
      description: 'Phishing simulation, zero-day response, and ransomware decryption using Python',
      link: [
        {
          label: 'Mastercard Cert',
          url: 'https://drive.google.com/file/d/1-a9v932qphXp_Y3OXiKVv_RO1QcrDN4T/view?usp=sharing'
        },
        {
          label: 'AIG Cert',
          url: 'https://drive.google.com/file/d/1u2OQQR7S91rO-epGC6S4kTcNKe9ZgVoO/view?usp=sharing'
        }
      ]
    },
    {
      icon: '🧠',
      title: 'Full Ethical Hacking & Penetration Testing',
      issuer: 'Udemy Bootcamp',
      year: '2021',
      description: 'Complete ethical hacking methodology and penetration testing techniques',
      link: [
        {
          label: 'View Certificate',
          url: 'https://drive.google.com/file/d/12JpweCLIn3kYqfYsrm7e5K7xJKf-pdHZ/view?usp=sharing'
        }
      ]
    }
  ];

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"
    >
      {/* Background */}
      <img
        src="https://i.postimg.cc/kgMsxN1G/fe6d3d34-c35e-4bc2-93a5-7c2e93996350.jpg"
        alt="certifications background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm pointer-events-none z-0"
      />
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Certifications & Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group transform transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon and Year with Links */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <div className="flex gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {cert.year}
                  </span>
                  {cert.link?.length === 1 && (
                    <a
                      href={cert.link[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink size={16} className="text-gray-600 dark:text-gray-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title with links */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 flex-wrap">
                {cert.link?.length === 1 ? (
                  <a
                    href={cert.link[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-500 flex items-center gap-2"
                  >
                    {cert.title}
                    <ExternalLink size={16} className="inline-block text-gray-600 dark:text-gray-300" />
                  </a>
                ) : (
                  <>
                    {cert.title}
                    {cert.link?.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline flex items-center gap-1"
                      >
                        ({item.label}) <ExternalLink size={14} />
                      </a>
                    ))}
                  </>
                )}
              </h3>

              {/* Issuer */}
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {cert.description}
              </p>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Award size={16} className="mr-2" />
                  Verified Certification
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;