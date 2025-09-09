'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Appointments: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedService, setSelectedService] = useState('');

  const services = [
    'General Checkups',
    'Teeth Whitening',
    'Dental Implants',
    'Orthodontics',
    'Emergency Care',
    'Cosmetic Dentistry'
  ];

  const benefits = [
    {
      title: "Easy Online Booking",
      description: "Schedule appointments 24/7 from the comfort of your home",
      icon: "📱"
    },
    {
      title: "Flexible Scheduling",
      description: "Choose times that work best for your busy lifestyle",
      icon: "📅"
    },
    {
      title: "Quick Confirmation",
      description: "Receive instant confirmation and reminders via email/SMS",
      icon: "⚡"
    },
    {
      title: "Secure & Private",
      description: "Your personal information is protected with bank-level security",
      icon: "🔒"
    }
  ];

  const handleBookAppointment = () => {
    window.location.href = '/contact';
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    // Could add logic to pre-fill contact form with selected service
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Taking the first step towards a healthier smile is easy.
            Choose your service and schedule a convenient time to visit us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Quick Appointment Request
            </h3>

            <div className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Service
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleServiceSelect(service)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        selectedService === service
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {service}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookAppointment}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  📅 Book Full Appointment
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = `tel:(555) 123-4567`}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300"
                >
                  📞 Call for Immediate Booking
                </motion.button>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="text-red-600 text-xl">🚨</div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">
                      Dental Emergency?
                    </h4>
                    <p className="text-red-700 text-sm mb-2">
                      Don&apos;t wait - call our emergency line immediately.
                    </p>
                    <a
                      href="tel:(555) 123-4567"
                      className="text-red-600 font-semibold hover:text-red-700"
                    >
                      Emergency: (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/dental website assets/Tablet_device_displaying_patient_forms_bein_0.jpg"
                alt="Patient scheduling appointment"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg mb-1">
                  Digital Experience
                </h4>
                <p className="text-sm text-gray-200">
                  Modern booking system for your convenience
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-blue-100">Online Booking</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">5 min</div>
                  <div className="text-sm text-blue-100">Avg. Wait Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">98%</div>
                  <div className="text-sm text-blue-100">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose BrightSmile Dental?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "👨‍⚕️", title: "Expert Team", desc: "Certified specialists" },
              { icon: "💻", title: "Modern Tech", desc: "Latest equipment" },
              { icon: "❤️", title: "Patient Care", desc: "Personalized attention" },
              { icon: "⭐", title: "5-Star Rated", desc: "Trusted by patients" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointments;





