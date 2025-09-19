import Hero from "../components/hero.js";
import Navbar from "../components/NavBar.js";
import Footer from "../components/footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";

export default function renderHomePage() {

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);
    
    
    const hero = Hero();
    divRoot.appendChild(hero);
    
    

    const datePesquisar = DateSelector;
    divRoot.appendChild(datePesquisar);
    
    //Criando um grupo para incorporar cada div de cada card, para aplicar display-flex
    const divCards = document.createElement('div');
    divCards.innerHTML = '';
    divCards.className = "cards";

    for (var i = 0; i < 3; i++) {
        const card = RoomCard(i); 
        divCards.appendChild(card);
    }


    divRoot.appendChild(divCards);

    
    //Footer
    const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = Footer();
    fot.appendChild(footer);


    
}