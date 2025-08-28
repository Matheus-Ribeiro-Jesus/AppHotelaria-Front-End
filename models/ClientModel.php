<?php 
    class ClientModel{
        public static function listarTodos($conn){
            $sql = "SELECT * FROM usuarios";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            
            return $conn->query($sql);
        }
        
    }
    
?>
