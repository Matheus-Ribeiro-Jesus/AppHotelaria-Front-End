import barraCategoria from "../components/barraCategoria.js";
import Navbar from "../components/NavBar.js";
import quartosInformacoes from "../components/quartosInformacoes.js";
import compoReservar from "../components/compoReservar.js";

export default function RenderCarrinhoPage(){
    
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.gap = '8px';

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const categorias = barraCategoria();
    divRoot.appendChild(categorias);

    for(var i=0; i<3; i++){
        const informacoes = quartosInformacoes();
        divRoot.appendChild(informacoes);
    };

    const barraReservar = compoReservar();
    divRoot.appendChild(barraReservar);
    


}