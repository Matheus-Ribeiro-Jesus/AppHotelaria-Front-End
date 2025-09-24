<?php
require_once __DIR__ . "/../controllers/QuartosController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    // se vier rota /quartos/disponiveis
    if (isset($_GET['disponiveis'])) {
        $checkin = $_GET['checkin'] ?? null;
        $checkout = $_GET['checkout'] ?? null;

        if ($checkin && $checkout) {
            QuartosController::pesquisarDisponivel($conn, [
                'checkin' => $checkin,
                'checkout' => $checkout
            ]);
        } else {
            jsonResponse([
                'status' => 'erro',
                'message' => 'É necessário informar checkin e checkout'
            ], 400);
        }

    } else {
        // rota padrão /quartos ou /quartos?id=...
        $id = $_GET["id"] ?? null;

        if ($id) {
            QuartosController::getBydId($conn, $id);
        } else {
            QuartosController::getAll($conn);
        }
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