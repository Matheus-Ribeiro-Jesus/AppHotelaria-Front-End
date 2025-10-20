export async function finishedOrder(items){
    const url = "api/pedido/reserva";
    const body = {
        // Por enquanto todos os pagamentos será por pix até termos um front para usuario setar pagamento que deseja
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

    if(!res.ok){
        const message = `Erro ao enviar pedido: ${res.status}`;
        throw new Error(message);

    }
    return res.json();
}