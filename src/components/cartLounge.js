export default function cartLounge(cardLoungeItem, index = 0){
    const{ path, title, text } = cardLoungeItem || {}


    const cardLounge = document.createElement('div');
    cardLounge.innerHTML = `

    <div class="card" style="width: 18rem; height: 20rem;">
        <img src="public/assets/imgs/${path}" style="height: 15rem;" class="card-img-top" alt="">
        <div class="btn-group dropup">
            <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false" style="border: none";>
                <img src="public/assets/imgs/caret-up-fill.svg" width="20" heigh="20">
                <h3 class="card-text" style="font-size: 1rem; font-family: "Lato", sans-serif; font-weight: 700;">${title}</h3>
            </button>
            <ul class="dropdown-menu" style="border-radius: 0.375rem 0.375rem 0 0;">
                <p class="card-text"style="text-align: center";>${text}</p>
            </ul>
        </div>
    </div>
    `;

    return cardLounge;

}