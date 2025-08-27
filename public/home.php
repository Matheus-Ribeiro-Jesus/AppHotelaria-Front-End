<?php
    $title = "Home";

    require_once '../config/database.php';
    require_once '../controllers/AuthController.php';
    // require_once 'utils/header.php';
      
    $data = [ 
        "email"=>"matheus2@gmail.com",
        "senha"=>"123345"
    ];

    AuthController::login($conn, $data);
?>
    <h1>Home</h1>
    
<?php
    require_once 'utils/rodape.php';
?>