<!-- HomePage.vue -->
<template>
    <HeroSection id="hero"/>
    <Projects id="projects"/>
    <Features id="features"/>
    <Testimonials id="testimonials"/>
    <Pricing id="pricing"/>
    <ContactForm id="contact"/>
  </template>
  
  <script>
  import HeroSection from './HeroSection.vue';
  import Features from './Features.vue';
  import Projects from './Projects.vue';
  import Testimonials from './Testimonials.vue';
  import Pricing from './Pricing.vue';
  import ContactForm from './ContactForm.vue';
  
  export default {
    components: {
      HeroSection,
      Features,
      Projects,
      Testimonials,
      Pricing,
      ContactForm
    }
  }
  </script>