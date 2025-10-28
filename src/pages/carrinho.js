import Navbar from "../components/NavBar.js";
import quartosInformacoes from "../components/quartosInformacoes.js";

export default function RenderCarrinhoPage(){
    
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.gap = '8px';

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);
    
    const informacoes = quartosInformacoes();
    divRoot.appendChild(informacoes);



}