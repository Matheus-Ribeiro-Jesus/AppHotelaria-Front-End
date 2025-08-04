export default function LoginForm(){

    // Campo email
    const formulario = document.createElement('form');
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
    entrar.className = "button-login";
    entrar.textContent = "Entrar";
    formulario.appendChild(entrar);

    return formulario;

}