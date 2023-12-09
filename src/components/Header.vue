<template>
  <header class="d-flex flex-wrap justify-content-center py-3 border-bottom global-background">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
      <img src="../assets/logo.png" alt="YAITEC Logo" class="hero-logo img-fluid" style="width: 6%;margin-left: 0.5cm">
      <span class="fs-4 text-white" style="  margin-left: 0.25cm; font-family: 'Montserrat', sans-serif;">YAITEC Solutions</span>
    </a>
      <ul class="nav nav-pills ">
        <li class="nav-item"><a href="#" class="nav-link text-white" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Serviços</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Projetos</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Sobre</a></li>
        <button type="button" class="btn btn-outline-info me-2">Contato</button>
        
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
</style>