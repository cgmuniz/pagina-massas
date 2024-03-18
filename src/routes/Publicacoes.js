import React from "react";
import '../styles/pub.css'
import { Center } from "@chakra-ui/react";


export default class Publicacoes extends React.Component{
    constructor() {
        super();
        this.state = {
            db: [],
        };
        this.exibirPublicacoes();
    }

    exibirPublicacoes() {
        fetch("http://localhost:8000/pubs.php")
//        fetch("/api/pubs.php")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    db: responseJson,
                });
            });
    }

    render() {
        const { db } = this.state;

        // Agrupar publicações por ano
        const publicacoesPorAno = {};
        db.forEach((row) => {
            const ano = row.ano;
            if (!publicacoesPorAno[ano]) {
                publicacoesPorAno[ano] = [];
            }
            publicacoesPorAno[ano].push(row);
        });

        return (
            <div>
                {Object.entries(publicacoesPorAno).map(([ano, publicacoes]) => (
                    <div key={ano}>
                        <h2 style={{marginTop:100}} className="categoriaTitle">{ano}</h2>
                        {publicacoes.map((row) => (
                            <div className="Corpo" key={row.id}>
                                <div className="textoPub">
                                    <Center style={{padding:20}}>({row.id})</Center>
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                        {row.texto}
                                        <a style={{marginTop:2}} href={row.link} target="_blank" rel="noreferrer">{row.link}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
