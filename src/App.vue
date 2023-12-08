<template>
  <div class="vertical-stack">
    <HeroSection />
    <Features />
    <Testimonials />
    <Pricing />
    <ContactForm />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import Features from './components/Features.vue';
import Testimonials from './components/Testimonials.vue';
import Pricing from './components/Pricing.vue';
import ContactForm from './components/ContactForm.vue';

export default {
  components: {
    Header,
    HeroSection,
    Features,
    Testimonials,
    Pricing,
    ContactForm
  }
}
</script>
