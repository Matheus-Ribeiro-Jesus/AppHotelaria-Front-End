/* getToken() é uma função que retorna o valor do token armazenado no localStorage(), para que o usuario permaneça logado mesmo que mude 
de pagina e nao tenha "re-logar" */

import { getToken } from "./authAPI";

// Listar todos os quartos independente de filtro 
export async function listRoomsRequest(){
    // Retorna o valor do token armazenado (que comprova a autenticação do usuario)
    const token = getToken();
    /* função para listar os quartos predcisa ser assincrona, pois espera-se uma "Promise" de que ao chamar
    o endpoint api/quartos (que rxecuta o arquivo quartos.php no qual
    contem todas as requisições posiveis)
    este arquivo conversa com a Controller que, por sua vez conversa com a Model (onde está a query SELECT) */

    const response = await fetch("api/quartos", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    });
}