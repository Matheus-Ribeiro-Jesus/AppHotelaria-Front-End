import { addItemToCart } from '../store/cartStore.js';

function calculoDiaria(checkIn, checkOut) {
    // const checkIn = "2026-01-01";
    // const checkOut = "2026-01-08";

    const [yin, min, din] = String(checkIn).split("-").map(Number);
    const [yout, mout, dout] = String(checkOut).split("-").map(Number);

    const tzin = Date.UTC(yin, min -1, din);
    const tzout = Date.UTC(yout, mout -1, dout);
    return Math.floor((tzout - tzin) / (1000 * 60 * 60 * 24) );

}


export default function RoomCard(itemcard, index = 0) {
  const { id, nome, numero, qtd_cama_casal, qtd_cama_solteiro, preco } = itemcard || {};
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
                    ${preco != null ? `<li>Preço diaria: R$ ${Number(preco).toFixed(2)}</li>` : ""}
                </ul>

                <a href="#" class="btn btn-primary btn-reservar">Reservar</a>
             </div>
        </div>
  `;

  containerCards.querySelector(".btn-reservar").addEventListener('click', (e) => {
    e.preventDefault();

    // Ler informações setadas nos inputs dateChekcin , dateCheckout e guestAmount (seu)

    const idDateCheckin = document.getElementsById('id-dateCheckIn');
    const idDateCheckOut = document.getElementsById('id-dateCheckOut');
    const idguestAmount = document.getElementsById('id-guestAmount');

    const inicio = (idDateCheckin?.valiue || "");
    const fim = (idDateCheckOut?.value || "");
    const qtd = parseInt(idguestAmount?.value || "0", 10);
    if(!inicio || !fim || Number.isNaN(qtd) || qtd <= 0){
        console.log("Preencha todos os campos");
        return;

    }
    const dailty = calculoDiaria(inicio, fim);

    const subtotal = parseFloat(preco) * dailty;
    console.log(subtotal);

    const novoItemReserva = {
        id,
        checkIn: inicio,
        checkOut: fim,
        guests: qtd,
        daily,
        subtotal
    }
  });


  addItemToCart(novoItemReserva);
  alert(`Reserva do quarto adicionada: ${nome} - Preço/Diaria: R$ ${preco} - Numero de diarias: ${dailty} - Subtotal: R$ ${subtotal} `);
  
  


  console.log(calculoDiaria());
  return containerCards;
}
