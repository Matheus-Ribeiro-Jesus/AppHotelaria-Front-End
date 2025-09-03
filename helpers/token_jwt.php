<?php
    require_once __DIR__ . "/jwt/jwt_include.php";
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    function createToken($user){
        $payload = [
            "iss" => "meusite",
            "iat" => time(),
            "exp" => time() + (60 * (60 * 1)),
            "sub" => $user 
        ];
        return JWT::encode($payload, SECRET_KEY);
    }


?>