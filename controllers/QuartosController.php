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
}

?>