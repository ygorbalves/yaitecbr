<template>
    <main class="global-background">

      <div v-if="isContactModalOpen" class="contact-modal">
    <div class="modal-content">
      <span class="close" @click="closeContactModal">&times;</span>
      <h1 style="color: black;">Entre em contato por Email: ygorbalves@yaitec.com  </h1>
      <br> <br>
      <h1><a href="https://wa.me/5583998643143" target="_blank">Ou clique aqui e envie uma mensagem agora no Whatsapp!</a></h1>
    </div>
  </div>
        <div class="pricing-intro">
          <h2>Nossos Preços</h2>
        </div>
    
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center section-margin">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Consultoria</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">R$299,90</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li> • Chamada de vídeo</li>
                  <li>• Plano do Projeto</li>
                  <li>• Tempo e custos estimados</li>
                  <li>• Orientação técnica para o desenvolvimento</li>
                  <li>• Garantia 100% de Reembolso</li>
                </ul>
                <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="openContactModal">Agendar Consultoria</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Chatbot Inteligente</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title"><small class="text-muted fw-light">Orçamento Personalizado</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>• Chatbot adaptado ao seu negócio</li>
                  <li>• Multicanais (Whatsapp, Website)</li>
                  <li>• Integração com as melhores IAs do mercado</li>
                  <li>• Suporte exclusivo</li>
                </ul>
                <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="openContactModal">Entrar em contato</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm ">
              <div class="card-header py-3 ">
                <h4 class="my-0 fw-normal">Projeto Completo</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title"><small class="text-muted fw-light">Orçamento Personalizado</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>• Projeto completo de IA</li>
                  <li>• Automação de processos internos</li>
                  <li>• Atendimento a clientes personalizados</li>
                  <li>• Projeto personalizado para seu Problema</li>
                </ul>
                <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="openContactModal">Entrar em contato</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
  
<script>
export default {

  data() {
    return {
      // Your existing data properties...
      isContactModalOpen: false,
    };
  },
  methods: {
    openContactModal() {
      this.isContactModalOpen = true;
    },
    closeContactModal() {
      this.isContactModalOpen = false;
    },
  }
}
</script>

<style scoped>  

.pricing-intro {
  text-align: center;
  color: white;
  padding: 20px 0; /* Adjust padding as needed */
  margin-bottom: 0; /* Remove bottom margin to eliminate space */
}

.pricing-intro h2 {
  margin-bottom: 0px; /* Adjust as needed */
}

.pricing-intro p {
  font-size: 1.2em;
  margin-bottom: 0; /* Remove bottom margin to eliminate space */
}
  .section-margin {
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 2rem); /* Adjust '2rem' to increase or decrease the margin */
  }
  
  /* Style adjustments for table to fit the global background */
  .table {
    background-color: transparent;
    color: white;
  }
  
  .bi {
    fill: white; /* Change the color of svg icons to white */
  }

  .row {
  display: flex;
  flex-wrap: wrap;
}
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-body {
  flex-grow: 1;
}

/* Responsive adjustments */
@media (max-width: 767px) { /* Adjust for mobile devices */
  .row-cols-1 > * {
    margin-bottom: 1rem; /* Add some space between cards */
  }
}

/* Ensure that the last card does not have a margin at the bottom */
.row-cols-1 > *:last-child {
  margin-bottom: 0;
}
.card {
  margin-bottom: 1rem; /* Adds spacing between cards */
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