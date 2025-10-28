export default function Footer() {
  const footer = document.createElement("div");
  footer.innerHTML = `
  <footer class="text-center text-lg-start text-dark p-3 mt-5" 
    style="background: linear-gradient(135deg, #1a1919ff, #0e0d0cff); font-family: 'Poppins', sans-serif; color: #ffffff;">
    
    <style>
      footer, footer p, footer h6, footer a {
        color: #ffffff !important;
      }
      footer a:hover {
        color: #f4e1c1 !important;
        text-decoration: underline;
      }
    </style>

    <section>
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          
          <!-- Sobre -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4"><i class="fas fa-gem me-3"></i>Transilvânia</h6>
            <p>
              Sua jornada começa aqui. Encontre os melhores destinos, acomodações e experiências únicas.
            </p>
          </div>

          <!-- Serviços -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Serviços</h6>
            <p><a href="#!">Hotéis</a></p>
            <p><a href="#!">Pacotes</a></p>
            <p><a href="#!">Aluguel de carros</a></p>
            <p><a href="#!">Promoções</a></p>
          </div>

          <!-- Links úteis -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Links úteis</h6>
            <p><a href="#!">Sobre nós</a></p>
            <p><a href="#!">Ajuda</a></p>
            <p><a href="#!">Contato</a></p>
            <p><a href="#!">Política de privacidade</a></p>
          </div>

          <!-- Contato -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contato</h6>
            <p><i class="fas fa-home me-3"></i> São Paulo, Brasil</p>
            <p><i class="fas fa-envelope me-3"></i> contato@transilvania.com</p>
            <p><i class="fas fa-phone me-3"></i> +55 11 99999-9999</p>
            <p><i class="fas fa-print me-3"></i> +55 11 98888-8888</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class="d-flex justify-content-center gap-4 p-3 " style="background-color: rgba(0, 0, 0, 0.2);">
      <p>© 2025 Copyright</p>
      <a class="fw-bold" href="#"> transilvania.com</a>
    </div>
  </footer>
  `;
  return footer;
}
