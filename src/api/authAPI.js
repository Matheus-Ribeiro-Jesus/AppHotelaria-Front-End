export async function loginRequest(email, senha){
    const dados = {email, senha};
    const response = await fetch("api/login/cliente", {
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
    // Interpreta a resposta como json
    try{
        data = await response.json();

    }catch{
        // Se nao for json valido, data permanece null
        data = null;
    }
    
    if(!data || !data.token){
        const message = "Resposta invalida do servidor, Token invalido";
        return {ok: false, token: null, raw: data, message};
    }
    
    return {
        ok: true,
        token: data.token,
        raw: data
    };

}
    /* Função para salvar a chave token após autenticação confirmada, ao salvar
    no local storage, o usuario poderá mudar de pagina, fechar o site
    e ainda assim permanecer logado, DESDE QUE NAO TENHA EXPIRADO (1 HORA)*/
    export function saveToken(token){
        localStorage.setItem("auth_token", token);
        
    }

    /* Recuperar a chave a cada pagina que o usuario navegar*/

    export function getToken(){
        return localStorage.getItem("auth_token");
        
    }


    /*Função para remover a chave token quando usuario deslogar */

    export function clearToken(){
        localStorage.removeItem("auth_token");

    }