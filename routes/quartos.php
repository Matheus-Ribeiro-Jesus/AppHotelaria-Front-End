<?php
require_once __DIR__ . "/../controllers/QuartosController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $seguimentos[2] ?? null;

    if (isset($id)) {
        QuartosController::getBydId($conn, $id);
    } else {
        QuartosController::getAll($conn);
    }

}
elseif ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    $id = $seguimentos[2] ?? null;

    if (isset($id)) {
        QuartosController::delete($conn, $id);
    } else {
        jsonResponse(['message' => 'ID do quarto é obrigatorio'], 400);
    }
}

else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Metodo não permitido',
    ], 400);
}
?>