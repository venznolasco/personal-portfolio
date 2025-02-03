export function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', proficiency: 'advanced' },
        { name: 'TypeScript', proficiency: 'advanced' },
        { name: 'Next.js', proficiency: 'advanced' },
        { name: 'Tailwind CSS', proficiency: 'advanced' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', proficiency: 'intermediate' },
        { name: 'Python', proficiency: 'advanced' },
        { name: 'MySQL', proficiency: 'intermediate' },
        { name: 'PHP', proficiency: 'intermediate' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'PostgreSQL', proficiency: 'advanced' },
        { name: 'MongoDB', proficiency: 'advanced' },
        { name: 'Redis', proficiency: 'intermediate' }
      ]
    },
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'advanced':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      default:
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 flex items-center justify-between"
                  >
                    <span className="text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(
                        skill.proficiency
                      )}`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}