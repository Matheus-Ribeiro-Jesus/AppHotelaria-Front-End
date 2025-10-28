import Hero from "../components/hero.js";
import Navbar from "../components/NavBar.js";
import Footer from "../components/footer.js";
import RoomCard from "../components/roomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAvaibleQuartosRequest } from "../api/roomsAPI.js";
import Spinner from "../components/spinner.js";
import modal from "../components/modal.js";  
import cartLounge from "../components/cartLounge.js";

export default function renderHomePage() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    nav.appendChild(Navbar());

        
    // document.body.style.background = "url('public/assets/imgs/teste.jpeg') no-repeat center center fixed";
    // document.body.style.backgroundSize = "cover";

    divRoot.appendChild(Hero());

    const datePesquisar = DateSelector();
    divRoot.appendChild(datePesquisar);

    const [dateCheckIn, dateCheckOut] = datePesquisar.querySelectorAll('input[type="date"]'); 
    const guestAmount = datePesquisar.querySelector('select');
    const btnSearchRoom = datePesquisar.querySelector('button');

    guestAmount.id = 'id-guestAmount';
    dateCheckIn.id = 'id-dateCheckIn';
    dateCheckOut.id = 'id-dateCheckOut';

    const hoje = new Date().toISOString().split("T")[0];
    dateCheckIn.min = hoje;
    dateCheckOut.min = hoje;

    const divCards = document.createElement('div');
    divCards.className = "cards";
    divCards.id = "cards-result";

    const cardsGroupInfra = document.createElement('div');
    cardsGroupInfra.className = "cards";

    const tituloInfra = document.createElement('h2');
    tituloInfra.textContent = 'Conheça nosso hotel';
    tituloInfra.style.fontWeight = 'bold';
    tituloInfra.style.color = 'black';
    tituloInfra.style.textAlign = 'center';

    const loungeItems = [
        { path: "varanda.jpg", title: "Restaurante", text: "Nosso restaurante é o melhor que tem na cidade." },
        { path: "spa.avif", title: "SPA", text: "Nosso SPA oferece tudo que você precisa para relaxar." },
        { path: "bar.jpg", title: "Bar", text: "Bebidas geladas e refrescantes com show ao vivo." },
    ];

    loungeItems.forEach((item, i) => {
        cardsGroupInfra.appendChild(cartLounge(item, i));
    });

    function getMinDateCheckout(dateCheckIn) {
        const minDaily = new Date(dateCheckIn);
        minDaily.setDate(minDaily.getDate() + 1);
        return minDaily.toISOString().split('T')[0];
    }

    dateCheckIn.addEventListener('change', () => {
        if (dateCheckIn.value) {
            const minDateCheckout = getMinDateCheckout(dateCheckIn.value);
            dateCheckOut.min = minDateCheckout;

            if (dateCheckOut.value && new Date(dateCheckOut.value) <= new Date(dateCheckIn.value)) {
                dateCheckOut.value = "";
                const modal2 = modal({
                    title: "Erro",
                    message: "A data de check-out deve ser posterior à data de check-in."
                });

                const exist = document.getElementById('modalAviso');
                if(exist) exist.remove();

                document.body.appendChild(modal2);
                new bootstrap.Modal(modal2).show();
                return;
            }
        }
    });

    btnSearchRoom.addEventListener("click", async (evento) => {
        evento.preventDefault();

        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckOut?.value || "").trim();
        const qtd = parseInt(guestAmount?.value || "0", 10);

        if (!inicio || !fim || Number.isNaN(qtd) || qtd <= 0) {
            const mod = modal({
                title: "Aviso!",
                message: "Por favor, preencha todos os campos."
            });

            const modalExistente = document.getElementById("modalAviso");
            if (modalExistente) modalExistente.remove();
            document.body.appendChild(mod);
            new bootstrap.Modal(mod).show();
            return;
        }

        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);

        if (isNaN(dtInicio) || isNaN(dtFim) || dtInicio >= dtFim) {
            const mod = modal({
                title: "Data inválida",
                message: "A data de check-out deve ser posterior à data de check-in."
            });

            const modalExistente = document.getElementById("modalAviso");
            if (modalExistente) modalExistente.remove();

            document.body.appendChild(mod);
            new bootstrap.Modal(mod).show();
            return;
        }

        divCards.innerHTML = "";
        const spi = Spinner();
        divCards.appendChild(spi);

        try {
            const quartos = await listAvaibleQuartosRequest({ inicio, fim, qtd });
            spi.remove();

            if (!quartos.length) {
                const mod = modal({
                    title: "Aviso!",
                    message: "Nenhum quarto disponível para esse período."
                });

                const modalExistente = document.getElementById("modalAviso");
                if (modalExistente) modalExistente.remove();

                document.body.appendChild(mod);
                new bootstrap.Modal(mod).show();
                return;
            }

            divCards.innerHTML = '';
            quartos.forEach((itemcard, i) => {
                divCards.appendChild(RoomCard(itemcard, i));
            });

        } catch (erro) {
            console.error("Erro ao listar quartos:", erro);
            spi.remove();

            const mod = modal({
                title: "Erro",
                message: "Ocorreu um erro ao buscar os quartos. Tente novamente."
            });

            const modalExistente = document.getElementById("modalAviso");
            if (modalExistente) modalExistente.remove();

            document.body.appendChild(mod);
            new bootstrap.Modal(mod).show();
        }
    });

    divRoot.appendChild(divCards);
    divRoot.appendChild(tituloInfra);
    divRoot.appendChild(cardsGroupInfra);

    const fot = document.getElementById('footer');
    fot.innerHTML = '';
    fot.appendChild(Footer());
}
