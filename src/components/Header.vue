<template>
  <header class="header d-flex flex-wrap justify-content-center py-2 global-background">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
      <img src="../assets/logo.png" alt="YAITEC Logo" class="hero-logo img-fluid" style="width: 5%;margin-left: 0.5cm">
      <span class="fs-4 text-white" style="  margin-left: 0.25cm; font-family: 'Montserrat', sans-serif;">YAITEC Solutions</span>
    </a>
  <ul class="nav nav-pills">
    <li class="nav-item"><a href="#" @click="scrollToTop" class="nav-link text-white">Home</a></li>
    <li class="nav-item"><router-link to="/blog" class="nav-link text-white">Blog</router-link></li>
  
    <li class="nav-item"><a href="#features" class="nav-link text-white">Serviços</a></li>
    <li class="nav-item"><a href="#projects" class="nav-link text-white">Projetos</a></li>
    <li class="nav-item"><router-link to="/sobre" class="nav-link text-white">Sobre</router-link></li>
    <li class="nav-item"><button @click="openContactModal" class="btn btn-outline-info me-2">Contato</button></li>        
      </ul>
    </header>
</template>

<style scoped>
.fs-4 {
    font-size: calc(1rem + .3vw)!important;
}
.nav-link:hover {
    color: #ccc; /* Change color on hover */
    text-decoration: underline; /* Add underline on hover */
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff; /* default background */
    z-index: 1000;
}


</style>

<script>
export default {
  // ... other component options ...
  methods: {
    openContactModal() {
      // Logic to open the modal
    },
    
  },
};

</script>