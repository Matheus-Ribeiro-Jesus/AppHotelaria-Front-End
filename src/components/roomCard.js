export default function RoomCard(itemcard, index = 0) {
  const { nome, numero, qtd_cama_casal, qtd_cama_solteiro, preco } = itemcard || {};
  const title = nome;

  const camas = [
    (qtd_cama_casal != null ? `${qtd_cama_casal} camas de casal` : null),
    (qtd_cama_solteiro != null ? `${qtd_cama_solteiro} camas de solteiro` : null),
  ].filter(Boolean).join(' - ');

  const containerCards = document.createElement("div");
  containerCards.className = "heroContainer-frame";
  containerCards.innerHTML = `
    <div class="card" style="width: 18rem;">

        <div id="carouselExampleIndicators-${index}" class="carousel slide">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner shadow">

                <div class="carousel-item active">
                    <img class="d-block w-100" src="public/assets/imgs/images2.jpg" alt="First slide">
                </div>

                <div class="carousel-item">
                    <img class="d-block w-100" src="public/assets/imgs/images2.jpg" alt="Second slide">
                </div>

                <div class="carousel-item">
                    <img class="d-block w-100" src="public/assets/imgs/images3.jpg" alt="Third slide">
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="next">
                <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                
                <ul class="list-unstyled mb-2">
                    ${camas? `<li>${camas}</li>` : ""}
                    ${preco != null ? `<li>Preco: R$ ${Number(preco).toFixed(2)}</li>` : ""}
                </ul>

                <a href="#" class="btn btn-primary">Reservar</a>
             </div>
        </div>
  `;
  return containerCards;
}
