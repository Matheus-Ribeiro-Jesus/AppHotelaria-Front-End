import LoginForm from "../components/loginForm.js";
import Navbar from "../components/menu.js";

export default function renderLoginPage() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);
    
    const formulario = LoginForm();
    
}
