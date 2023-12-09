<!-- AboutPage.vue -->
<template>
    <Header id="header" />
    <About/>
    <ContactForm id="contact" />
</template>
  
  <script>
  import Header from './Header.vue';
  import About from './About.vue'; // Assuming you have a Blog component
  import ContactForm from './ContactForm.vue';
  
  export default {
    components: {
      Header,
      About,
      ContactForm
    }
  }
  </script>