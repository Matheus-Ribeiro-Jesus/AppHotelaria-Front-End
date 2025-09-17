<?php
require_once  __DIR__ . "/../models/AdicionalModel.php";
class AdicionalController{
        public static function create($conn, $data){
            $result = AdicionalModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicional criado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        public static function listarTodos($conn){
            $listarClientes = AdicionalModel::listarTodos($conn);
        }

    }
?>