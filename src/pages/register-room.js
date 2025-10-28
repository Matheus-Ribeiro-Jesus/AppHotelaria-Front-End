import FormRoom from "../components/FormRoom.js";
import Navbar from "../components/NavBar.js";
import Footer from "../components/footer.js";

export default function RenderRegisterRoom() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    FormRoom();

        
    document.body.style.background = "url('public/assets/imgs/background2.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    
    const campo = document.querySelector(".carrinho");
    if(campo) campo.remove();


    const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = Footer();
    fot.appendChild(footer);






    

}   
