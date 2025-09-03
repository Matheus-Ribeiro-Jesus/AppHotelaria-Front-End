<?php
    require_once __DIR__ . '/controllers/AuthController.php';
    require_once __DIR__ . '/controllers/PasswordController.php';
    require_once __DIR__ . '/models/ClientModel.php';
    require_once __DIR__ . '/helpers/token_jwt.php';
      
    $data = [ 
        "email"=>"matheus2@gmail.com",
        "senha"=>"123345"
    ];

    // AuthController::login($conn, $data);

    $token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtZXVzaXRlIiwiaWF0IjoxNzU2OTMwMjA0LCJleHAiOjE3NTY5MzM4MDQsInN1YiI6eyJpZCI6NCwibm9tZSI6Ik1hdGhldXMyIiwiZW1haWwiOiJtYXRoZXVzMkBnbWFpbC5jb20iLCJjYXJnbyI6IkFkbWluaXN0cmFkb3IifX0.RepxquuaAlTzml002J9cEVDZccecAjBF3llMp_A2Uoc";
    echo var_dump(validateToken($token));

    // $usuarios = ClientModel::listarTodos($conn);

    // echo "<h2>Lista de Usuários</h2>";
    // echo "<ul>";
    // foreach ($usuarios as $usuario) {
    //     echo "<li>ID: {$usuario['id']} - Email: {$usuario['email']}</li>";
    // }


    

?>