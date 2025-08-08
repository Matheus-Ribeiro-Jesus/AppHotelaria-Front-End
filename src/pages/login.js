import LoginForm from "../components/loginForm.js";

export default function renderLoginPage() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    //Dentro da Div root terá a div container,  e em container estará o formulario


    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça o login ou crie uma conta';
    titulo.className = 'titulo';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg'; //Classe do bootstrap para criar um card
    container.style.width = '100%'; //Aplicando a largura de 100% na div container pra ocupar a tela toda
    container.style.maxWidth = '450px'; //Até que atinja o maximo de 400px
    container.style.height = '350px';
    divRoot.appendChild(container); //DivRoot contem a nova div

    const formulario = LoginForm();
    container.appendChild(titulo)
    container.appendChild(formulario); 
    
}
