import { Center } from '@chakra-ui/react';
import './Header.css'
import Logo from '../../../img/UnifespLogo.png'

function Header() {
  return (
    <div id="Header">
      <Center style={{color:'white', paddingTop:10, paddingBottom:10}}>
        <a href='https://www.unifesp.br/' target="_blank" rel="noreferrer">
          <img
            alt="Logo UNIFESP"
            src={Logo}
            height="100"
          />
        </a>
        <p id='tituloUnifesp'>Universidade Federal de São Paulo</p>
      </Center>
    </div>
  )
}
  
export default Header
  