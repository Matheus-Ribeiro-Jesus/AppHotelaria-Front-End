<?php

require_once __DIR__ . "/../models/UserModel.php";
require_once __DIR__ . "/../helpers/token_jwt.php";
require_once __DIR__ . "/../controllers/PasswordController.php";
require_once __DIR__ . "/../models/ClientModel.php";
require_once __DIR__ . "/../controllers/ValidadorController.php";

class AuthController{
    public static function login($conn, $data){
        ValidatorController::validate_data($data, ["email", "senha"]);

        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);

        // Confirmar se tem algum campo vazio

        if (empty($data['email']) || empty($data['senha'])) {
            return jsonResponse(
                [
                    "status" => "erro",
                    "message" => "Preencha todos os campos"

                ],
                403
            );
        }

        $user = UserModel::validateUser($conn, $data['email'], $data['senha']);
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

    public static function loginClient($conn, $data){
        ValidatorController::validate_data($data, ["email, senha"]);


        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);

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
}


?>