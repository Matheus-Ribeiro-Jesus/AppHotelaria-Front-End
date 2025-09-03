<?php
class ClientModel {
    public static function listarTodos($conn) {
        $sql = "SELECT * FROM usuarios";
        $result = $conn->query($sql);

        $usuarios = [];

        while ($row = $result->fetch_assoc()) {
            $usuarios[] = $row;
        }

        return $usuarios;
    }

    public static function buscarPorId($conn) {
        $sql = "SELECT * FROM usuarios WHERE id = 1";
        $result = $conn->query($sql);
        $busca = [];

        while($row = $result->fetch_assoc()) {
            $busca[] = $row;
        }

        return $busca;
    }
}

?>
