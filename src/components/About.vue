<template>
    <div class="about-container">
      <section class="company-details">
        <h2>Sobre a YAITEC</h2>
        <p>Detalhes da empresa...</p>
      </section>
  
      <section class="founder-info">
        <h2>Fundador</h2>
        <img src="../assets/ygorpic.png" alt="Foto do Fundador" class="founder-photo">
        <p>Historia do fundador...</p>
      </section>
  
      <section class="projects">
        <h2>Projetos</h2>
        <p>Detalhes dos projetos...</p>
      </section>
  
      <section class="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Habilidade 1</li>
          <li>Habilidade 2</li>
          <!-- Adicione mais habilidades conforme necessário -->
        </ul>
      </section>
  
      <section class="contact">
        <h2>Contato</h2>
        <button @click="contactUs" class="btn btn-primary">Entre em Contato</button>
      </section>
    </div>
</template>


<script>

export default {
  methods: {
      contactUs() {
        // Logica para abrir o formulário de contato ou redirecionar para a página de contato
      }
    }
}
</script>
  
<style scoped>
  
  .company-details, .founder-info, .projects, .skills, .contact {
    margin-bottom: 20px;
    /* Adicione mais estilos conforme necessário */
  }
  
  .founder-photo {
    width: 100%;
    max-width: 300px;
    height: auto;
    /* Adicione mais estilos conforme necessário */
  }
  </style>