import { Award, BookOpen, Calendar } from 'lucide-react';

export function About() {
  const education = [
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of Science and Technology of Southern Philippines - CDO',
      year: '2021-Present',
      achievements: [
        'A.Y. 2021-2022 1st Semester Dean Lister',
        '2022-2023 ICPeP.SE-USTP Committee on Sports',
        '2023-2024 ICPeP.SE-USTP Committee on Sports',
        '2023-2024 Class Representative',
        '2024-Present ICPeP.SE-USTP Committee on Extracurricular Activities',
        '2024-Present Class Representative'
      ]
    },
    {
      id: '2',
      degree: 'Senior High School',
      institution: 'Gusa Regional Science High School - X',
      year: '2019-2021',
      achievements: [
        'Graduated with High Honors',
        '2019 CDO Danztrack Interschool Dance Competition Champion',
        '2020 TNT Siklab Saya Dance Competition Champion',
      ]
    },
    {
      id: '3',
      degree: 'Junior High School',
      institution: 'Gusa Regional Science High School - X',
      year: '2015-2019',
      achievements: [
        'Graduated with Honors',
        'Leadership Award',
        '2019 National Research Conference Participant',
        'GRSHS-X SSG Peace Officer 2018-2019',
        'Drum and Lyre Civic Miltary Parade Champion',
        '3rd Place Intel ISEF Research Competition Division Level',
      ]
    },
    {
      id: '4',
      degree: 'Elementary School',
      institution: 'City Central School',
      year: '2009-2015',
      achievements: [
        'Graduated with Honors',
      ]
    },
  ];

  const certifications = [
    {
      id: '1',
      name: 'Introduction to Cybersecurity',
      organization: 'Cisco Networking Academy',
      date: 'January 2025'
    },
    {
      id: '2',
      name: 'CCNA: Enterprise, Networking, Security, and Automation',
      organization: 'Cisco Networking Academy',
      date: 'April 2024'
    },
    {
      id: '3',
      name: 'CCNA: Switching, Routing, and Wireless Essentials',
      organization: 'Cisco Networking Academy',
      date: 'February 2024'
    },
    {
      id: '4',
      name: 'Networking Essentials',
      organization: 'Cisco Networking Academy',
      date: 'February 2024'
    },
    {
      id: '5',
      name: 'Vigilance on the Digital Realm: Strategies for Cybersecurity Resilience',
      organization: 'Department of Information and Communications Technology',
      date: 'May 2024'
    },
    {
      id: '6',
      name: 'Creating Quality Integrated Circuits: Design, Construction and Analysis',
      organization: 'Mechatronics and Robotics Society of the Philippines',
      date: 'September 2023'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.institution}</p>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{cert.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}