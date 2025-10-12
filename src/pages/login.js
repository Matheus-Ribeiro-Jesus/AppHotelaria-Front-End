import LoginForm from "../components/loginForm.js";
import Navbar from "../components/NavBar.js";
import Footer from "../components/footer.js";
import { loginRequest, saveToken } from "../api/authAPI.js";
export default function renderLoginPage() {
    

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);
    

    const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = Footer();
    fot.appendChild(footer);


    const formulario = LoginForm();
    //selecione o elemento form que esta presente em Loginform
    const contentForm = formulario.querySelector('form');
    
    // Inputs e botão presentes no form

    const email = contentForm.querySelector('input[type="email"]');
    const senha = contentForm.querySelector('input[type="password"]');
    const btnEntrar = contentForm.querySelector('button[type="submit"]');

    // Monitora o clique no botão para acionar um evento de submeter os dados do form
    contentForm.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const emailValue = email.value.trim();
        const senhaValue = senha.value.trim();
        try {
            const result = await loginRequest(emailValue, senhaValue);
            if (result.ok){
                console.log("login realizado com sucesso", result);
                saveToken(result.token);

                let tipoDoUsuario = "cliente";
                if(result.raw?.tipo === "funcionario" || result.raw?.role === "admin"){
                    tipoDoUsuario = "funcionario";
                
                }
                localStorage.setItem("tipo_usuario", tipoDoUsuario);

                if(tipoDoUsuario === "funcioanario"){
                    console.log("Usuario é funcionario redirecionando.");
                }else{
                    console.log("Usuario é cliente redirecionando.")
                    window.location.pathname = "home";
                }

            }else{
                console.log('login invalido!');
            }
        } catch {
            console.log("Erro Inesperado!");
        }
    });

    const campo = document.querySelector(".carrinho");
    if(campo) campo.remove();

    const cadastrarSe = document.createElement('div');
    cadastrarSe.className = 'registerContainer';

    const texto = document.createElement('span');
    texto.textContent = 'Ainda não tem uma conta? ';

    const criarConta = document.createElement('a');
    criarConta.href = 'register';
    criarConta.className = 'registerButton';
    criarConta.textContent = 'Criar Conta'; 

    cadastrarSe.appendChild(texto);
    cadastrarSe.appendChild(criarConta);

    contentForm.insertBefore(cadastrarSe, contentForm.children[3]);


    
}
