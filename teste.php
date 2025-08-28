<?php
    require_once __DIR__ . '/controllers/AuthController.php';
    require_once __DIR__ . '/controllers/PasswordController.php';
      
    $data = [ 
        "email"=>"matheus2@gmail.com",
        "senha"=>"123345"
    ];

    AuthController::login($conn, $data);

    // echo PasswordController::generateHash($data['senha']);

    // $hash = '$2y$10$VhXfTTg8MpTHXzXHU.pBZ.xh5laBmXKhl3KV9Nmoown85wV/UsznW';
    // echo "<br>";
    // echo PasswordController::validateHash($data['senha'], $hash);


?>