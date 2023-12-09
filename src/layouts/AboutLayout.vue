<!-- AboutLayout.vue -->
<template>
    <div>
      <Header />
      <About />
      <ContactForm />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import ContactForm from '../components/ContactForm.vue';
  import About from '../components/About.vue';
  
  export default {
    components: {
    Header,
    About,
    ContactForm
    }
  }
  </script>