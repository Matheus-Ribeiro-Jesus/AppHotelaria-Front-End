<?php
    require_once __DIR__ . "./../controllers/ClienteController.php";

    if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $data = json_decode(file_get_contents('php://input'), true);
        ClienteController::loginClient($conn, $data);
    } else {
        jsonResponse([
            'status' => 'erro',
            'message' => 'Método não permitido'

        ], 404);

    }
?>