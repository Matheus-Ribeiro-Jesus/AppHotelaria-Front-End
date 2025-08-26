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
    
    const cadastrarSe = document.createElement('div');
    cadastrarSe.className = 'registerContainer';

    const texto = document.createElement('span');
    texto.textContent = 'Ainda não tem uma conta? ';

    const criarConta = document.createElement('a');
    criarConta.href = '#/register';
    criarConta.className = 'registerButton';
    criarConta.textContent = 'Criar Conta';

    cadastrarSe.appendChild(texto);
    cadastrarSe.appendChild(criarConta);

    contentForm.insertBefore(cadastrarSe, contentForm.children[3]);


    
}
