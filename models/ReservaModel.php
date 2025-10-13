<?php
class ReservaModel{
    public static function create($conn, $data) {
        $sql = "INSERT INTO reservas (pedido_id, quarto_id, adicional_id, inicio, fim) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iiiss",
            $data["pedido_id"],
            $data["quarto_id"],
            $data["adicional_id"],
            $data["inicio"],
            $data["fim"]
        );
        return $stmt->execute();
    }

    public static function getByPedido($conn, $id) {
        $sql = "SELECT * FROM reservas WHERE pedido_id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }
    public static function isConflito($conn, $quarto_id, $inicio, $fim) {
        $sql = "SELECT * FROM reservas WHERE quarto_id = ? AND inicio < ? AND fim > ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iss", $quarto_id, $fim, $inicio);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->num_rows > 0;
    }

}   
?>