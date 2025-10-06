
export default function DateSelector(){
    const DivDate = document.createElement('div');
    DivDate.className = 'divDate';

    const dateCheckIn = document.createElement('input');
    dateCheckIn.type = 'date';
    dateCheckIn.className = 'card p-3 shadow-lg inputDate';

    const dateCheckOut = document.createElement('input');
    dateCheckOut.type = 'date';
    dateCheckOut.className = 'card p-3 shadow-lg inputDate';

    const guestAmount = document.createElement('select');
    guestAmount.className = 'inputDate card p-3 shadow-lg';
    guestAmount.innerHTML = 
    `
        <option value="">Quantas Pessoas?</option>
        <option value="1">1 Pessoas</option>
        <option value="2">2 Pessoas</option>
        <option value="3">3 Pessoas</option>
        <option value="4">4 Pessoas</option>
        <option value="5">5 ou mais Pessoas</option>`;

    const btnSearchRoom = document.createElement('button');
    btnSearchRoom.type = 'submit';
    btnSearchRoom.textContent = 'Pesquisar';
    btnSearchRoom.className = 'btn btn-primary';
    DivDate.appendChild(dateCheckIn);
    DivDate.appendChild(dateCheckOut);
    DivDate.appendChild(guestAmount);
    DivDate.appendChild(btnSearchRoom);

    return DivDate;
}
