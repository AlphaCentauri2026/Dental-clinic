'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Resources: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const resources = [
    {
      title: "Oral Health Tips",
      description: "Learn the best practices for maintaining healthy teeth and gums at home.",
      image: "/dental website assets/Closeup_of_toothbrush_and_dental_floss_on_w_3.jpg",
      category: "Education",
      readTime: "5 min read"
    },
    {
      title: "Dental Emergency Guide",
      description: "Know what to do in case of dental emergencies and when to seek immediate care.",
      image: "/dental website assets/Dentist_examining_patients_teeth_with_denta_1.jpg",
      category: "Emergency",
      readTime: "3 min read"
    },
    {
      title: "Children's Dental Care",
      description: "Specialized tips for parents to ensure their children's dental health from an early age.",
      image: "/dental website assets/Happy_patient_smiling_in_a_dental_chair_fri_2.jpg",
      category: "Pediatrics",
      readTime: "7 min read"
    },
    {
      title: "Teeth Whitening Myths",
      description: "Separating fact from fiction when it comes to achieving a brighter smile.",
      image: "/dental website assets/Dental_cleaning_tools_neatly_arranged_on_a_2.jpg",
      category: "Cosmetic",
      readTime: "4 min read"
    }
  ];

  const quickLinks = [
    { title: "Insurance Information", icon: "🛡️" },
    { title: "Payment Options", icon: "💳" },
    { title: "Patient Forms", icon: "📋" },
    { title: "COVID-19 Safety", icon: "🧴" },
    { title: "Privacy Policy", icon: "🔒" },
    { title: "Accessibility", icon: "♿" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Patient Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access helpful information, educational content, and important resources
            to support your dental health journey.
          </p>
        </motion.div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Resource Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {resource.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {resource.readTime}
                  </span>
                </div>
              </div>

              {/* Resource Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {resource.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2 group"
                >
                  Read Article
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Quick Access Links
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="text-3xl mb-3">{link.icon}</div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Stay Informed
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest dental health tips,
            clinic updates, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;





