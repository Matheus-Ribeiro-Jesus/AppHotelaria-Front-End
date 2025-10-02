<?php
require_once __DIR__ . "/../models/QuartosModel.php";
require_once __DIR__ . "/ValidadorController.php";

class QuartosController{

    public static function create($conn, $data){
        ValidatorController::validate_data($data, ["nome", "numero", "qtd_casal", "qtd_solteiro", "preco", "disponivel"]);

        $result = QuartosModel::create($conn, $data);
        if ($result){
            return jsonResponse(['message'=>"Quarto criado com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao criar o quarto"], 400);
        }
    }
    public static function getAll($conn)
    {
        $listaQuartos = QuartosModel::listarTodos($conn);
        return jsonResponse($listaQuartos);
    }

    public static function getBydId($conn, $id)
    {
        $listarporId = QuartosModel::getById($conn, $id);
        return jsonResponse($listarporId);
    }

    public static function delete($conn, $id){
        $result = QuartosModel::delete($conn, $id);
        if ($result) {
            return jsonResponse(['message' => 'Quarto deletado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha ao deletar'], 400);
        }
    }

    public static function update($conn, $id, $data){
        ValidatorController::validate_data($data, ["nome", "numero", "qtd_casal", "qtd_solteiro", "preco", "disponivel"]);
        $result = QuartosModel::update($conn, $id, $data);
        if ($result) {
            return jsonResponse(['message' => 'Quarto atualizado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha ao atualizar o quarto'], 400);
        }
    }

    public static function get_available($conn, $data){
        ValidatorController::validate_data($data, ["inicio", "fim", "qtd"]);
        
        $data["inicio"] = ValidatorController::fix_hours($data["inicio"], 14);
        $data["fim"] = ValidatorController::fix_hours($data["fim"], 12);

        $result = QuartosModel::get_available($conn, $data);
        if($result){
            return jsonResponse(['Quartos'=> $result]);
        }else{
            return jsonResponse(['message'=> 'Deu erro'], 400);
        }
    }


}


?>