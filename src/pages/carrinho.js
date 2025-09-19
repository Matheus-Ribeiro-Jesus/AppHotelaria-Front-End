import Navbar from "../components/NavBar.js";

export default function RenderCarrinhoPage(){
    
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

}