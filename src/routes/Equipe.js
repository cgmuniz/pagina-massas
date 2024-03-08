import '../styles/coordenadores.css'

function Equipe(){
    return(
        <div>
            <h2 className='categoriaTitle'>Equipe Técnica</h2>
            <div  className="Corpo">
                <div className="coord">
                    <h5>Juliana Valentim Oliveira de Azevedo </h5>
                    <a href='http://lattes.cnpq.br/0376229633918852' target="_blank" rel="noreferrer">
                        <p>Currículo Lattes</p>
                    </a>
                    <p>Departamento de Bioquímica</p>
                    <p>Escola Paulista de Medicina/UNIFESP</p>
                </div>
                <div className="coord">
                    <h5>Dra. Michelle Tiveron Passos Riguetti</h5>
                    <a href='http://lattes.cnpq.br/8395380518958842' target="_blank" rel="noreferrer">
                        <p>Currículo Lattes</p>
                    </a>
                    <p>Departamento de Medicina</p>
                    <p>Escola Paulista de Medicina/UNIFESP</p>
                </div>
            </div>
        </div>
    )
}

export default Equipe