export default function LoginForm(){

    const DivRoot = document.getElementById('root');
    DivRoot.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg'; //Classe do bootstrap para criar um card
    container.style.width = '100%'; //Aplicando a largura de 100% na div container pra ocupar a tela toda
    container.style.maxWidth = '470px'; //Até que atinja o maximo de 400px
    container.style.height = '370px';
    container.style.border = 'none';
    container.style.backgroundColor = 'transparent';
    container.style.backdropFilter = 'blur(10px) brightness(0.8)';
    DivRoot.appendChild(container); //DivRoot contem a nova div

    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça o login ou crie uma conta';
    titulo.className = 'titulo';
    titulo.style.color = 'white';
    titulo.style.textAlign = 'center';
    
    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu email";
    email.className = 'inputs';
    formulario.appendChild(email);
    
    const senha = document.createElement('input');
    senha.type = 'senha';
    senha.placeholder = "Digite sua senha";
    senha.className = 'inputs';
    formulario.appendChild(senha);
    
    const entrar = document.createElement('button');
    entrar.type = 'submit';
    entrar.className = "btn btn-primary";
    entrar.textContent = "Entrar";
    
    formulario.appendChild(entrar);
    container.appendChild(titulo);
    container.appendChild(formulario);

    return DivRoot;


}