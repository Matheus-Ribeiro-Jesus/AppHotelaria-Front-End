import LoginForm from "../components/loginForm.js";
import Navbar from "../components/NavBar.js";
import Footer from "../components/footer.js";
import { createRequest } from "../api/clientesAPI.js";

export default function renderRegisterPage(){
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    document.body.style.background = "url('public/assets/imgs/background2.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";


    const navbar = Navbar();
    nav.appendChild(navbar);

    const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = Footer();
    fot.appendChild(footer);


    const formulario = LoginForm();
    const titulo = formulario.querySelector('h1');
    titulo.textContent = 'Cadastre-se';

    const contentForm = formulario.querySelector('form');
    
    const InputNome = document.createElement('input');
    InputNome.type = 'text';
    InputNome.className = 'inputs';
    InputNome.style.textAlign = 'left';
    InputNome.placeholder = 'Digite seu nome';

    const InputCpf = document.createElement('input');
    InputCpf.type = 'text';
    InputCpf.className = 'inputs';
    InputCpf.style.textAlign = 'left';
    InputCpf.placeholder = 'Digite seu CPF';

    
    const InputTelefone = document.createElement('input');
    InputTelefone.type = 'text';
    InputTelefone.className = 'inputs';
    InputTelefone.style.textAlign = 'left';
    InputTelefone.placeholder = 'Digite seu telefone';

    const inputEmail = formulario.querySelector('input[type="email"]');
    
    const InputSenha = formulario.querySelector('input[type="password"]');
     
    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = 'Confirme sua senha';
    confSenha.style.textAlign = 'left';
    confSenha.className = 'inputs';


    const campo = document.querySelector(".carrinho");
    if(campo) campo.remove();
   
    contentForm.insertBefore(InputNome, contentForm.children[0]);
    contentForm.insertBefore(InputCpf, contentForm.children[1]);
    contentForm.insertBefore(InputTelefone, contentForm.children[2]);
    contentForm.insertBefore(confSenha, contentForm.children[5]);
    

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = 'Criar conta';
    btnRegister.className = 'btn-css';

    contentForm.addEventListener("submit", async (event) =>{
        event.preventDefault();

        const nome = InputNome.value.trim();
        const cpf = InputCpf.value.trim();
        const telefone = InputTelefone.value.trim();
        const email = inputEmail.value.trim();
        const senha = InputSenha.value.trim();
      
        try{
            const result = createRequest(nome, cpf, telefone, email, senha);
        }catch{
            console.log("Erro inesperado");
        }
    });
}