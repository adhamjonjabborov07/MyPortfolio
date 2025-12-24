import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CertificateCard = ({ certificate }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-900/40"
    >
      <div className="h-40 overflow-hidden">
        <img
          src={certificate.image || '/images/certificate-placeholder.jpg'}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {certificate.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {certificate.organization}
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {certificate.year}
        </p>
      </div>
    </motion.div>
  );
};

export default CertificateCard;