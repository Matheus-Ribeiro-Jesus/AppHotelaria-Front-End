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
            return jsonResponse(['message' => 'Deu merda'], 400);
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

    public static function createOrder($conn, $data)
    {
        ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);
        foreach ($data['quartos'] as $quartos) {
            ValidatorController::validate_data($quartos, ["id", "inicio", "fim"]);
        }
    }
}

?>