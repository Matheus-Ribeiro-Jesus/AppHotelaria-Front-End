export default function DateSelector() {
  const DivDate = document.createElement('div');
  DivDate.className = 'divDate';

  const inputs = document.createElement('div');
  inputs.className = 'InputsDate d-flex gap-3 align-items-center justify-content-center p-3 shadow-lg';
  inputs.style.background = 'linear-gradient(130deg, #c7c7c7ff, #c7c7c7ff)';

  inputs.style.borderRadius = '10px';
  inputs.style.maxWidth = '800px';
  inputs.style.margin = '0 auto';

  const dateCheckIn = document.createElement('input');
  dateCheckIn.type = 'date';
  dateCheckIn.className = 'form-control shadow-sm';
  // dateCheckIn.style.border = '2px solid black';

  const dateCheckOut = document.createElement('input');
  dateCheckOut.type = 'date';
  dateCheckOut.className = 'form-control shadow-sm';
  // dateCheckOut.style.border = '2px solid black';

  const guestAmount = document.createElement('select');
  guestAmount.className = 'form-select shadow-sm';
  // guestAmount.style.border = '2px solid black';
  guestAmount.innerHTML = `
    <option value="">Quantas Pessoas?</option>
    <option value="1">1 Pessoa</option>
    <option value="2">2 Pessoas</option>
    <option value="3">3 Pessoas</option>
    <option value="4">4 Pessoas</option>
    <option value="5">5 ou mais Pessoas</option>
  `;

  const btnSearchRoom = document.createElement('button');
  btnSearchRoom.type = 'submit';
  btnSearchRoom.textContent = 'Pesquisar';
  btnSearchRoom.className = 'pesquisarBtn shadow-sm';

  inputs.appendChild(dateCheckIn);
  inputs.appendChild(dateCheckOut);
  inputs.appendChild(guestAmount);
  inputs.appendChild(btnSearchRoom);

  DivDate.appendChild(inputs);

  return DivDate;
}
