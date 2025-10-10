import Hero from "../components/hero.js";
import Navbar from "../components/NavBar.js";
import Footer from "../components/footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAvaibleQuartosRequest } from "../api/roomsAPI.js";
import Spinner from "../components/spinner.js";
import modal from "../components/modal.js";

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
    //Impedindo datas passadas 

    const hoje = new Date().toISOString().split("T")[0]; // -> Converte a data para o formato padrão ISO / exemplo -> "2025-10-08T17:34:52.123Z" -> ".split("T")[0]" / Corta a string no “T” e pega só a parte da data ("2025-10-08").
    dateCheckIn.min = hoje;
    dateCheckOut.min = hoje;

    // impede check-out antes do check-in
    dateCheckIn.addEventListener("change", () =>{
        dateCheckOut = dateCheckIn.value;
        dateCheckOut.value = "";
    });

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
            const mod3 = modal({
                    title: "Aviso!",
                    message: "Preencha todos os campos"
                });
                const Modal = document.getElementById("modalAviso");
                if (Modal) Modal.remove();

                document.body.appendChild(mod3);

                // Inicializa e exibe o modal
                const bootstrapModal = new bootstrap.Modal(mod3);
                bootstrapModal.show();
                return;
        }

        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);

        if (isNaN(dtInicio) || isNaN(dtFim) || dtInicio >= dtFim) {
            const mod = modal({
                title: "Data inválida",
                message: "A data de check-out deve ser posterior à data de check-in."
            });

            const Modal = document.getElementById("modalAviso");
            if (Modal) Modal.remove();

            document.body.appendChild(mod);

            // Inicializa e exibe o modal
            const bootstrapModal = new bootstrap.Modal(mod);
            bootstrapModal.show();

            return;
        }

        divCards.innerHTML = "";
        const spi = Spinner();
        divCards.appendChild(spi);

        try{
            const quartos = await listAvaibleQuartosRequest({inicio, fim, qtd});
            spi.remove();
            if(!quartos.length){
                console.log("Nenhum quarto disponivel para esse periodo");

                const mod = modal({
                    title: "Aviso!",
                    message: "Nenhum quarto disponivel para esse periodo"
                });

                const mods = document.getElementById("modalAviso");
                if(mods) mods.remove();
                document.body.appendChild(mods);

                const bootstrapModal = new bootstrap.Modal(mods);
                bootstrapModal.show();
                return;
            }

            divCards.innerHTML = '';
            quartos.forEach((itemcard, i) => {
                divCards.appendChild(RoomCard(itemcard, i));
            })
        }
        catch(erro){
            console.log(erro);
            spi.remove();

        }
    });

    divRoot.appendChild(divCards);
    
    //Footer
    const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = Footer();
    fot.appendChild(footer);


    
}