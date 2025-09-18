<?php
require_once __DIR__ . "/../controllers/ReservaController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data["id"] ?? null;

    if (isset($id)) {
        ReservasController::getByPedido($conn, $id);
    } else {
        return jsonResponse(['message'=> 'Deu merda'], 400);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'] ?? null;
    ReservasController::create($conn, $data);
}

else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Metodo não permitido',
    ], 400);
}
?>