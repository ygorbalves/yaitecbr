<!-- BlogPage.vue -->
<template>
    <Header id="header" />
    <Blog />
    <ContactForm id="contact" />
  </template>
  
  <script>
  import Header from './Header.vue';
  import Blog from './Blog.vue'; // Assuming you have a Blog component
  import ContactForm from './ContactForm.vue';
  
  export default {
    components: {
      Header,
      Blog,
      ContactForm
    }
  }
  </script>