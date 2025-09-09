'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Import data
import clinicData from '../../data/clinic.json';
import staffData from '../../data/staff.json';

const extendedStaffData = [
  {
    ...staffData[0],
    image: '/dental website assets/Portrait_of_a_female_dental_hygienist_weari_1.jpg',
    specialties: ['General Dentistry', 'Cosmetic Dentistry', 'Dental Implants'],
    education: 'DMD - New York University College of Dentistry',
    experience: '15+ years',
    languages: ['English', 'Spanish'],
    certifications: ['American Board of General Dentistry', 'Advanced Cardiac Life Support']
  },
  {
    ...staffData[1],
    image: '/dental website assets/Portrait_of_a_smiling_male_dentist_in_white_0.jpg',
    specialties: ['Orthodontics', 'Braces', 'Invisalign', 'Pediatric Dentistry'],
    education: 'DDS - Columbia University College of Dental Medicine',
    experience: '12+ years',
    languages: ['English', 'French'],
    certifications: ['American Board of Orthodontics', 'Invisalign Certified Provider']
  },
  {
    ...staffData[2],
    image: '/dental website assets/Portrait_of_a_female_dental_hygienist_weari_2.jpg',
    specialties: ['Preventive Care', 'Patient Education', 'Periodontal Therapy'],
    education: 'RDH - Stony Brook University School of Dental Hygiene',
    experience: '8+ years',
    languages: ['English', 'Italian'],
    certifications: ['Certified Dental Hygienist', 'Local Anesthesia Certified']
  }
];

export default function StaffPage() {
  const handleContactStaff = (staffName: string) => {
    window.location.href = `/contact?staff=${encodeURIComponent(staffName)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="staff" />

      <main>
        {/* Staff Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/dental website assets/Group_photo_of_friendly_medical_staff_in_wh_2.jpg"
              alt="Medical staff group"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Meet Our Expert Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Our dedicated team of dental professionals is committed to providing exceptional care
              with compassion, expertise, and the latest technology.
            </motion.p>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Patients Treated Monthly</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600">Continuing Education Hours</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Staff Profiles */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-20">
              {extendedStaffData.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      {/* Floating Card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {member.experience}
                          </div>
                          <div className="text-sm text-gray-600">Experience</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </h2>
                      <p className="text-xl text-blue-600 font-semibold mb-4">
                        {member.role}
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Specialties
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Education & Certifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Education
                        </h3>
                        <p className="text-gray-600">{member.education}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Languages
                        </h3>
                        <p className="text-gray-600">{member.languages.join(', ')}</p>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Certifications
                      </h3>
                      <ul className="text-gray-600 space-y-1">
                        {member.certifications.map((cert, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContactStaff(member.name)}
                      className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Schedule with {member.name.split(' ')[0]}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Team Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We foster a collaborative environment where learning, growth, and patient care come first.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Continuous Learning",
                  description: "We stay current with the latest dental techniques and technologies through ongoing education.",
                  icon: "📚"
                },
                {
                  title: "Team Collaboration",
                  description: "Our staff works together seamlessly to provide comprehensive care for every patient.",
                  icon: "🤝"
                },
                {
                  title: "Patient-Centered",
                  description: "Every decision we make prioritizes the comfort and well-being of our patients.",
                  icon: "❤️"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Growing Team
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented dental professionals who share our passion for patient care.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact?subject=careers'}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Career Opportunities
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer clinic={clinicData} />
    </div>
  );
}
