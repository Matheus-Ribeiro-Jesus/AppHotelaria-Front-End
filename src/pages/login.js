import LoginForm from "../components/loginForm.js";
import Navbar from "../components/menu.js";

export default function renderLoginPage() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);
    
    const formulario = LoginForm();

    //selecione o elemento form que esta presente em Loginform
    const contentForm = formulario.querySelector('form');
    
    const criarConta = document.createElement('a');
    criarConta.href = '#/register';
    criarConta.className = 'registerButton';
    criarConta.textContent = 'Criar Conta';

    contentForm.insertBefore(criarConta, contentForm.children[3]);
    
}
