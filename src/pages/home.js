import Hero from "../components/hero.js";
import Navbar from "../components/menu.js";
import Footer from "../components/footer.js";
import RoomCard from "../components/RoomCard.js";

export default function renderHomePage() {

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const hero = Hero();
    divRoot.appendChild(hero);

    const cards = RoomCard();
    divRoot.appendChild(cards);
    

    const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = Footer();
    fot.appendChild(footer);


    
}