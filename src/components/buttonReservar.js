
export default function buttonReservar() {
    // Div Grandona

    const divPrincipal = document.createElement('div');
    divPrincipal.className = 'divPrincipal';
    divPrincipal.style.backgroundColor = '#dfdfdfff'; 
    divPrincipal.style.padding = '20px 30px';
    divPrincipal.style.display = 'flex';
    divPrincipal.style.marginLeft = '100px';
    divPrincipal.style.marginTop = '10px';
    divPrincipal.style.width = '65%';
    divPrincipal.style.justifyContent = 'space-between';

    divPrincipal.style.borderRadius = '20px';
    divPrincipal.style.fontFamily = 'Arial, sans-serif';
    divPrincipal.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';

    const campoResult = document.createElement('div');
    campoResult.style.display = 'flex';
    campoResult.style.gap = '10px';
    campoResult.style.backgroundColor = 'white';
    campoResult.style.padding = '4px 13px';
    campoResult.style.borderRadius = '10px';

    const reserv = document.createElement('button');
    reserv.className = 'btnReserva';
    reserv.textContent = 'Reservar';
    reserv.style.padding = '10px 30px';
    reserv.style.borderRadius = '10px';
    reserv.style.border = 'grey';
    reserv.style.color = 'white';
 

    const total = document.createElement('h2');
    total.textContent = 'Valor total: ';
    total.style.fontSize = '20px';
    total.style.textAlign = 'center';
    total.style.marginTop = '6px';
    campoResult .appendChild(total);
    
    const result = document.createElement('h2');
    result.textContent = 'R$ 1000';
    result.style.fontSize = '20px';
    result.style.marginTop = '6px';
    
    campoResult.appendChild(result);
    divPrincipal.appendChild(campoResult);
    divPrincipal.appendChild(reserv);
    return divPrincipal;
}
