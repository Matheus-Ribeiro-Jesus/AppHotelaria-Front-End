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
}
?>
