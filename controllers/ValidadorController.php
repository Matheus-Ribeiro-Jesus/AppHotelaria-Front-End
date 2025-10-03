<?php

class ValidatorController{

     public static function validate_data($data, $labels){
        $pendets = [];
        foreach ($labels as $lbl){
            if (!isset($data[$lbl]) && empty($data[$lbl]) ){
                $pendets[] = $lbl;
            }
        }
        if(!empty($pendets) ){
            $pendets = implode(", ", $pendets);
            jsonResponse(['message'=> "Erro, Falta o campo: ".$pendets], 400);
            exit;
        }
    }

    public static function fix_hours($data, $horas){
        $dateEHora = new DateTime($data);
        $dateEHora->setTime($horas, 0, 0);
        return $dateEHora->format('Y-m-d H:i:s');
    }
}

?>