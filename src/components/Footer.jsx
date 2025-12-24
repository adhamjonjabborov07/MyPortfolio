import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16" data-theme={theme}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MyPortfolio</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {t.footer.description}
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                  {t.footer.navigation}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {t.navbar.home}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {t.navbar.about}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {t.navbar.projects}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/certificates"
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {t.navbar.certificates}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                  {t.footer.social}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://github.com/adhamjonjabborov07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    >
                      <FiGithub className="mr-2" /> {t.footer.github}
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/jabborovv_07_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    >
                      <FiInstagram className="mr-2" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:adhamjon.jabborov@example.com"
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    >
                      <FiMail className="mr-2" /> {t.footer.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {currentYear} MyPortfolio. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;