export default function quartosInformacoes(){

    const DivPrincipal = document.createElement('div');
    DivPrincipal.className = 'DivPrincipal';
    DivPrincipal.style.padding = '20px 30px';
    DivPrincipal.style.width = '80%';
    DivPrincipal.style.marginLeft = '10px';
    DivPrincipal.style.borderRadius = '10px';
    DivPrincipal.style.display = 'flex';
    DivPrincipal.style.justifyContent = 'space-between';
    
    //Categoria do quarto
    const informacoesQuarto = document.createElement('div');
    informacoesQuarto.style.display = 'flex';
    informacoesQuarto.style.flexDirection = 'column';
    const coluna1 = document.createElement('a');
    coluna1.href = '#';
    coluna1.style.fontWeight = 'bold';
    coluna1.style.color = 'blue';
    coluna1.style.cursor = 'pointer';
    coluna1.textContent = 'Quarto de Luxo';
    informacoesQuarto.appendChild(coluna1);
    
    const paragrafo = document.createElement('p');
    paragrafo.textContent = 'melhor quarto';
    paragrafo.style.marginTop = '4px';
    paragrafo.style.color = 'black';
    informacoesQuarto.appendChild(paragrafo);

    const colunasPessoas = document.createElement('div');
    colunasPessoas.textContent = '10 pessoas';


    const colunaPreco = document.createElement('div');
    colunaPreco.style.textAlign = 'right';
    const preco = document.createElement('p');
    preco.textContent = 'R$ 900';
    preco.style.fontWeight = 'bold';

    colunaPreco.appendChild(preco);

    DivPrincipal.appendChild(informacoesQuarto);
    DivPrincipal.appendChild(colunasPessoas);
    DivPrincipal.appendChild(colunaPreco);
    return DivPrincipal;
}   