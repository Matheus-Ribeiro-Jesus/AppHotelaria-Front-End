<?php
require_once __DIR__ . "/../models/QuartosModel.php";


class QuartosController
{
    public static function create($conn, $data)
    {

        $camposObrigatorios = ["nome", "numero", "qtd_cama_casal", "qtd_cama_solteiro", "preco", "disponivel"];
        $erros = [];

        foreach ($camposObrigatorios as $campo) {
            if (!isset($data[$campo]) || empty($data[$campo])) {
                $erros[] = $campo;
            }
        }

        if (!empty($erros)) {
            return jsonResponse(['message' => 'Erro, falta o comando: ' . implode(',', $erros)], 404);
        }


        $result = QuartosModel::create($conn, $data);
        if ($result) {
            return jsonResponse(['message' => 'Quarto criado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Deu merda'], 400);
        }
    }
    public static function getAll($conn)
    {
        $listaQuartos = QuartosModel::listarTodos($conn);
        return jsonResponse($listaQuartos);
    }

    public static function getBydId($conn, $id)
    {
        $listarporId = QuartosModel::getById($conn, $id);
        return jsonResponse($listarporId);
    }

    public static function delete($conn, $id)
    {
        $result = QuartosModel::delete($conn, $id);
        if ($result) {
            return jsonResponse(['message' => 'Quarto deletado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha ao deletar'], 400);
        }
    }

    public static function update($conn, $id, $data)
    {
        $result = QuartosModel::update($conn, $id, $data);
        if ($result) {
            return jsonResponse(['message' => 'Quarto atualizado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Falha ao atualizar o quarto'], 400);
        }
    }

    public static function pesquisarDisponivel($conn, $data)
    {
        $result = QuartosModel::pesquisarDisponivel($conn, $data);
        $pessoas = $data['pessoas'] ?? null;

        if ($result && count($result) > 0) {
            $quartosFiltrados = [];

            foreach ($result as $quarto) {
                $capacidade = ($quarto['qtd_cama_casal'] * 2) + $quarto['qtd_cama_solteiro'];
                $quarto['capacidade'] = $capacidade;

                // Se tiver filtro de pessoas, só adiciona se couber
                if ($pessoas) {
                    if ($capacidade >= $pessoas) {
                        $quartosFiltrados[] = $quarto;
                    }
                } else {
                    // Se não tiver filtro, adiciona todos
                    $quartosFiltrados[] = $quarto;
                }
            }

            if (count($quartosFiltrados) > 0) {
                return jsonResponse([
                    'status' => 'sucesso',
                    'message' => 'Quartos Disponíveis encontrados',
                    'data' => array_values($quartosFiltrados)
                ], 200);
            } else {
                return jsonResponse([
                    'message' => 'Nenhum quarto comporta a quantidade de pessoas informada',
                    'data' => []
                ], 404);
            }
        } else {
            return jsonResponse([
                'message' => 'Nenhum quarto disponível para este período',
                'data' => []
            ], 404);
        }
    }


}


?>