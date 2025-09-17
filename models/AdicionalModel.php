<?php
class AdicionalModel{
    public static function create($conn, $data){
        $sql = "INSERT INTO Adicional(nome, preco) VALUES(?,?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param(
            "sd",
            $data["nome"],
            $data["preco"]
        );
        return $stmt->execute();
    }
    public static function listarTodos($conn){
        $sql = "SELECT * from adicionais";
        $stmt = $conn->prepare($sql);
        $result = $conn->query($sql);
        return $result->fetch_assoc(MYSQL_ASSOC);
    }
    public static function getById($conn, $id){
        $sql = "SELECT * FROM adicionais WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_all();
    }

}
?>