export async function finishedOrder(items){
    const url = "api/pedido/reserva";
    const body = {
        // Por enquanto todos os pagamentos será por pix até termos um front para usuario setar pagamento que deseja
        cliente_id: 5,
        pagamento: "pix",
        quartos: items.map(it => (
            {
                id: it.quartosId,
                inicio: it.checkIn,
                fim: it.checkOut
            }
        ))
    };

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "apllication/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(body)
    });

    let data = null;
    try{
        data = await res.json();
    }catch{ data = null; }

    if(!data){
        const message = `Erro ao enviar pedido: ${res.status}`;
        return { ok: false, raw: data, message };
    }
    return{
        ok: true,
        raw: data
    }

}