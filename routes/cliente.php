<?php
    require_once __DIR__ . "/../controllers/ClienteController.php";

    if($_SERVER['REQUEST_METHOD'] === "GET"){
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'] ?? null;
        if(isset($id)){
            ClienteController::getBydId($conn,$id);
        }else{
            ClienteController::listarTodos($conn);
        }
    }
    elseif($_SERVER['REQUEST_METHOD'] === "PUT"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        ClienteController::update($conn,$id, $data);
    }

    elseif($_SERVER['REQUEST_METHOD'] === "DELETE"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        ClienteController::delete($conn,$id);
    }

    elseif($_SERVER['REQUEST_METHOD'] === "POST"){
        $data = json_decode(file_get_contents("php://input"), true);
        ClienteController::create( $conn, $data);
    }
?>