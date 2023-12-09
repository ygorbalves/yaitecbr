<!-- BlogLayout.vue -->
<template>
    <div>
      <Header />
      <Blog />
      <ContactForm />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import ContactForm from '../components/ContactForm.vue';
  import Blog from '../components/Blog.vue';
  
  export default {
    components: {
    Header,
    Blog,
    ContactForm
    }
  }
  </script>