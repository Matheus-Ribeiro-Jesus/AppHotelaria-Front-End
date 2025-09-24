<?php

    require_once __DIR__ . '/helpers/token_jwt.php';  
    require_once __DIR__ . '/controllers/AuthController.php';
    require_once __DIR__ . '/controllers/PasswordController.php';
    require_once __DIR__ . '/controllers/QuartosController.php';
    require_once __DIR__ . '/controllers/ClienteController.php';
    require_once __DIR__ . '/controllers/AdicionalController.php';
    require_once __DIR__ . '/controllers/ReservaController.php';


    $data = [
        "nome" => "Queijo quente",
        "preco" => 100,
    ];
    

    // http://localhost/estudo_php/quartos.php?disponiveis=1&checkin=2025-09-24%2014:00:00&checkout=2025-09-26%2012:00:00&pessoa

?>