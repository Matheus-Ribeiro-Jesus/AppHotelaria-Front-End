import { getToken } from "./authAPI.js";

export async function finishedOrder(item, metodoPagamento){
    const url = "api/pedido/reserva";
    const body = {
        pagamento: metodoPagamento,
        quartos: item.map(item => (
            {
                id: item.id,
                inicio: item.checkIn,
                fim: item.checkOut
            }
        ))
    };

    const token = getToken?.();


    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "apllication/json",
            "Authorization": `Bearer ${token}`
        },
        credentials: "same-origin",
        body: JSON.stringify(body)
    });

    let data = null;
    try{
        data = await res.json();
    }catch{ data = null; }

    if(!res.ok){
        const message = `Erro ao enviar pedido: ${res.status}`;
        return { ok: false, raw: data, message };
    }
    return{
        ok: true,
        raw: data
    }

}