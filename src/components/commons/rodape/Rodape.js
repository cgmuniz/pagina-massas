import './Rodape.css'

function Rodape() {
  return (
    <div className="Rodape">
      <div className="ConteudoRodape">
        <div style={{textAlign:"center"}}>
          <p className="textoRodape" style={{fontSize: 14}}>© 2013 a 2023 - Universidade Federal de São Paulo - Unifesp</p>
          <p style={{fontSize: 12}}>Rua Sena Madureira, n.º 1.500 - Vila Clementino - São Paulo - SP - CEP: 04021-001</p>
        </div>
      </div>
      <p style={{textAlign:'right', fontSize:11, marginRight:10, marginBottom:0, paddingBottom:5}}>Developed by: Cauã Santos</p>
    </div>
  )
}

export default Rodape
