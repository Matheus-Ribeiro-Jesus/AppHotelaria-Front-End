import LoginForm from "../components/loginForm.js";
import Navbar from "../components/menu.js";

export default function renderRegisterPage(){
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = LoginForm();

    const titulo = formulario.querySelector('h1');
    titulo.textContent = 'Cadastre-se';

    //selecione o elemento form que esta presente em Loginform
    const contentForm = formulario.querySelector('form');

    const nome = document.createElement('input');
    nome.type = 'text';
    nome.className = 'inputs';
    nome.placeholder = 'Digite seu nome';

    //Para aducuibar input nome ao contentform localizo onde esta input email pois quero necessariamente adicionar anteriormente a ele

    const inputEmail = formulario.querySelector('input[type="email"]');
    contentForm.insertBefore(nome, inputEmail);

    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = 'Confirme sua senha';
    confSenha.className = 'inputs';

    /* Adicionar confSenha como "chield" de contentForm que ja existe
        4 elementos: input nome[0], input email[1], input password[2],
        button btn[3], no momento que eu adicionar input confsenha ele ocupara a posição 3
    */
    contentForm.insertBefore(confSenha, contentForm.children[3]);


    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = 'Criar contar';
}