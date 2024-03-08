<?php
include ("ClassConexao.php");
class ClassPubs extends ClassConexao{

    public function retornaPubs()
    {
        $Select=$this->Conectar()->prepare("select * from pubsLEMBio");
        $Select->execute();

        $J=[];
        $I=0;

        while($Fetch=$Select->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch['id'],
                "ano"=>$Fetch['ano'],
                "texto"=>$Fetch['texto'],
                "link"=>$Fetch['link'],
            ];
            $I++;
        }

        echo json_encode($J);
    }
}