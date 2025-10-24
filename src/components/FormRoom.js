import { addRoom } from '../api/roomsAPI.js';

export default function FormRoom() {
    const DivRoot = document.getElementById('root');
    DivRoot.innerHTML = '';
    DivRoot.style.height = '100vh';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg d-flex flex-row';
    container.style.width = '100%';
    container.style.maxWidth = '1020px';
    container.style.height = '588px';
    container.style.border = 'none';
    container.style.backgroundColor = '#ffffff';
    container.style.backdropFilter = 'blur(10px) brightness(0.8)';
    container.style.margin = '0 auto';

    const leftSide = document.createElement('div');
    leftSide.className = 'left-side d-flex align-items-center justify-content-center';
    leftSide.style.width = '60%';
    leftSide.style.backgroundImage = 'url("public/assets/imgs/LeftSide.jpg")';
    leftSide.style.backgroundSize = 'cover';
    leftSide.style.backgroundPosition = 'center';
    leftSide.style.borderRadius = '10px 0 0 10px';

    const rightSide = document.createElement('div');
    rightSide.className = 'right-side p-4 d-flex flex-column justify-content-center';
    rightSide.style.width = '50%';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Cadastro de Quartos';
    titulo.className = 'titulo mb-4';
    titulo.style.color = 'black';
    titulo.style.textAlign = 'center';

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';
    formulario.enctype = 'multipart/form-data';

    const InputNome = document.createElement('input');
    InputNome.type = 'text';
    InputNome.style.textAlign = 'left';
    InputNome.max = '50';
    InputNome.placeholder = "Digite o nome do quarto";
    InputNome.className = 'inputs';
    InputNome.name = 'nome';
    formulario.appendChild(InputNome);

    const InputNumero = document.createElement('input');
    InputNumero.type = 'text';
    InputNumero.style.textAlign = 'left';
    InputNumero.placeholder = "Digite o numero";
    InputNumero.className = 'inputs';
    InputNumero.name = 'numero';
    formulario.appendChild(InputNumero);

    const qtd_cama_casal = document.createElement('select');
    qtd_cama_casal.className = 'inputs';
    qtd_cama_casal.style.textAlign = 'left';
    qtd_cama_casal.innerHTML = `
        <option value="">Selecione quantidade cama de casal</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>`;
    qtd_cama_casal.name = 'qtd_cama_casal';
    formulario.appendChild(qtd_cama_casal);

    const qtd_cama_solteiro = document.createElement('select');
    qtd_cama_solteiro.className = 'inputs';
    qtd_cama_solteiro.style.textAlign = 'left';
    qtd_cama_solteiro.innerHTML = `
        <option value="">Selecione quantidade cama de solteiro</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>`;
    qtd_cama_solteiro.name = 'qtd_cama_solteiro';
    formulario.appendChild(qtd_cama_solteiro);

    const InputPreco = document.createElement('input');
    InputPreco.type = 'number';
    InputPreco.style.textAlign = 'left';
    InputPreco.placeholder = 'Digite o preço do quarto';
    InputPreco.className = 'inputs';
    InputPreco.step = "0.01";
    InputPreco.name = 'preco';
    formulario.appendChild(InputPreco);

    const inputFotos = document.createElement('div');
    inputFotos.innerHTML = `
        <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Imagens do quarto</label>
            <input name="fotos[]" class="form-control" type="file" id="formFileMultiple" accept="image/*" multiple>
        </div>
    `;
    inputFotos.name = 'fotos';
    inputFotos.className = 'arquivo';

    formulario.appendChild(inputFotos);

    const disponibilidadeContainer = document.createElement('div');
    disponibilidadeContainer.className = 'd-flex align-items-center mt-3';
    disponibilidadeContainer.style.gap = '10px';
    disponibilidadeContainer.style.justifyContent = 'center';

    const perguntaDisponivel = document.createElement('h2');
    perguntaDisponivel.textContent = 'O quarto está disponível: ';
    perguntaDisponivel.style.fontSize = '18px';
    perguntaDisponivel.style.margin = '0';
    perguntaDisponivel.style.color = '#000';

    const disponivelSim = document.createElement('input');
    disponivelSim.type = 'radio';
    disponivelSim.name = 'disponivel';
    disponivelSim.value = true;

    const labelSim = document.createElement('label');
    labelSim.textContent = 'Sim';
    labelSim.style.marginRight = '25px';

    const disponivelNao = document.createElement('input');
    disponivelNao.type = 'radio';
    disponivelNao.name = 'disponivel';
    disponivelNao.value = false;

    const labelNao = document.createElement('label');
    labelNao.textContent = 'Não';
    
    disponibilidadeContainer.appendChild(perguntaDisponivel);
    disponibilidadeContainer.appendChild(disponivelSim);
    disponibilidadeContainer.appendChild(labelSim);
    disponibilidadeContainer.appendChild(disponivelNao);
    disponibilidadeContainer.appendChild(labelNao);
    formulario.appendChild(disponibilidadeContainer);

    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submit';
    btnSubmit.textContent = 'Cadastrar Quarto';
    btnSubmit.className = 'btn btn-primary mt-4';
    formulario.appendChild(btnSubmit);

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();
        try {
            const response = await addRoom(formulario);
            console.log("Resposta do servidor: " + response);
        } catch (error) {
            console.log("Erro ao enviar requisição: " + error.message);
        }
    })

    rightSide.appendChild(titulo);
    rightSide.appendChild(formulario);
    container.appendChild(leftSide);
    container.appendChild(rightSide);
    DivRoot.appendChild(container);

}
