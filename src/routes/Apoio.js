import { Center } from '@chakra-ui/react'
import '../styles/apoio.css'
import capes from '../img/apoio/capes-icon.png'
import cnpq from '../img/apoio/cnpq-icon.png'
import fap from '../img/apoio/fap-icon.png'
import fapesp from '../img/apoio/fapesp-icon.png'
import finep from '../img/apoio/finep-icon.png'
import colsan from '../img/apoio/colsan-icon.png'

function Apoio(){
    return(
        <div>
            <h2 className='categoriaTitle'>Apoios</h2>
            <div className="Corpo">
                <Center id='apoio-box'>
                    <Center style={{marginTop:60}} className='linha-apoio'>
                        <a href='https://fapesp.br/' target="_blank" rel="noreferrer">
                            <img 
                                className="imgApoio"
                                src={fapesp}
                                alt="FAPESP"
                                />
                        </a>
                        <a href='http://www.finep.gov.br/' target="_blank" rel="noreferrer">
                            <img 
                                className="imgApoio"
                                src={finep}
                                alt="FINEP"
                                />
                        </a>
                        <a href='https://www.gov.br/cnpq/pt-br' target="_blank" rel="noreferrer">
                            <img 
                                className="imgApoio"
                                src={cnpq}
                                alt="CNPQ"
                                />                    
                        </a>
                    </Center>
                    <Center style={{marginTop:100}} className='linha-apoio'>
                        <a href='https://www.gov.br/capes/pt-br' target="_blank" rel="noreferrer">
                            <img 
                                className="imgApoio"
                                src={capes}
                                alt="CAPES"
                                />
                        </a>
                        <a href='https://fapunifesp.edu.br/' target="_blank" rel="noreferrer">
                            <img 
                                className="imgApoio"
                                src={fap}
                                alt="FAPUNIFESP"
                                />
                        </a>
                        <a href='https://colsan.org.br/site/' target="_blank" rel="noreferrer">
                            <img 
                                className="imgApoio"
                                src={colsan}
                                alt="COLSAN"
                                />
                        </a>
                    </Center>
                </Center>
            </div>
        </div>
    )
}

export default Apoio