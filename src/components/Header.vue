<template>
  <div v-if="isContactModalOpen" class="contact-modal">
    <div class="modal-content">
      <span class="close" @click="closeContactModal">&times;</span>
      <h1 style="color: black;">Entre em contato por Email: ygorbalves@yaitec.com  </h1>
      <br> <br>
      <h1><a href="https://wa.me/5583998643143" target="_blank">Ou clique aqui e envie uma mensagem agora no Whatsapp!</a></h1>
    </div>
  </div>

  <header class="header d-flex flex-wrap justify-content-center py-2 global-background border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
      <img src="../assets/logo.png" alt="YAITEC Logo" class="hero-logo img-fluid" style="width: 5%;margin-left: 0.5cm">
      <span class="fs-4 text-white" style="  margin-left: 0.25cm; font-family: 'Montserrat', sans-serif;">YAITEC Solutions</span>
    </a>
    <button class="navbar-toggler" type="button">
    </button>
    <ul class="nav nav-pills">
    <!-- <li class="nav-item"><a href="#" @click="scrollToTop" class="nav-link text-white">Home</a></li> -->
    <!-- <li class="nav-item"><router-link to="/blog" class="nav-link text-white">Blog</router-link></li>   -->
    <li class="nav-item"><a href="#projects" class="nav-link text-white nav-underline">Projetos</a></li>
    <li class="nav-item"><a href="#features" class="nav-link text-white nav-underline">Serviços</a></li>
    <li class="nav-item"><a href="#pricing" class="nav-link text-white nav-underline">Preços</a></li>
    <li class="nav-item"><button @click="openContactModal" class="btn btn-outline-info me-2">Contato</button></li>        
      </ul>
    </header>
</template>

<script>
  function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
export default {
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
    };
  },
  data() {
    return {
      // Your existing data properties...
      isContactModalOpen: false,
    };
  },

  mounted() {
    this.checkMobile();
    window.addEventListener('resize', debounce(this.checkMobile));
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    openContactModal() {
      this.isContactModalOpen = true;
    },
    closeContactModal() {
      this.isContactModalOpen = false;
    },
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
}
.fs-4 {
  font-size: 1rem; /* Use fixed size for testing */
}
.nav-link:hover {
    color: #ccc; /* Change color on hover */
    text-decoration: underline; /* Add underline on hover */
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0; /* This should ensure that the header extends all the way to the right edge */
  z-index: 1000;
  background-color: #000; /* Your preferred header background color */
}


  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
  .hero-logo {
    width: 50px; /* Adjust logo size for mobile */
    height: auto; /* Maintain aspect ratio */
  }
  .fs-4 {
    font-size: 16px; /* Adjust font size for mobile */
  }
  .nav-pills.show {
    display: flex; /* Show menu when toggled */
    flex-direction: column; /* Stack menu items vertically */
  }
  .navbar-toggler {
    display: inline-block; /* Show toggle button */
    border: none;
    background: none;
    cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
    margin-bottom: 10px;
  }
  .navbar-toggler-icon::before {
    content: '\2630'; /* Unicode character for the hamburger icon */
    font-size: 32px; /* Adjust size as needed */
    color: white; /* Adjust color as needed */
    display: inline-block; /* Ensure the icon is displayed */
  }
}

.nav-underline {
  text-decoration: underline;
}


.contact-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
