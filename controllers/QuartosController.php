<?php
require_once __DIR__ . "/../models/QuartosModel.php";
require_once __DIR__ . "/ValidadorController.php";

class QuartosController{
    public static $labels = ["nome", "numero", "qtd_casal", "qtd_solteiro", "preco", "disponivel"];

    public static function create($conn, $data){

        $validar = ValidatorController::validate_data($data, self::$labels);

        if( !empty($validar) ){
            $dados = implode(", ", $validar);
            return jsonResponse(['message'=> "Erro, Falta o campo: ".$dados], 400);
        }


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

    public static function delete($conn, $id)
    {
        $result = QuartosModel::delete($conn, $id);
        if ($result) {
            return jsonResponse(['message' => 'Quarto deletado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha ao deletar'], 400);
        }
    }

    public static function update($conn, $id, $data)
    {
        $result = QuartosModel::update($conn, $id, $data);
        if ($result) {
            return jsonResponse(['message' => 'Quarto atualizado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha ao atualizar o quarto'], 400);
        }
    }

    public static function get_available($conn, $data){
        $result = QuartosModel::get_available($conn, $data);
        if($result){
            return jsonResponse(['Quartos'=> $result]);
        }else{
            return jsonResponse(['message'=> 'Deu erro'], 400);
        }
    }


}


?>