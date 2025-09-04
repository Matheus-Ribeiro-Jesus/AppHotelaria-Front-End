<?php
    require_once __DIR__ . "/../models/QuartosModel.php";


    class QuartosController{
        public static function create($conn, $data){
            $result = QuartosModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Quarto criado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
        }
    }
    public static function getAll($conn){
        $listaQuartos = QuartosModel::listarTodos($conn);
        return jsonResponse($listaQuartos);
    }

    public static function getBydId($conn, $id){
        $listarporId = QuartosModel::getById($conn, $id);
        return jsonResponse($listarporId);
    }

    public static function delete($conn, $id){
        $result = QuartosModel::delete($conn, $id);
        if($result){
            return jsonResponse(['message'=> 'Quarto deletado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Falha ao deletar'],400);
        }
    }

    public static function update($conn, $id, $data){
        $result = QuartosModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Quarto atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Falha ao atualizar o quarto'], 400);
        }
    }
    
}
?>