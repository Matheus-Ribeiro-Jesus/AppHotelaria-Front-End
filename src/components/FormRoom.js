export default function FormRoom(){
    const divRoom = document.createElement('div');

    const divELementos = document.createElement('div');
    const nome = document.createElement('input');
    nome.textContent = 'Digite o nome do quarto';
    divELementos.appendChild(nome);

    const numero = document.createElement('input');
    numero.textContent = 'Digite o numero do quarto';
    divELementos.appendChild(numero);

    const qtd_cama_casal = document.createElement('input[type="number"]');
    qtd_cama_casal.textContent = 'A quantidade de cama casal';
    divELementos.appendChild(qtd_cama_casal);

    const qtd_cama_solteiro = document.createElement('input[type="number"]');
    qtd_cama_solteiro.textContent = 'A quantidade de cama solteiro';
    divELementos.appendChild(qtd_cama_solteiro);

    const preco = document.createElement('input[type="number"]');
    preco.textContent = 'Digite o preço do quarto';
    divELementos.appendChild(preco);

    const disponivel = document.createElement('input[type="radio"]');
    disponivel.textContent = 'Disponivel';
    divELementos.appendChild(disponivel);

    

    divRoom.appendChild(divELementos);

}