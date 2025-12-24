import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCode, FiDatabase, FiServer } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { theme } = useTheme();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch('/data/db.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch project');
                }
                const data = await response.json();
                const foundProject = data.projects.find(p => p.id === parseInt(id));
                if (!foundProject) {
                    throw new Error('Project not found');
                }
                setProject(foundProject);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex items-center justify-center" data-theme={theme}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading project details...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex items-center justify-center" data-theme={theme}>
                <div className="text-center">
                    <div className="text-red-500 text-4xl mb-4">⚠️</div>
                    <p className="text-gray-600 dark:text-gray-300">Error: {error}</p>
                    <Link
                        to="/projects"
                        className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                        <FiArrowLeft className="mr-2" /> Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16" data-theme={theme}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        to="/projects"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                        <FiArrowLeft className="mr-2" /> Back to Projects
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 overflow-hidden"
                >
                    <div className="h-64 md:h-96 overflow-hidden">
                        <img
                            src={project.image || '/images/project-placeholder.jpg'}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {project.title}
                        </h1>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Overview
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    This project demonstrates my skills in building modern web applications with a focus on user experience and performance. The application features a clean, responsive design and utilizes the latest web technologies.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Key Features
                                </h2>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                                        Responsive design for all device sizes
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                                        Clean, modular code structure
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                                        Optimized performance
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                                        Accessible UI components
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Technologies Used
                                </h2>
                                <div className="space-y-3">
                                    {project.technologies.map((tech) => (
                                        <div key={tech} className="flex items-center">
                                            <div className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3">
                                                {tech === 'React' && <FiCode />}
                                                {tech === 'Node.js' && <FiServer />}
                                                {tech === 'MongoDB' && <FiDatabase />}
                                                {tech.includes('CSS') && <FiCode />}
                                                {tech.includes('JavaScript') && <FiCode />}
                                            </div>
                                            <span className="text-gray-600 dark:text-gray-300">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Links
                                </h2>
                                <div className="space-y-3">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            <span className="text-gray-700 dark:text-gray-200">Live Demo</span>
                                            <FiExternalLink className="text-indigo-600 dark:text-indigo-400" />
                                        </a>
                                    )}

                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            <span className="text-gray-700 dark:text-gray-200">GitHub Repository</span>
                                            <FiGithub className="text-indigo-600 dark:text-indigo-400" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail;