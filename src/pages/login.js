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
    
    // Inputs e botão presentes no form

    const email = contentForm.querySelector('input[type="email"]');
    const senha = contentForm.querySelector('input[type="senha"]');
    const btnEntrar = contentForm.querySelector('button[type="submit"]');

    // Monitora o clique no botão para acionar um evento de submeter os dados do form
    contentForm.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const emailValue = email.value.trim();
        const senhaValue = senha.value.trim();

        try {
            const result = await loginRequest(email, senha);
            console.log("login realizado com sucesso");

            // Redireciona para a página /home (correto seria entre aspas)
            // window.location.pathname = "/home";
        } catch {
            console.log("Erro Inesperado!");
        }
    });


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
