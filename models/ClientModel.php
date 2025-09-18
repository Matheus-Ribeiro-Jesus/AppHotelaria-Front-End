<?php
require_once __DIR__ . "/../controllers/PasswordController.php";
    class ClientModel{
        public static function create($conn, $data){
            $sql = "INSERT INTO clientes (nome, cpf, telefone, email, senha) VALUES (?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssss",
                $data["nome"],
                $data["cpf"],
                $data["telefone"],
                $data["email"],
                $data["senha"]
            );
            return $stmt->execute();
        }

        public static function listarTodos($conn){
            $sql = "SELECT * FROM clientes";
            $result = $conn->query($sql);
            return $result->fetch_all(MYSQLI_ASSOC);
        }

        public static function getById($conn, $id){
            $sql = "SELECT * FROM clientes WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            return $stmt->get_result()->fetch_assoc();
        }

        public static function delete($conn, $id){
            $sql = "DELETE FROM clientes WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            return $stmt->execute();
        }
        public static function update($conn, $id, $data){
            $sql = "UPDATE clientes SET nome = ?, cpf = ?, telefone = ?, email = ?, senha = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssssi",
                $data["nome"],
                $data["cpf"],
                $data["telefone"],
                $data["email"],
                $data["senha"],
                $id
            );
            return $stmt->execute();
        }

    }
?>