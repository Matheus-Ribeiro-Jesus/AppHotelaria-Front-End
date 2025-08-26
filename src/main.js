import renderLoginPage from "./pages/login.js";
import renderHomePage from "./pages/home.js";
import renderRegisterPage from "./pages/register.js";

const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage,
    "/home":  renderHomePage
    //Novas paginas aqui adicionadas conforme desenvolvidas
};

//Obtem o caminho atual a partir do hash da URL

function getPath(){
    //obtem o hash 
    const url = (location.hash || "").replace(/^#/, "").trim();
    console.log(url);

    //retorna a url se começar com / 
    return url && url.startsWith("/") ? url : "/home";

}

function renderRoutes(){
    const url = getPath(); // lê a rota atual
    const render = routes[url] || routes["/home"]; // Busca esta rota no mapa
    render(); //Executa a função de render na pagina atual 
}

window.addEventListener("hashchange", renderRoutes);

document.addEventListener('DOMContentLoaded', renderRoutes);