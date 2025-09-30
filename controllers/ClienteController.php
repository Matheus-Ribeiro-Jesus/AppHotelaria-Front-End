<?php
require_once __DIR__ . "/../models/ClientModel.php";
require_once __DIR__ . "/../helpers/token_jwt.php";
require_once "PasswordController.php";

class ClienteController
{
    public static function create($conn, $data)
    {
        $data['senha'] = PasswordController::generateHash($data['senha']);

        $result = ClientModel::create($conn, $data);
        if ($result) {
            return jsonResponse(['message' => 'Cliente criado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Deu merda'], 400);
        }
    }

    public static function loginClient($conn, $data)
    {
        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);

        // Confirmar se tem algum campo vazio

        if (empty($data['email']) || empty($data['senha'])) {
            return jsonResponse(
                [
                    "status" => "erro",
                    "message" => "Preencha todos os campos"

                ],
                400
            );
        }

        $user = ClientModel::validateUserLogin($conn, $data['email'], $data['senha']);
        if ($user) {
            $token = createToken($user);
            return jsonResponse(["token" => $token]);
        } else {
            return jsonResponse(
                [
                    "reposta" => "Erro",
                    "message" => "Credenciais invalidas"

                ],
                401
            );
        }
    }


    public static function listarTodos($conn)
    {
        $listaClientes = ClientModel::listarTodos($conn);
        return jsonResponse($listaClientes);
    }

    public static function getBydId($conn, $id)
    {
        $listarporId = ClientModel::getById($conn, $id);
        return jsonResponse($listarporId);
    }

    public static function delete($conn, $id)
    {
        $result = ClientModel::delete($conn, $id);
        if ($result) {
            return jsonResponse(['message' => 'Cliente deletado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha ao deletar'], 400);
        }
    }
    public static function update($conn, $id, $data)
    {
        $result = ClientModel::update($conn, $id, $data);
        if ($result) {
            return jsonResponse(['message' => 'Cliente atualizado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha ao atualizar o cliente'], 400);
        }
    }
}
?>