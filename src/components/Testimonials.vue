<template>
  <div class="testimonial-intro">
    <h2>Depoimentos dos Clientes</h2>
    <p>Veja o que nossos clientes têm a dizer sobre nós e nossos serviços.</p>
  </div>
  <div class="testimonial-section">
    <div class="testimonial">
      <p class="testimonial-text" style="color: black;">"Ótimo trabalho em conjunto para resolver nosso problema. Capacidade técnica nas habilidades mais avançadas de IA, com Python, Langchain e Pinecone.""</p>
      <p class="testimonial-author">Equipe da Piovis Consulting - United Kingdom. (Tradução do Inglês). </p>
    </div>
    <div class="testimonial">
      <p class="testimonial-text" style="color: black;">"Muito obrigado pela consultoria. As habilidades e conhecimentos da equipe ajudaram a atingir nosso objetivo e estamos muito agradecidos!"</p>  
      <p class="testimonial-author"> David Potgieter - United States. (Tradução do Inglês).</p>
    </div>
    <div class="testimonial">
      <p class="testimonial-text" style="color: black;">"A comunicação foi ótima e o projeto foi finalizado com sucesso antes do prazo. Foram desenvolvidos vários modelos de IA que tiveram melhor desempenho do que trabalhos anteriores."</p>  
      <p class="testimonial-author"> Sakib - Emirados Árabes Unidos. (Tradução do Inglês).</p>
    </div>
    
  </div>
</template>
  
<style>
.testimonial-intro {
  text-align: center;
  color: white;
  color: white;
  background-image: linear-gradient(to right, #12191e, #12191e 70%, #12191e) !important; 
  padding: 20px 0;
  /* Adjust padding as needed */
  margin-bottom: 0;
  /* Remove bottom margin to eliminate space */
}

.testimonial-intro h2 {
  margin-bottom: 0px;
  /* Adjust as needed */
}

.testimonial-intro p {
  font-size: 1.2em;
  margin-bottom: 0;
  /* Remove bottom margin to eliminate space */
}

.testimonial-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  background-image: linear-gradient(to right, #12191e, #12191e 70%, #12191e) !important; 
  padding: 20px;
  /* Adjust as needed */
  margin-top: 0;
  /* Remove top margin to eliminate space */
}

.testimonial {
  background-color: white;
  color: black;
  /* Adjust text color inside the testimonial as needed */
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  flex: 1;
  min-width: 250px;
  /* Adjust as needed */
  max-width: 600px;
  /* Adjust as needed */
  text-align: center;
}

.testimonial-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.testimonial-text {
  font-style: italic;
}

.testimonial-author {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonial {
    flex-basis: 100%;
  }
}</style>