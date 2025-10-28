<?php
class fotoModel
{
    public static function create($conn, $data){
        $sql = "INSERT INTO imagens (nome) VALUES(?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s",
            $data["nome"],
        );

        if($stmt->execute()){
            return $conn->insert_id;
        }
        return false;
    }
 
    public static function getAll($conn){
        $sql = "SELECT * FROM imagens";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id){
        $sql = "SELECT * FROM imagens WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function getByRoomId($conn, $id){
        $sql = "SELECT i.nome
        FROM upimages upi
        JOIN imagens i ON upi.image_id = i.id
        WHERE upi.quarto_id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $photos = [];
        while ($row = $result->fetch_assoc()){
            $photos[] = $row['nome'];
        }
        return $photos;
    }

    public static function createRelationsRoom($conn, $idRoom, $idPhoto){
        $sql = "INSERT INTO upimages (quarto_id, image_id) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $idRoom, $idPhoto);
        if($stmt->execute()){
            return $conn->insert_id;
        }
        return false;
    }

    public static function delete($conn, $id){
        $sql = "DELETE FROM imagens WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

    public static function update($conn, $id, $data){
        $sql = "UPDATE imagens  SET nome = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si",
        $data["nome"],
        $id
    );
        return $stmt->execute();
    }


}
?>