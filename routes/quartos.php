<?php

require_once __DIR__ . "/../controllers/QuartosController.php";

$method = $_SERVER['REQUEST_METHOD'];
$resource = $seguimentos[3] ?? null; 
$param = $seguimentos[2] ?? null;    

switch ($method) {
    case "GET":
        if ($param === 'disponiveis') {
            $inicio = isset($_GET['checkin']) ? $_GET['checkin'] : null;
            $fim = isset($_GET['checkout']) ? $_GET['checkout'] : null;
            $capacidade = isset($_GET['pessoas']) ? $_GET['pessoas'] : null;
            jsonResponse(['message'=>[$inicio, $fim, $capacidade]], 200);
        }
        elseif ($id = $seguimentos[2] ?? null) {
            QuartosController::getBydId($conn, $id);
        }else{
            QuartosController::getAll($conn);
        }

       
       
        break;

    case "DELETE":
        $id = $seguimentos[2] ?? null;
        if ($id) {
            QuartosController::delete($conn, $id);
        } else {
            jsonResponse(["message" => "Id necessário!"], 400);
        }
        break;

    case "POST":
        $data = json_decode(file_get_contents('php://input'), true);
        QuartosController::create($conn, $data);
        break;

    case "PUT":
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'] ?? null;
        if ($id) {
            QuartosController::update($conn, $id, $data);
        } else {
            jsonResponse(["message" => "Id necessário no corpo da requisição!"], 400);
        }
        break;

    default:
        jsonResponse([
            "status" => "erro",
            "message" => "Método não permitido"
        ], 400);
        break;
}