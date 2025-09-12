'use client';

import React from 'react';
import Navigation from '../../components/Navigation';
import ContactButton from '../../components/ContactButton';
import Footer from '../../components/Footer';
import Services from '../../components/Services';
import Contact from '../../components/Contact';

// Import data
import clinicData from '../../data/clinic.json';
import servicesData from '../../data/services.json';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="services" />
      <ContactButton phone={clinicData.contact.phone} />

      <main>
        {/* Services Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 to-teal-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Dental Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive dental care with modern technology and compassionate service.
              Discover all the services we offer to keep your smile healthy and beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Services
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <Services services={servicesData} />

        {/* Additional Services Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Emergency Care */}
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Care</h3>
                <p className="text-gray-600 mb-6">
                  Dental emergencies don&apos;t wait. We&apos;re here when you need us most with immediate care for pain, injuries, and urgent dental issues.
                </p>
                <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Emergency Contact
                </button>
              </div>

              {/* Insurance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Insurance Accepted</h3>
                <p className="text-gray-600 mb-6">
                  We work with most major dental insurance plans to help you get the care you need with maximum coverage and minimal out-of-pocket costs.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                  Check Coverage
                </button>
              </div>

              {/* Financing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Flexible Financing</h3>
                <p className="text-gray-600 mb-6">
                  We offer flexible payment options and financing plans to make quality dental care affordable and accessible for all our patients.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact clinic={clinicData} />
      </main>

      <Footer clinic={clinicData} />
    </div>
  );
}
