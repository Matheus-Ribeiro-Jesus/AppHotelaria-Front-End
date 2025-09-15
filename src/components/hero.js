export default function Hero() {
  const containerHero = document.createElement("div");
  containerHero.className = "heroContainer w-100 d-flex justify-content-center";
  containerHero.innerHTML = `
    
<div class = "heroContainer-frame w-100">
    <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</div>`;
  return containerHero;
}
