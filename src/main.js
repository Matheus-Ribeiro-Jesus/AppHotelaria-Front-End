import renderLoginPage from "./pages/login.js";
import renderHomePage from "./pages/home.js";
import renderRegisterPage from "./pages/register.js";

const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage,
    "/home":  renderHomePage
    //Novas paginas aqui adicionadas conforme desenvolvidas
};

//Obtem o caminho atual a parte do nome 
function getPath(){
    //Exemplo: botem "/login"
    const url = (location.pathname || "").replace("/estudo_php/", "/").trim();
    // retorna URL se começar com "/", se nao retorna "/home" como padrão 
    return url && url.startsWith("/") ? url : "/home";

}


//Decide o que renderizar com base na rota atual
function renderRoutes(){
    const url = getPath(); // lê a rota atual exemplo: "/register"
    const render = routes[url] || routes["/home"]; // Busca esta rota no mapa
    render(); //Executa a função de render na pagina atual 
}

//Renderização
document.addEventListener('DOMContentLoaded', renderRoutes);