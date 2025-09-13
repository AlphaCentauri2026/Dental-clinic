'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import ContactButton from '../components/ContactButton';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Staff from '../components/Staff';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Resources from '../components/Resources';
import Appointments from '../components/Appointments';

// Import data
import clinicData from '../data/clinic.json';
import servicesData from '../data/services.json';
import staffData from '../data/staff.json';
import testimonialsData from '../data/testimonials.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="home" />
      <ContactButton phone={clinicData.contact.phone} />

      <main className="pt-32">
        <Hero
          clinicName={clinicData.name}
          tagline={clinicData.tagline}
        />

        <About clinic={clinicData} />

        <Services services={servicesData} />

        <Staff staff={staffData} />

        <Testimonials testimonials={testimonialsData} />

        <Resources />

        <Appointments />

        <Contact clinic={clinicData} />
      </main>

      <Footer clinic={clinicData} />
    </div>
  );
}
