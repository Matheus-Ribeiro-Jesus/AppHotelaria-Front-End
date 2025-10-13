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
    
    // inicio = '2025-10-06 14:00:00'
    // fim = '2025-10-09 12:00:00'


    // http://localhost/estudo_php/api/quartos/disponiveis?checkin=2025-09-28&checkout=2025-10-02&pessoas=3

?>