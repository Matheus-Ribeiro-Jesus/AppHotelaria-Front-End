<?php

class UserModel{
    public static function validateUser($conn, $email, $password){
        // $sql = "SELECT * FROM usuarios WHERE email = ?";

        $sql = "SELECT usuarios.id, usuarios.nome, usuarios.email, usuarios.senha, roles.nome AS cargo FROM usuarios JOIN roles ON roles.id = usuarios.role_id WHERE usuarios.email = ?;";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if($user = $result->fetch_assoc()){
            if($user['senha'] === $password){
                unset($user['senha']);
                return $user;
            }
        }
        return false;
    }
}

?>