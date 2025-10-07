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

    const [dateCheckIn, dateCheckOut] = datePesquisar.querySelectorAll('input[type="date"]');
    const guestAmount = datePesquisar.querySelector('select');

    const btnSearchRoom = datePesquisar.querySelector('button');

    const divCards = document.createElement('div');
    divCards.innerHTML = '';
    divCards.className = "cards";
    divCards.id = "cards-result";








    

    btnSearchRoom.addEventListener("click", async (evento) =>{
        evento.preventDefault();
        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckOut?.value || "").trim();
        const qtd = parseInt(guestAmount?.value || "0", 10);

        if(!inicio || !fim || Number.isNaN(qtd) || qtd <= 0){
            console.log("Preencha todos os campos");
            /* Tarefa 1: Renderizar nesse if() posteriormente um modal do boostrap */
            return;
        }

        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);

        if(isNaN(dtInicio) || isNaN(dtFim) || dtInicio >= dtFim){
            console.log("A data de check-out deve ser posterior a data de check-in");
            /* Tarefa 2:  */
            /* https://getbootstrap.com/docs/5.3/components/modal/ */
            return;
        }

        console.log("Buscando quartos disponiveis");
        /* Tarefa 3: Renderizar na tela um simbolo de loading (spinner de bootstrap)  */

        /* https://getbootstrap.com/docs/5.3/components/spinners/ */

        try{
            const quartos = await listAvaibleQuartosRequest({inicio, fim, qtd});
            if(!quartos.length){
                console.log("Nenhum quarto disponivel para esse periodo");
                /* Tarefa 4: Renderizar na tela um modal */

                /* https://getbootstrap.com/docs/5.3/components/modal/ */
                return;
            }
            divCards.innerHTML = '';
            quartos.forEach((itemcard, i) => {
                divCards.appendChild(RoomCard(itemcard, i));
            })
        }
        catch(erro){
            console.log(erro);
        }
    });

    divRoot.appendChild(divCards);
    
    //Footer
    const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = Footer();
    fot.appendChild(footer);


    
}