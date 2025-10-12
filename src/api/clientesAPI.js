export async function createRequest(nome, cpf, telefone, email, senha){
    const dados = { nome, cpf, telefone, email, senha };
    
    const response = await fetch("api/cliente", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados),
        // body: new URLSearchParams({ email, senha }).toString(),

        /* URL da rquisição é a mesma da origem do front (mesmo protocolo http/mesmo dominio - local/mesma porta 80 do servidor web Apache)
        Front: http://localhost/estudo_php/public/index.html
        Back: http://localhost/estudo_php/api/login.php
        */
       credentials: "same-origin"

    });

    let data = null;
    try{
        data = await response.json();

    }catch{
        data = null;
    }
    return{
        ok: true,
        raw: data
    };
}