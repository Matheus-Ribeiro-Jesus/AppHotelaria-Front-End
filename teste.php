<?php
    require_once __DIR__ . '/controllers/AuthController.php';
    require_once __DIR__ . '/controllers/PasswordController.php';
      
    $data = [ 
        "email"=>"matheus2@gmail.com",
        "senha"=>"123345"
    ];

    AuthController::login($conn, $data);

    

?>