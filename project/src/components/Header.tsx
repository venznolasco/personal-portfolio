import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set default to true
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Add dark class to html element on component mount
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-accent-dark/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-accent-dark dark:text-white">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors">
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-accent-light dark:hover:bg-accent-dark"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-white/70" />
              ) : (
                <Moon className="w-5 h-5 text-accent-dark/70" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent-light dark:hover:bg-accent-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-accent-dark dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-accent-dark dark:text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-accent-dark/95 backdrop-blur-sm border-b border-accent-dark/10 dark:border-white/10">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a
                href="#about"
                className="text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 text-accent-dark/70 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}