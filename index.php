<?php
    require_once "config/database.php";
    require_once "helpers/response.php";
    require_once "helpers/token_jwt.php";
    
    if ($erroDB){
        echo "Erro na conexão";
        exit;
    }
    
    $uri = Strtolower(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
    $method = $_SERVER['REQUEST_METHOD'];
    $pasta = Strtolower(basename(dirname(__FILE__)));
    $uri = str_replace("/$pasta", "", $uri);
    $seguimentos = explode("/", trim($uri, "/") );

    $route = $seguimentos[0] ??  null;
    $subRoute = $seguimentos[1] ??  null;

    if($route != "api"){
        require __DIR__ . "/public/index.html";
        // require "teste.php";
        exit;
        
    }elseif($route === "api"){
        if(in_array($subRoute, ["login", "quartos", "cliente", "adicional", "reserva", "pedido", "disponiveis"])){
            require "routes/${subRoute}.php";
        }else{
            return jsonResponse(['message' => 'rota não encontrada'], 400);
        }
        exit;
    }else{
        echo "404 Pagina não encontrada";
        exit;

    }
?>