export default function modal({ title = "Aviso", message = "Algo deu errado." }) {
    const modalDiv = document.createElement("div");
    modalDiv.className = "modal fade";
    modalDiv.id = "modalAviso";
    modalDiv.tabIndex = -1;
    modalDiv.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>
                <div class="modal-body">
                    <p>${message}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    `;
    return modalDiv;
}
