import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 gradient-bg dark:from-accent-dark dark:via-primary-900 dark:to-accent-dark">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-accent-dark dark:text-white mb-4">
            Hi, I'm <span className="text-primary-500 dark:text-primary-400">Venz Nolasco</span>
          </h1>
          <p className="text-xl text-accent-dark/80 dark:text-white/80 mb-6">
            Frontend Developer
          </p>
          <p className="text-accent-dark/70 dark:text-white/70 mb-8 max-w-lg">
            I craft beautiful, user-friendly web experiences with modern technologies.
            Passionate about creating innovative solutions that make a difference.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1ZQXjsY-TfRAhlAAtDYm4kNPCY9Abc1Es/view?usp=sharing" className="btn-secondary">
              Download CV
            </a>
          </div>
          <div className="flex space-x-4 mt-8">
            <a
              href="https://github.com/venznolasco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark/60 hover:text-primary-500 dark:text-white/60 dark:hover:text-primary-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/venz-joshua-nolasco-89740a334/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark/60 hover:text-primary-500 dark:text-white/60 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:vjnolasco0510@gmail.com"
              className="text-accent-dark/60 hover:text-primary-500 dark:text-white/60 dark:hover:text-primary-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://media-hosting.imagekit.io//f41ac551e2a5482c/DSC_8475 copy (1).jpg?Expires=1833172883&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NUHPIg042NR6xcxe2t33NED3p1YjjAHnyWerGwDIzCA4wECTt2aPKuFypz6tp~YTgEnaQQBJsRpPQuh~8SxDytQ4cau5lIFdl2zqZm8MM3SCkcOd6QU-VEE0T-QMbBcUjdaHSo7PSBveSBAF6umjvfzAUsM-kyj20Vyq-tgbYjdc2Rt4m~rtqB0nKhK53-eqGjKt5eMNO8Gxa8jGjJCSrPcD~iIQG3msJkxTn5yuY3qk2WOVKw5estiL4tmjrSwWjRd6BXZP1lgbeqTWzOSAXoulqfZCmDvQo3OZObaGQ-aXocmja9xLifoiSdT3d7ZPoD9FhP1ok3fjPrA25gL3HA__"
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white dark:border-accent-dark"
          />
        </div>
      </div>
    </section>
  );
}