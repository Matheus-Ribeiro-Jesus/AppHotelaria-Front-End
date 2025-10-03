import Hero from "../components/hero.js";
import Navbar from "../components/NavBar.js";
import Footer from "../components/footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAvaibleQuartosRequest } from "../api/roomsAPI.js";

export default function renderHomePage() {

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);
    
    
    const hero = Hero();
    divRoot.appendChild(hero);


    const datePesquisar = DateSelector();
    divRoot.appendChild(datePesquisar);

    const btnSearchRoom = datePesquisar.querySelector('button');

    btnSearchRoom.addEventListener("click", async (evento) =>{
        evento.preventDefault();
        const inicio = "2025-10-05";
        const fim = "2025-12-30";
        const qtd = 2;
        try{
            const quartos = await listAvaibleQuartosRequest({inicio, fim, qtd});
            //Após intervalo: prencher as infos dos quartos nos cards ou avisar ao cliente que nao há quarto disponivel
        }catch(erro){
            console.log(erro);
        }

    });


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