import LoginForm from "../components/loginForm.js";


export default function renderRegisterPage(){
        const divRoot = document.getElementById('root');
        divRoot.innerHTML = '';
        
        //Dentro da Div root terá a div container,  e em container estará o formulario
        
        const formulario = LoginForm();

        const titulo = document.createElement('h1');
        titulo.textContent = 'Crie uma conta';
        titulo.className = 'titulo';
        titulo.style.color = 'white';
        titulo.style.textAlign = 'center';
    
        const container = document.createElement('div');
        container.className = 'card p-4 shadow-lg'; //Classe do bootstrap para criar um card
        container.style.width = '100%'; //Aplicando a largura de 100% na div container pra ocupar a tela toda
        container.style.maxWidth = '470px'; //Até que atinja o maximo de 400px
        container.style.height = '370px';
        container.style.border = 'none';
        container.style.backgroundColor = 'transparent';
        container.style.backdropFilter = 'blur(10px) brightness(0.8)';
        divRoot.appendChild(container); //DivRoot contem a nova div

        const nome = document.createElement('input');
        nome.placeholder = 'Digite seu nome';
        nome.className = 'inputs'

        const btnRegister = formulario.querySelector('button');
        btnRegister.textContent = "Criar conta";

        const voltarLogin = document.createElement('button');
        voltarLogin.className = 'voltar';
        voltarLogin.textContent = 'Voltar ao Login';


        voltarLogin.addEventListener('click', () => {
            window.location.href = '../public/login.html';
        });

        document.body.appendChild(voltarLogin);

        container.appendChild(titulo);
        container.appendChild(nome);
        container.appendChild(formulario); 
        container.appendChild(voltarLogin);
}