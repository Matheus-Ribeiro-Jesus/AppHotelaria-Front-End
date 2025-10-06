<?php
require_once __DIR__ . "/../controllers/AuthController.php";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $opcao = $seguimentos[2] ?? null;
    $data = json_decode(file_get_contents('php://input'), true);

    if($opcao == "cliente"){

        AuthController::loginClient($conn, $data);

    }elseif($opcao == "funcionario"){
        AuthController::login($conn, $data);
    }else{
        jsonResponse(['status'=>'erro', 'message'=>'rota nao encontrada']);
    }

    AuthController::login($conn, $data);
} 


else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Método não permitido'

    ], 404);

}
?>