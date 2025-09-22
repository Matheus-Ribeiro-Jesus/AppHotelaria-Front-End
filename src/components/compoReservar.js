export default function compoReservar() {
    const divPrincipal = document.createElement('div');
    divPrincipal.className = 'divPrincipal';
    divPrincipal.style.backgroundColor = '#e4e4e48c'; 
    divPrincipal.style.padding = '20px 30px';
    divPrincipal.style.display = 'flex';
    divPrincipal.style.flexDirection = 'row'; 
    divPrincipal.style.alignItems = 'center'; 
    divPrincipal.style.marginLeft = '10px';
    divPrincipal.style.gap = '15px'; 
    divPrincipal.style.marginTop = '10px';
    divPrincipal.style.width = '85%';
    divPrincipal.style.borderRadius = '20px';
    divPrincipal.style.fontFamily = 'Arial, sans-serif';
    divPrincipal.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';

    const btn = document.createElement('a');
    btn.textContent = 'Reservar';
    btn.style.fontWeight = 'bold';
    btn.style.padding = '10px 20px'; 
    btn.style.borderRadius = '10px';
    btn.style.backgroundColor = 'black';
    btn.style.textDecoration = 'none';
    btn.style.cursor = 'pointer';
    btn.style.color = 'white';
    btn.style.display = 'inline-block';
    btn.style.minHeight = '40px'; 
    btn.style.lineHeight = '20px';
    btn.style.fontFamily = '"Roboto", sans-serif'; 
    btn.style.fontSize = '1.2em'; 
    btn.href = '#'; 

    const total = document.createElement('p');
    total.textContent = 'Total: R$ 1.000,00';
    total.style.padding = '10px 20px'; 
    total.style.backgroundColor = '#f8f9fa';
    total.style.borderRadius = '12px';
    total.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    total.style.fontFamily = '"Roboto", sans-serif';
    total.style.fontSize = '1.2em';
    total.style.fontWeight = '700';
    total.style.color = '#1a1a1a';
    total.style.minHeight = '40px'; 
    total.style.lineHeight = '20px'; 
    total.style.margin = '0';

    divPrincipal.appendChild(btn);
    divPrincipal.appendChild(total);

    return divPrincipal;
}