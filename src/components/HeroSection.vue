<template>
  <div class="px-4 py-5 global-background" style="margin-top: 30px;">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8 py-5">
        <h1 class="display-9 fw-bold lh-1 mb-3 text-center">Bem vindo à YAITEC</h1>
        <p class="lead text-secondary text-center">Ajudamos nossos clientes a construir soluções com IA, mantendo-os um passo à frente da concorrência. </p>
        <p class="lead text-secondary text-center">Com o avanço da IA em todos os setores a um ritmo acelerado, aqueles que a utilizam têm a oportunidade de estar a frente.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <!-- <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Comece agora</button> -->
          <button type="button" class="btn btn-outline-light btn-lg px-4" @click="scrollToProjects">Saiba mais</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>

<script>
export default {
    // ... other parts of your script ...

    methods: {
        // Method to scroll to the projects section
        scrollToProjects() {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
};
</script>