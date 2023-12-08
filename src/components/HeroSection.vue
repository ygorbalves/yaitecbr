<template>
  <!-- Hero Section -->
  <div class="hero-section d-flex flex-column align-items-center justify-content-center text-center">
    <!-- YAITEC Logo -->
    <img src="../assets/logo.png" alt="YAITEC Logo" class="hero-logo img-fluid mb-4">
    <!-- Hero Content -->
    <div class="hero-content">
      <h1 class="display-4 fw-bold mb-3">YAITEC Solutionss</h1>
      <router-link class="btn btn-outline-light btn-lg" to="/contact">Comece Agora</router-link>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  background-color: #0056b3;
  background-image: linear-gradient(to right, #091747, #0056b3);
  color: white;
  min-height: 100vh;
  padding: 2rem;
}

.hero-logo {
  max-width: 500px;
  /* Adjust the size of the logo */
  margin-bottom: 1rem;
  /* Space between logo and text */
}

.hero-content {
  max-width: 900px;
  margin: auto;
}

.display-4 {
  font-weight: 700;
}

.lead {
  font-size: 1.2rem;
}

.btn-outline-light {
  border-width: 2px;
  padding: 0.5rem 2rem;
  transition: all 0.3s ease-in-out;
}

.btn-outline-light:hover,
.btn-outline-light:focus {
  background-color: #ffffff;
  color: #091747;
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }

  .lead {
    font-size: 1rem;
  }

  .hero-section {
    padding: 1rem;
    min-height: 60vh;
  }

  .hero-logo {
    max-width: 120px;
    /* Smaller logo for smaller screens */
  }
}</style>
