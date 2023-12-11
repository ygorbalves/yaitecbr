<template>
  <footer class="footer global-background border-top ">
    <div class="container text-center text-md-left">
      <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
  <div style=" align-items: center;">
    <img src="../assets/logo.png" alt="YAITEC Logo" class="hero-logo img-fluid" style="width: 15%; margin-right: 10px;">
    <div>
      <a href="https://www.linkedin.com/in/ygor-alvess/" target="_blank" rel="noopener noreferrer">
      <p> CEO - Ygor Alves  <i class="bi bi-linkedin"></i> </p>
    </a>
    </div>
  </div>
</div>

        <hr class="clearfix w-100 d-md-none pb-3">

        <div class="col-md-3 mb-md-0 mb-3">
          <h5 class="text-uppercase">Contato</h5>
          <ul class="list-unstyled">
            <li>
              <i class="bi bi-mailbox2-flag" width="20" height="20" style="margin-right: 5px;"></i>
              <a href="mailto:ygorbalves@yaitec.com">ygorbalves@yaitec.com</a>
            </li>
            <li>
              <a href="https://wa.me/5583998643143" target="_blank" rel="noopener noreferrer">
                <!-- WhatsApp SVG icon -->
                <i class="bi bi-whatsapp" width="20" height="20" style="margin-right: 5px;"></i>
                (83) 99864-3143
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 mb-md-0 mb-3">
          <h5 class="text-uppercase">Redes Sociais</h5>
          <ul class="list-unstyled">
            <li>
              <a href="https://www.instagram.com/yaitec.br" target="_blank" rel="noopener noreferrer">
                <!-- Instagram SVG icon -->
                <i class="bi bi-instagram" width="20" height="20" style="margin-right: 5px;"></i>
                @yaitec.br
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/yaitec.br" target="_blank" rel="noopener noreferrer">
                <!-- Tiktok SVG icon -->
                <i class="bi bi-tiktok" width="20" height="20" style="margin-right: 5px;"></i>
                @yaitec.br
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<style scoped>
.footer {
  color: white;
  padding: 1rem 0;
  font-size: 0.9em;
}

.footer a {
  color: white;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.container {
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

/* Style for the logo and adjacent text */
.hero-logo {
  max-width: 100%; /* Ensure logo is always within the container */
  height: auto;
}

@media (max-width: 768px) {
  /* Center-align text for smaller screens */
  .text-md-left {
    text-align: center;
  }

  /* Align footer items centrally on small screens */
  .footer .row {
    text-align: center;
  }

  /* Add padding to headings for visual separation */
  .footer h5 {
    padding-top: 1rem;
  }

  /* Stack logo and text vertically on smaller screens */
  .footer .col-md-6 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Adjust logo size on smaller screens for better visibility */
  .hero-logo {
    width: 30%; /* Increase the size of the logo */
    margin-bottom: 10px; /* Add some space below the logo */
  }

  /* Ensure that the horizontal rule is visible and breaks sections clearly */
  .footer hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}

/* Additional media queries and styles can be added to further refine the responsive behavior */
</style>