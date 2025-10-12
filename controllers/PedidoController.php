<?php
require_once __DIR__ . "/../models/PedidoModel.php";
require_once __DIR__ . "/../controllers/ValidadorController.php";

class PedidosController
{
    public static function create($conn, $data)
    {
        ValidatorController::validate_data($data, ["usuario_id", "cliente_id", "pagamento"]);
        $result = PedidosModel::create($conn, $data);
        if ($result) {
            return jsonResponse(['message' => 'Pedido criado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha na criação do pedido'], 400);
        }
    }

    public static function getAll($conn)
    {
        $list = PedidosModel::getAll($conn);
        return jsonResponse($list);
    }

    public static function getById($conn, $id)
    {
        $result = PedidosModel::getById($conn, $id);
        return jsonResponse($result);
    }

    public static function createOrder($conn, $data){

        $data['usuario_id'] = isset($data['usuario_id']) ? $data['usuario_id'] : null;
        ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);
        foreach ($data['quartos'] as $quarto) {
            ValidatorController::validate_data($quarto, ["id", "inicio", "fim"]);
            if (isset($quarto['inicio'], $quarto['fim'])) {
                $quarto['inicio'] = ValidatorController::fix_hours($quarto['inicio'], 14);
                $quarto['fim'] = ValidatorController::fix_hours($quarto['fim'], 12);
            }
        }
        if(count($data['quartos']) == 0){
            jsonResponse(['message'=> 'Reservas não existentes'], 400);
            exit;

        }
    }
}

?>