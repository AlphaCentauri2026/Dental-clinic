'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import ContactButton from '../../components/ContactButton';
import Footer from '../../components/Footer';
import About from '../../components/About';

// Import data
import clinicData from '../../data/clinic.json';

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "5000+", label: "Happy Patients" },
    { number: "50+", label: "Staff Members" },
    { number: "24/7", label: "Emergency Care" }
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "We treat every patient with the kindness and respect they deserve, creating a comfortable environment for all.",
      icon: "❤️"
    },
    {
      title: "Latest Technology",
      description: "We invest in cutting-edge dental technology to provide the best possible care with minimal discomfort.",
      icon: "⚡"
    },
    {
      title: "Patient Education",
      description: "We believe in empowering our patients with knowledge about their oral health and treatment options.",
      icon: "📚"
    },
    {
      title: "Community Focus",
      description: "We're committed to serving our local community and giving back through various outreach programs.",
      icon: "🌟"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />
      <ContactButton phone={clinicData.contact.phone} />

      <main className="pt-32">
        {/* About Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Dental clinic images/dentist-998830_1280.jpg"
              alt="Modern dental clinic building"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-teal-600/80"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              About {clinicData.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              {clinicData.description}
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <About clinic={clinicData} />

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Values & Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape the exceptional care we provide to our patients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline/History */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to becoming a trusted dental care provider in our community.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

              <div className="space-y-16">
                {[
                  {
                    year: "2009",
                    title: "Founded",
                    description: "BrightSmile Dental Clinic opened its doors with a mission to provide exceptional dental care.",
                    image: "/Dental clinic images/doctor-563429_1280.jpg"
                  },
                  {
                    year: "2012",
                    title: "Expansion",
                    description: "Added advanced dental technology including digital X-rays and laser dentistry.",
                    image: "/Dental clinic images/pexels-fr3nks-305564.jpg"
                  },
                  {
                    year: "2015",
                    title: "Team Growth",
                    description: "Expanded our team of specialists and hygienists to better serve our growing patient base.",
                    image: "/Dental clinic images/pexels-fr3nks-305566.jpg"
                  },
                  {
                    year: "2024",
                    title: "Today",
                    description: "A full-service dental clinic committed to excellence and patient satisfaction.",
                    image: "/Dental clinic images/pexels-fr3nks-305568.jpg"
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } gap-8`}
                  >
                    <div className="w-1/2">
                      <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className={`text-center ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied patients who trust us with their dental care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Schedule Your Visit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/services'}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  Our Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer clinic={clinicData} />
    </div>
  );
}
