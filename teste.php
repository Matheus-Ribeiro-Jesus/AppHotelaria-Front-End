<?php
    require_once __DIR__ . '/controllers/AuthController.php';
    require_once __DIR__ . '/controllers/PasswordController.php';
    require_once __DIR__ . '/models/ClientModel.php';
      
    $data = [ 
        "email"=>"matheus2@gmail.com",
        "senha"=>"123345"
    ];

    // AuthController::login($conn, $data);

    $usuarios = ClientModel::listarTodos($conn);

    echo "<h2>Lista de Usuários</h2>";
    echo "<ul>";
    foreach ($usuarios as $usuario) {
        echo "<li>ID: {$usuario['id']} - Email: {$usuario['email']}</li>";
    }
    

?>