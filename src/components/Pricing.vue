<template>
    <main class="global-background">
        <div class="pricing-intro">
          <h2>Promoção por Tempo Limitado!</h2>
        </div>
    
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center section-margin">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Grátis</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">R$0<small class="text-muted fw-light">/mês</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 usuários inclusos</li>
                  <li>2 GB de armazenamento</li>
                  <li>Suporte por e-mail</li>
                  <li>Acesso ao centro de ajuda</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary">Inscreva-se Grátis</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Pro</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">R$15<small class="text-muted fw-light">/mês</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 usuários inclusos</li>
                  <li>10 GB de armazenamento</li>
                  <li>Suporte prioritário por e-mail</li>
                  <li>Acesso ao centro de ajuda</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">Comece Agora</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm ">
              <div class="card-header py-3 ">
                <h4 class="my-0 fw-normal">Empresarial</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">R$29<small class="text-muted fw-light">/mês</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 usuários inclusos</li>
                  <li>15 GB de armazenamento</li>
                  <li>Suporte por telefone e e-mail</li>
                  <li>Acesso ao centro de ajuda</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">Fale Conosco</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
  
  <style scoped>  

.pricing-intro {
  text-align: center;
  color: white;
  background-color: #0056b3;
  background-image: linear-gradient(to right, #091747, #0056b3);
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
  </style>