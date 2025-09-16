export default function RoomCard() {
  const containerCards = document.createElement("div");
  containerCards.className = "room-card-container";
  containerCards.innerHTML = `
    <div class="card" style="width: 18rem;">

        <div id="carouselExampleIndicators-RoomCards" class="carousel slide">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators-RoomCards" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators-RoomCards" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators-RoomCards" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-RoomCards" data-bs-slide="prev">
                <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-RoomCards" data-bs-slide="next">
                <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
        </div>
  `;
  return containerCards;
}
