<?php
require_once __DIR__ . "/../controllers/QuartosController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data["id"] ?? null;

    if (isset($id)) {
        QuartosController::getBydId($conn, $id);
    } else {
        QuartosController::getAll($conn);
    }

}elseif($_SERVER['REQUEST_METHOD'] === "PUT") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'] ?? null;
    QuartosController::update($conn, $id, $data);
}

elseif($_SERVER['REQUEST_METHOD'] === "POST"){
    $data = json_decode(file_get_contents('php://input'), true);
    QuartosController::create($conn, $data);
}

elseif ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    $id = $data["id"] ?? null;
    QuartosController::delete($conn, $id);

}

else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Metodo não permitido',
    ], 400);
}

?>