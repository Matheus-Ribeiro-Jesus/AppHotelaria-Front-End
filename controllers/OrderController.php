<?php

require_once "ValidadorController.php";

    class OrderController{
        public static function createOrder($conn, $data){
            ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);
            foreach($data['quartos'] as $quartos){
                ValidatorController::validate_data($data, ["id", "inicio", "fim"]);
            }
        }
    }
?>