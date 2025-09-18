<?php
    require_once __DIR__ . "/../controllers/AdicionalController.php";
    
    if($_SERVER['REQUEST_METHOD'] === "GET"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        if(isset($data)){
            AdicionalController::getById($conn, $id);
        }else{
            AdicionalController::listarTodos($conn);
        }
    }
    
    elseif($_SERVER['REQUEST_METHOD'] === "POST"){
        $data = json_decode(file_get_contents("php://input"), true);
        AdicionalController::create($conn, $data);
    }

    elseif($_SERVER['REQUEST_METHOD'] === "PUT"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        AdicionalController::update($conn, $id, $data);
    }

    elseif($_SERVER['REQUEST_METHOD'] === "DELETE"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        AdicionalController::delete($conn, $id);
    }
?>