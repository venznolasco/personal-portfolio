import { Calendar, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
  const projects = [
    {
      id: '1',
      title: 'IOT-Based Patient Vital Signs Remote Monitoring System',
      description: 'The IoT-Based Patient Vital Signs Remote Monitoring System is a smart healthcare solution designed to continuously track and monitor patient vital signs in real time. This system integrates Internet of Things (IoT) technology with biomedical sensors to collect essential health parameters such as heart rate, blood pressure, oxygen saturation (SpO2), temperature, and respiratory rate.',
      technologies: ['Blynk', 'Python', 'ESP32'],
      previewImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?fit=crop&w=800&h=450',
      images: [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?fit=crop&w=800&h=450',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?fit=crop&w=800&h=450',
        'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?fit=crop&w=800&h=450',
      ],
      duration: '5 months'
    },
    {
      id: '2',
      title: 'Development of Flood Monitoring & Alerting System',
      description: 'A web-based platform enabling real-time document collaboration with features like simultaneous editing, version control, and instant messaging. Built with WebSocket technology for seamless real-time updates.',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Docker'],
      previewImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=800&h=450',
      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=800&h=450',
        'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?fit=crop&w=800&h=450',
        'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?fit=crop&w=800&h=450',
      ],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com',
      duration: '4 months'
    },
    {
      id: '3',
      title: 'E-commerce Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for e-commerce businesses, providing insights into sales trends, customer behavior, and inventory management. Features include interactive charts and predictive analytics.',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
      previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=450',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=450',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&h=450',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?fit=crop&w=800&h=450',
      ],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com',
      duration: '5 months'
    }
  ];

  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({});
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const startImageRotation = (projectId: string) => {
    setHoveredProject(projectId);
    setActiveImages(prev => ({ ...prev, [projectId]: 0 }));
    const interval = setInterval(() => {
      setActiveImages(prev => ({
        ...prev,
        [projectId]: (prev[projectId] + 1) % projects.find(p => p.id === projectId)!.images.length
      }));
    }, 2000);

    return interval;
  };

  const stopImageRotation = (projectId: string, interval: number) => {
    clearInterval(interval);
    setHoveredProject(null);
    setActiveImages(prev => {
      const newState = { ...prev };
      delete newState[projectId];
      return newState;
    });
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              onMouseEnter={() => {
                const interval = startImageRotation(project.id);
                (document.getElementById(project.id) as HTMLElement).dataset.interval = interval.toString();
              }}
              onMouseLeave={() => {
                const interval = parseInt((document.getElementById(project.id) as HTMLElement).dataset.interval || '0');
                stopImageRotation(project.id, interval);
              }}
              id={project.id}
            >
              <div className="relative h-48 overflow-hidden">
                {/* Preview Image (shown when not hovered) */}
                {!hoveredProject || hoveredProject !== project.id ? (
                  <img
                    src={project.previewImage}
                    alt={`${project.title} preview`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                ) : (
                  // Image Carousel (shown when hovered)
                  project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} - View ${index + 1}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        activeImages[project.id] === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {project.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}