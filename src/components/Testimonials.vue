<template>
  <div class="testimonial-intro">
    <h2>Depoimentos de Clientes</h2>
    <p>Veja o que nossos clientes têm a dizer sobre nós e nossos serviços.</p>
  </div>
  <div class="testimonial-section">
    <div class="testimonial">
      <img src="../assets/john.png" alt="Client Photo" class="testimonial-image">
      <p class="testimonial-text" style="color: black;">"As ferramentas da YAITEC são incríveis! Acelerou muito o processo
        de criação de conteúdo para o meu negócio."</p>
      <p class="testimonial-author">- John Doe, CEO.</p>
    </div>
    <div class="testimonial">
      <img src="../assets/Jane.png" alt="Client Photo" class="testimonial-image">
      <p class="testimonial-text" style="color: black;">"YAITEC é demais! Recomendo muito!!"</p>
      <p class="testimonial-author">- Jane Smith, Digital Influencer.</p>
    </div>
    <!-- Add more testimonials as needed -->
  </div>
</template>
  
<style>
.testimonial-intro {
  text-align: center;
  color: white;
  background-color: #0056b3;
  background-image: linear-gradient(to right, #091747, #0056b3);
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
  background-color: #0056b3;
  background-image: linear-gradient(to right, #091747, #0056b3);
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
