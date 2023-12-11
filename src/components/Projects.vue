<template>

<div class="px-4 py-5 global-background">
    <h2 class="pb-2 border-bottom">Projetos desenvolvidos</h2>
  <div class="portfolio-sectionpx-4 py-5 global-background">
    <div class="row">
<!-- Card 1 -->
<div class="col-md-4">
    <!-- Card -->
    <div class="card hover-effect" @click="openModal('modalMarketingIA')">
        <img class="card-img" src="../assets/make-a-phone-call-5190643_1280.jpg" alt="Card image 1">
        <div class="card-hover-content">
            <span class="btn btn-outline-light btn-lg px-4">Saiba Mais</span>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
        <h3 class="card-title pricing-card-title" style="text-align: center;">IA no Marketing</h3>
        <div class="card-subtitle" style="text-align: center;">
            <p style="color: #777; font-size: 20px; margin-top: 5px;">
                Alavanque a conversão do seu time de vendas.
            </p>
        </div>
        <!-- Attach the same click event to the 'Saiba Mais' button -->
        <button class="saiba-mais-button btn btn-outline-light btn-lg px-4" style="margin-bottom: 15px; margin-top: 0;" @click="openModal('modalMarketingIA')">Saiba Mais</button>
    </div>

    <!-- Modal -->
    <div id="modalMarketingIA" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal('modalMarketingIA')">&times;</span>
            <h2 style="color: black;">IA no Marketing</h2>
            <p style="color: black;">Projeto que vai ser lançado em breve pro público que define persona, calendário de conteúdo, roteiro de vídeo e muito mais!!</p>
            <!-- <p style="color: black;">Some text about the IA no Marketing project...</p> -->
            <video controls>
                <source src="..\assets\202312111636.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</div>

<div class="col-md-4">
    <!-- Card -->
    <div class="card hover-effect" @click="openModal('modalChatbot')">
        <img class="card-img" src="../assets/whats.png" alt="Card image 2">
        <div class="card-hover-content">
            <span class="btn btn-outline-light btn-lg px-4">Saiba Mais</span>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
        <h3 class="card-title pricing-card-title" style="text-align: center;">Chatbot Inteligente</h3>
        <div class="card-subtitle" style="text-align: center;">
            <p style="color: #777; font-size: 20px; margin-top: 5px;">
                Chatbot adaptado ao seu negócio, multicanal (Whatsapp, Website), integrado com as melhores IAs do mercado.
            </p>
        </div>
        <!-- Attach the same click event to the 'Saiba Mais' button -->
        <button class="saiba-mais-button btn btn-outline-light btn-lg px-4" style="margin-bottom: 15px; margin-top: 0px;" @click="openModal('modalChatbot')">Saiba Mais</button>
    </div>

    <!-- Modal -->
    <div id="modalChatbot" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal('modalChatbot')">&times;</span>
            <h2 style="color: black;"> Chatbot Inteligente</h2>
            <p style="color: black;">Chatbot implementado no Whatsapp para atender clientes de um Hotel Airbnb em Paris.</p>
            <p style="color: black;">Ele consegue atender na maioria dos idiomas como pode ser visto na foto e responde baseado nas informações personalizadas do Hotel.</p>
              <p style="color: black;"> Do mesmo modo, essas informações podem ser suas para responder seus clientes!!</p>
            <!-- <p style="color: black;">Algum texto sobre o projeto de chatbot...</p> -->
            <!-- <video controls>
                <source src="..\assets\2021-11-21 15-06-52.mp4" type="video/mp4">
            </video> -->
            <!-- imagem -->
            <img src="..\assets\bnb.jpeg" alt="Chatbot" style="width: 100%; height: 100%;">
        </div>
    </div>
</div>

<div class="col-md-4">
    <!-- Card -->
    <div class="card hover-effect" @click="openModal('modalDataAnalysis')">
        <img class="card-img" src="../assets/sql.png" alt="Card image 3">
        <div class="card-hover-content">
            <span class="btn btn-outline-light btn-lg px-4">Saiba Mais</span>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
        <h3 class="card-title pricing-card-title" style="text-align: center;">Análise de Dados</h3>
        <div class="card-subtitle" style="text-align: center;">
            <p style="color: #777; font-size: 20px; margin-top: 5px;">
                Analise os dados do seu negócio utilizando Inteligência Artificial.
            </p>
        </div>
        <!-- Attach the same click event to the 'Saiba Mais' button -->
        <button class="saiba-mais-button btn btn-outline-light btn-lg px-4" style="margin-bottom: 15px; margin-top: 0;" @click="openModal('modalDataAnalysis')">Saiba Mais</button>
    </div>

    <!-- Modal -->
    <div id="modalDataAnalysis" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal('modalDataAnalysis')">&times;</span>
            <h2 style="color: black;">Análise de Dados - Banco de Dados SQL</h2>
            <p style="color: black;">Aplicativo que permite buscar informações contidas no banco de Dados SQL. </p>
            
            <!-- <p style="color: black;">Algum texto sobre o projeto de análise de dados...</p>
            <video controls>
                <source src="..\assets\2021-11-21 15-06-52.mp4" type="video/mp4">
            </video> -->
            <img src="..\assets\sql3.png" alt="Chatbot" style="width: 100%; height: 100%;">
        </div>
    </div>
</div>

