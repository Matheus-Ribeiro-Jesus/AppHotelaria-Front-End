export async function loginRequest(email, senha){
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: new URLSearchParams({ email, senha }).toString(),

        /* URL da rquisição é a mesma da origem do front (mesmo protocolo http/mesmo dominio - local/mesma porta 80 do servidor web Apache)
        Front: http://localhost/estudo_php/public/index.html
        Back: http://localhost/estudo_php/api/login.php
        */
       credentials: "same-origin"

    }); 

    let data = null;
    // Interpreta a resposta como json
    try{
        data = await response.json();

    }catch{
        // Se nao for json valido, data permanece null
        data = null;
    }
    
    return {
        ok: true,
        user: data.user ?? null,
        raw: data
    };
    
}
