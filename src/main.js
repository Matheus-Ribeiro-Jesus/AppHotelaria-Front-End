import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";

const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage
    //Novas paginas aqui adicionadas conforme desenvolvidas
};

//Obtem o caminho atual a partir do hash da URL

function getPath(){
    //obtem o hash 
    const url = (location.hash || "").replace(/^#/, "").trim();
    console.log(url);

    //retorna a url se começar com / 
    return url && url.startsWith("/") ? url : "/login";

}

function renderRoutes(){
    const url = getPath(); // lê a rota atual
    const render = routes[url] || routes["/login"]; // Busca esta rota no mapa
    render(); //Executa a função de render na pagina atual 
}

window.addEventListener("hashchange", renderRoutes);

document.addEventListener('DOMContentLoaded', renderRoutes);