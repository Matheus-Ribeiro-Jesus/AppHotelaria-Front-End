import { getCart, addItemToCart, removeItemFromHotel_Cart, setCart, getTotalItems } from "../store/cartStore.js";
export default function quartosInformacoes() {
  const DivPrincipal = document.createElement("div");
  DivPrincipal.className = "DivPrincipal";
  Object.assign(DivPrincipal.style, {
    padding: "20px",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  });

  const carrinho = getCart();

  if (!carrinho || carrinho.length === 0) {
    DivPrincipal.innerHTML = `
      <div class="alert alert-warning text-center w-100" role="alert">
        Nenhum quarto reservado no momento.
      </div>
    `;
    return DivPrincipal;
  }

  const totalGeral = carrinho.reduce((acc, item) => acc + Number(item.subtotal || 0),0);

  carrinho.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card shadow-sm";
    card.innerHTML = `
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 class="card-title">${item.nome || "Quarto #" + item.id}</h5>
          <p class="card-text mb-1"><strong>Check-In:</strong> ${item.checkIn}</p>
          <p class="card-text mb-1"><strong>Check-Out:</strong> ${item.checkOut}</p>
          <p class="card-text mb-1"><strong>Diárias:</strong> ${item.daily}</p>
          <p class="card-text mb-1"><strong>Hóspedes:</strong> ${item.guests}</p>
          <p class="card-text text-success"><strong>Subtotal:</strong> R$ ${parseFloat(item.subtotal || 0).toFixed(2)}</p>
        </div>
        <button
          class="btn btn-outline-danger btn-sm remove-item"
          data-item-index="${index}"
          title="Remover item"
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `;
    DivPrincipal.appendChild(card);
  });

  const resumo = document.createElement("div");
  resumo.className = "d-flex justify-content-between align-items-center mt-4";
  resumo.innerHTML = `
    <h4>Total geral: <span class="text-success fw-bold">R$ ${totalGeral.toFixed(2)}</span></h4>
    <div>
      <button id="clear-cart" class="btn btn-outline-secondary me-2">
        <i class="bi bi-x-circle"></i> Limpar Carrinho
      </button>
      <button id="finalizar-reserva" class="btn btn-success">
        <i class="bi bi-check-circle"></i> Finalizar Reserva
      </button>
    </div>
  `;
  DivPrincipal.appendChild(resumo);

  // Eventos
  DivPrincipal.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.currentTarget.getAttribute("data-item-index"));
      removeItemFromHotel_Cart(index);
      location.reload();
    });
  });

  DivPrincipal.querySelector("#clear-cart").addEventListener("click", () => {
    if (confirm("Tem certeza que deseja limpar todas as reservas?")) {
      clearHotel_cart();
      location.reload();
    }
  });

  DivPrincipal.querySelector("#finalizar-reserva").addEventListener("click", () => {
    alert("Reserva finalizada com sucesso!");
    clearHotel_cart();
    location.reload();
  });

  return DivPrincipal;
}
``