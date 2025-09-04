<?php
class QuartosModel{
    public static function create($conn, $data)
    {
        $sql = "INSERT INTO quartos (nome, numero, qtd_cama_casaL, qtd_cama_solteiro, preco, disponivel) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidi",
            $data["nome"],
            $data["numero"],
            $data["qtd_cama_casal"],
            $data["qtd_cama_solteiro"],
            $data["preco"],
            $data["disponivel"]

        );
        return $stmt->execute();
    }
}
?>