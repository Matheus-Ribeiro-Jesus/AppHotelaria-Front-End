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


?>