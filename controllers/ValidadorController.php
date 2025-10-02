<?php

class ValidatorController{

    public static function validate_data($data, $labels){
        $pendets = [];
        foreach ($labels as $lbl){
            if (!isset($data[$lbl]) && empty($data[$lbl]) ){
                $pendets[] = $lbl;
            }
        }
        return $pendets;
    }

    public static function fix_hours($data, $horas){
        $dateEHora = new DateTime($data);
        $dateEHora->setTime($horas, 0, 0);
        return $dateEHora->format('Y-m-d H:i:s');
    }
}

?>