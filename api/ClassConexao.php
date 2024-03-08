<?php

abstract class ClassConexao {

    public function Conectar()
    {
        try {
            $Con = new PDO('mysql:host=localhost;dbname=sistema','lab','proteomics');
            return $Con; 
        } catch (PDOExcepction $Erro) {
            return $Erro -> getMessage();
        }
    }

}