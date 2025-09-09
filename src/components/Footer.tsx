'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ClinicData {
  name: string;
  tagline: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

interface FooterProps {
  clinic: ClinicData;
}

const Footer: React.FC<FooterProps> = ({ clinic }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Staff', href: '/staff' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'General Checkups',
    'Teeth Whitening',
    'Dental Implants',
    'Orthodontics',
    'Emergency Care'
  ];

  const resources = [
    'Patient Resources',
    'Insurance Info',
    'Payment Options',
    'Privacy Policy',
    'Accessibility'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              {clinic.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {clinic.tagline}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 {clinic.contact.address}</p>
              <p>📞 {clinic.contact.phone}</p>
              <p>✉️ {clinic.contact.email}</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services?service=${encodeURIComponent(service)}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-red-400 mb-2">🚨 Emergency</h5>
              <p className="text-sm text-gray-300 mb-2">
                Dental emergencies available 24/7
              </p>
              <a
                href={`tel:${clinic.contact.phone}`}
                className="text-red-400 hover:text-red-300 font-semibold"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <h4 className="text-lg font-semibold mb-6 text-center">Office Hours</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {Object.entries(clinic.hours).map(([day, hours]) => (
              <div key={day} className="bg-gray-800 rounded-lg p-4">
                <div className="font-medium text-blue-400 capitalize">
                  {day}
                </div>
                <div className={`text-sm mt-1 ${
                  hours === 'Closed' ? 'text-red-400' : 'text-gray-300'
                }`}>
                  {hours}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} {clinic.name}. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {clinic.socials.facebook && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={clinic.socials.facebook}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              )}

              {clinic.socials.instagram && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={clinic.socials.instagram}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.983.015 6.69.072 5.396.129 4.409.309 3.623.594c-.78.282-1.442.657-2.1 1.315C.864 2.567.489 3.229.207 4.009c-.285.786-.465 1.773-.522 3.067C-.015 7.983 0 8.396 0 12.017s-.015 4.034-.072 5.327c-.057 1.294-.237 2.281-.522 3.067-.282.78-.657 1.442-1.315 2.1-.658.658-1.32 1.033-2.1 1.315-.786.285-1.773.465-3.067.522C7.983 23.985 8.396 24 12.017 24s4.034-.015 5.327-.072c1.294-.057 2.281-.237 3.067-.522.78-.282 1.442-.657 2.1-1.315.658-.658 1.033-1.32 1.315-2.1.285-.786.465-1.773.522-3.067.057-1.294.072-1.707.072-5.327s.015-4.034.072-5.327c.057-1.294.237-2.281.522-3.067.282-.78.657-1.442 1.315-2.1.658-.658 1.32-1.033 2.1-1.315.786-.285 1.773-.465 3.067-.522C16.017.015 16.43 0 20.051 0s4.034.015 5.327.072c1.294.057 2.281.237 3.067.522.78.282 1.442.657 2.1 1.315.658.658 1.033 1.32 1.315 2.1.285.786.465 1.773.522 3.067C23.985 7.983 24 8.396 24 12.017s-.015 4.034-.072 5.327c-.057 1.294-.237 2.281-.522 3.067-.282.78-.657 1.442-1.315 2.1-.658.658-1.32 1.033-2.1 1.315-.786.285-1.773.465-3.067.522C16.017 23.985 15.604 24 12.017 24zM12.017 5.839a6.178 6.178 0 100 12.357 6.178 6.178 0 000-12.357zm0 10.18a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </motion.a>
              )}

              {clinic.socials.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={clinic.socials.linkedin}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              )}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