<div class="col-md-4">
    <!-- Card -->
    <div class="card hover-effect" @click="openModal('modalDoctorAI')">
        <img class="card-img" src="../assets/doct.png" alt="Card image 4">
        <div class="card-hover-content">
            <span class="btn btn-outline-light btn-lg px-4">Saiba Mais</span>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
        <h3 class="card-title pricing-card-title" style="text-align: center;">Doutor IA</h3>
        <div class="card-subtitle" style="text-align: center;">
            <p style="color: #777; font-size: 20px; margin-top: 5px;">
              Seu assistente de IA especializado em saúde médica.
            </p>
        </div>
        <!-- Attach the same click event to the 'Saiba Mais' button -->
        <button class="saiba-mais-button btn btn-outline-light btn-lg px-4" style="margin-bottom: 15px; margin-top: 0;" @click="openModal('modalDoctorAI')">Saiba Mais</button>
    </div>

    <!-- Modal -->
    <div id="modalDoctorAI" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal('modalDoctorAI')">&times;</span>
            <h2 style="color: black;">Doutor IA</h2>
            <!-- <p style="color: black;">Descrição sobre como o Doutor IA pode auxiliar no campo da saúde médica</p> -->
            <video controls>
                <source src="..\assets\202312111718.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</div>

<div class="col-md-4">
    <!-- Card -->
    <div class="card hover-effect" @click="openModal('modalAIAgents')">
        <img class="card-img" src="../assets/agents.jpg" alt="Card image 5">
        <div class="card-hover-content">
            <span class="btn btn-outline-light btn-lg px-4">Saiba Mais</span>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
        <h3 class="card-title pricing-card-title" style="text-align: center;">Agentes de IA</h3>
        <div class="card-subtitle" style="text-align: center;">
            <p style="color: #777; font-size: 20px; margin-top: 5px;">
                Desenvolvimento de agentes personalizados para o seu negócio.
            </p>
        </div>
        <!-- Attach the same click event to the 'Saiba Mais' button -->
        <button class="saiba-mais-button btn btn-outline-light btn-lg px-4" style="margin-bottom: 15px; margin-top: 0;" @click="openModal('modalAIAgents')">Saiba Mais</button>
    </div>

    <!-- Modal -->
    <div id="modalAIAgents" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal('modalAIAgents')">&times;</span>
            <h2 style="color: black;">Agentes de IA</h2>
            <p style="color: black;">Exemplo de projeto e artigo implementado reunindo vários agentes de IA em um objetivo.</p>
            <a href="https://wa.me/5583998643143" target="_blank" rel="noopener noreferrer">
            <p style="color: black;">Clique aqui e envie uma mensagem aqui para receber o Link do Artigo.</p>
            </a>
            <!-- image -->
            <img src="..\assets\autogen.png" alt="Chatbot" style="width: 100%; height: 100%;">
            <!-- <video controls>
                <source src="..\assets\2021-11-21 15-06-52.mp4" type="video/mp4">
            </video> -->
        </div>
    </div>
</div>

<div class="col-md-4">
    <!-- Card -->
    <div class="card hover-effect" @click="openModal('modalAIAgriculture')">
        <img class="card-img" src="../assets/portal.png" alt="Card image 6">
        <div class="card-hover-content">
            <span class="btn btn-outline-light btn-lg px-4">Saiba Mais</span>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
        <h3 class="card-title pricing-card-title" style="text-align: center;">IA na agricultura</h3>
        <div class="card-subtitle" style="text-align: center;">
            <p style="color: #777; font-size: 20px; margin-top: 5px;">
                Inteligência Artificial especializada para o agronegócio.
            </p>
        </div>
        <!-- Attach the same click event to the 'Saiba Mais' button -->
        <button class="saiba-mais-button btn btn-outline-light btn-lg px-4" style="margin-bottom: 15px; margin-top: 0;" @click="openModal('modalAIAgriculture')">Saiba Mais</button>
    </div>

    <!-- Modal -->
    <div id="modalAIAgriculture" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal('modalAIAgriculture')">&times;</span>
            <h2 style="color: black;">IA na agricultura</h2>
            <p style="color: black;">Chatbot Inteligente especializado em agricultura inserido no Portal de Inovação e Tecnologia para Agricultura.</p>
            <video controls>
                <source src="..\assets\202312111715.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</div>


</div>
</div>
</div>

</template>

<script>
export default {
  name: 'Projects',

  mounted() {
    this.setupCardListeners();
  },

  methods: {
    setupCardListeners() {
      document.querySelectorAll('.hover-card').forEach(card => {
        card.addEventListener('click', () => {
          const hoverContent = card.querySelector('.card-hover-content');
          hoverContent.style.opacity = hoverContent.style.opacity === '1' ? '0' : '1';
        });
      });
    },

    openModal(modalId) {
      document.getElementById(modalId).style.display = 'block';
    },

    closeModal(modalId) {
  // Get the modal element
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';

  // Pause the video if it exists within the modal
  var video = modal.querySelector('video');
  if (video) {
    video.pause();
    
    // If you want to reset the video to the start when the modal closes
    video.currentTime = 0;
  }
}
  }
};
</script>

<style>

.card.hover-effect {
    position: relative;
    overflow: hidden;
}

.card-hover-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5); /* Semi-transparent white */
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card.hover-effect:hover .card-hover-content {
    opacity: 1;
}

.saiba-mais-button {
    display: none; /* Hide by default */
    margin-top: 20px; /* Space between the card and the button */
}

/* Desktop View */
@media (min-width: 768px) {
    /* Specific selector to ensure overriding of other styles */
    .col-md-4 .saiba-mais-button {
        display: none !important;
    }
}

/* Mobile View */
@media (max-width: 767px) {
    .col-md-4 .card-hover-content {
        display: none; /* Hide the hover content on mobile */
    }

    .col-md-4 .saiba-mais-button {
        display: block !important; /* Ensure the button is shown on mobile */
    }
}
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 80%;
    height: 80%;
    overflow: auto;
    background-color: rgb(0,0,0,0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 70%;
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

