import LoginForm from "../components/loginForm.js";

export default function renderLoginPage() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    //Dentro da Div root terá a div container,  e em container estará o formulario

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg'; //Classe do bootstrap para criar um card
    container.style.width = '100%'; //Aplicando a largura de 100% na div container pra ocupar a tela toda
    container.style.maxWidth = '400px'; //Até que atinja o maximo de 400px
    container.style.height = '250px';
    divRoot.appendChild(container); //DivRoot contem a nova div

    const formulario = LoginForm();
    container.appendChild(formulario); 
    
}
