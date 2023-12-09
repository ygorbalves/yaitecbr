<template>
   <Header id="header" />
   <HeroSection id ="hero"/>
   <Features id="features"/>
  <Projects id="projects"/>
    <Testimonials id="testimonials"/>
    <Pricing id="pricing"/>
    <ContactForm id="contact"/>
</template>

<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import Features from './components/Features.vue';
import Testimonials from './components/Testimonials.vue';
import Pricing from './components/Pricing.vue';
import Projects from './components/Projects.vue';
import ContactForm from './components/ContactForm.vue';

export default {
  components: {
    Header,
    HeroSection,
    Features,
    Projects,
    Testimonials,
    Pricing,
    ContactForm
  }
}
</script>
