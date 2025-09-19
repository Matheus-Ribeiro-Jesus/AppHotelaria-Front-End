import renderLoginPage from "./pages/login.js";
import renderHomePage from "./pages/home.js";
import renderRegisterPage from "./pages/register.js";
import RenderCarrinhoPage from "./pages/carrinho.js";

const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage,
    "/home":  renderHomePage,
    "/carrinho": RenderCarrinhoPage
    //Novas paginas aqui adicionadas conforme desenvolvidas
};

//Obtem o caminho atual a parte do nome 

// function getPath(){
//     const url = (location.pathname || "").replace("/estudo_php/", "/").trim();
//     return url && url.startsWith("/") ? url : "/home";
// }

function getPath() {
    // Divide o caminho atual em partes
    const pathParts = location.pathname.split('/').filter(Boolean); // remove vazios
    // Remove o primeiro item (que é o nome da pasta do projeto)
    pathParts.shift();
    // Junta de novo as partes restantes
    const path = '/' + pathParts.join('/');
    return path;
}


//Decide o que renderizar com base na rota atual
function renderRoutes(){
    const url = getPath(); // lê a rota atual exemplo: "/register"
    const render = routes[url] || routes["/home"]; // Busca esta rota no mapa
    render(); //Executa a função de render na pagina atual 
}

//Renderização
document.addEventListener('DOMContentLoaded', renderRoutes);