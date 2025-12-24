import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { FiCode, FiDatabase, FiServer, FiZap, FiTarget, FiGithub } from 'react-icons/fi';

const About = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const skills = [
    { name: 'JavaScript', level: 100 },
    { name: 'TypeScript', level: 100 },
    { name: 'HTML', level: 100 },
    { name: 'React', level: 100 },
    { name: 'Next.js', level: 50 },
    { name: 'MongoDB', level: 90 },
    { name: 'CSS', level: 50 },
    { name: 'Express.js', level: 50 },
    { name: 'Git', level: 100 },
    { name: 'Tailwind CSS', level: 100 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16" data-theme={theme}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.about.introduction}
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-900/20">
            <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t.about.journey}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t.about.journeyDescription1}
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t.about.journeyDescription2}
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.journeyDescription3}
            </motion.p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-900/20">
            <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t.about.goals}
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1">
                  <FiTarget />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.goal1}
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1">
                  <FiZap />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.goal2}
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1">
                  <FiGithub />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.goal3}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 variants={itemVariants} className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            {t.about.skills}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/20"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;