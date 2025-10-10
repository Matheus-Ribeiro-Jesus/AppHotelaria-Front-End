export default function LoginForm() {
    const DivRoot = document.getElementById('root');
    DivRoot.innerHTML = '';
    DivRoot.style.alignItems = 'center';
    DivRoot.style.height = '100vh'

    // Container principal (card)

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg d-flex flex-row'; 
    container.style.width = '100%';
    container.style.maxWidth = '900px'; 
    container.style.height = '500px';
    container.style.border = 'none';
    container.style.backgroundColor = '#ffffff';
    container.style.backdropFilter = 'blur(10px) brightness(0.8)';

    container.style.margin = '0 auto'; // Centraliza o card

    // Lado esquerdo (imagem)

    const leftSide = document.createElement('div');
    leftSide.className = 'left-side d-flex align-items-center justify-content-center';
    leftSide.style.width = '57%';
    leftSide.style.backgroundImage = 'url("public/assets/imgs/LeftSide.jpg")';
    leftSide.style.backgroundSize = 'cover';
    leftSide.style.backgroundPosition = 'center';
    leftSide.style.borderRadius = '10px 0 0 10px';

    // Lado direito (formulário)

    const rightSide = document.createElement('div');
    rightSide.className = 'right-side p-4 d-flex flex-column justify-content-center';
    rightSide.style.width = '50%';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Login';
    titulo.className = 'titulo mb-4';
    titulo.style.color = 'black';
    titulo.style.textAlign = 'center';

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu email";
    email.className = 'inputs';
    email.style.textAlign = 'center';
    formulario.appendChild(email);


    const senha = document.createElement('input');
    senha.type = 'password';
    senha.placeholder = "Digite sua senha";
    senha.className = 'inputs';
    senha.style.textAlign = 'center';
    formulario.appendChild(senha);

    const entrar = document.createElement('button');
    entrar.type = 'submit';
    entrar.className = "btn btn-primary";
    entrar.textContent = "Entrar";

    formulario.appendChild(entrar);

    // Montando a hierarquia

    rightSide.appendChild(titulo);
    rightSide.appendChild(formulario);

    container.appendChild(leftSide);
    container.appendChild(rightSide);

    DivRoot.appendChild(container);

    return DivRoot;
}
