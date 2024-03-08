<?php
include ("ClassConexao.php");
class ClassVisitas extends ClassConexao{
    private $Id, $Ip , $Data , $Hora , $Limite;

    #Construtor para setar atributos
    public function __construct()
    {
        $this->Id=0;

        $this->Ip = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'IP Desconhecido');

        $this->Data=date("Y/m/d");
        $this->Hora=date("H:i");
        $this->Limite=600;
    }

    #Verifica se o usuário recebeu visita recentemente
    public function VerificaUsuario()
    {   
        $Select=$this->Conectar()->prepare("select * from visitasLEMBio where Ip=:ip and Data=:datas order by Id desc");
        $Select->bindParam(":ip",$this->Ip,PDO::PARAM_STR);
        $Select->bindParam(":datas",$this->Data,PDO::PARAM_STR);
        $Select->execute();
        if($Select->rowCount() == 0){
            $this->InserindoVisitas();
        }else{
            $FSelect=$Select->fetch(PDO::FETCH_ASSOC);
            $HoraDB=strtotime($FSelect['Hora']);
            $HoraAtual=strtotime($this->Hora);
            $HoraSubtracao=$HoraAtual-$HoraDB;

            if($HoraSubtracao > $this->Limite){
                $this->InserindoVisitas();
            }
        }

        $Select=$this->Conectar()->prepare("select * from visitasLEMBio");
        $Select->execute();

        echo $Select->rowCount();
    }

    #Inseri a visita no banco de dados
    private function InserindoVisitas()
    {
        $Select=$this->Conectar()->prepare("insert into visitasLEMBio values (:id , :ip , :datas , :hora)");
        $Select->bindParam(":id",$this->Id,PDO::PARAM_STR);
        $Select->bindParam(":ip",$this->Ip,PDO::PARAM_STR);
        $Select->bindParam(":datas",$this->Data,PDO::PARAM_STR);
        $Select->bindParam(":hora",$this->Hora,PDO::PARAM_STR);
        $Select->execute();
    }
}