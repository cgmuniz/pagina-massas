import React, { useState, useEffect } from 'react';

import './Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useLocation } from 'react-router-dom';

import { AiFillEye } from 'react-icons/ai'
import { Center } from '@chakra-ui/react';


function NavLab(props) {
  const location =  useLocation();

  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        function handleResize() {
        setIsTablet(window.innerWidth <= 1000);
        }

        // Adicione um ouvinte de evento para o redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Certifique-se de remover o ouvinte de evento quando o componente for desmontado
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const expand = isTablet ? false : 'md'

  return (
    <Navbar key={expand} expand={expand} className="Nav" sticky="top" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{fontSize:22}} href="/">LEMBio</Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton style={{backgroundColor: "#2a7445", color:'white'}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  LEMBio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className={ location.pathname === '/' ? 'nav-link active': 'nav-link'} href="/">Início</Nav.Link> 
                  <Nav.Link className={ location.pathname === '/coordenadores' ? 'nav-link active': 'nav-link'} href="coordenadores">Coordenadores</Nav.Link>
                  <Nav.Link className={ location.pathname === '/comite' ? 'nav-link active': 'nav-link'} href="comite">Comitê de usuários</Nav.Link>
                  <Nav.Link className={ location.pathname === '/equipe' ? 'nav-link active': 'nav-link'} href="equipe">Equipe</Nav.Link>
                  <Nav.Link className={ location.pathname === '/equipamentos' ? 'nav-link active': 'nav-link'} href="equipamentos">Equipamentos</Nav.Link>
                  <Nav.Link className={ location.pathname === '/publicacoes' ? 'nav-link active': 'nav-link'} href="publicacoes">Publicações</Nav.Link>
                  <Nav.Link className={ location.pathname === '/colaboradores' ? 'nav-link active': 'nav-link'} href="colaboradores">Colaboradores</Nav.Link>
                  <Nav.Link className={ location.pathname === '/apoios' ? 'nav-link active': 'nav-link'} href="apoios">Apoios</Nav.Link>
                </Nav>
              </Offcanvas.Body>
              {isTablet &&
              <Navbar.Collapse id='visitasMenu' className="justify-content-end">
                <Center>
                  <AiFillEye size='25px' fill='#33d17a'/>
                  <Navbar.Text style={{color:'black', fontSize:'18px'}}>
                    {props.n_visitas}
                  </Navbar.Text>
                </Center>
              </Navbar.Collapse>}
            </Navbar.Offcanvas>

          {!isTablet &&
          <Navbar.Collapse className="justify-content-end">
            <Center>
              <AiFillEye size='25px' fill='#33d17a'/>
              <Navbar.Text style={{color:'white', fontSize:'18px'}}>
                {props.n_visitas}
              </Navbar.Text>
            </Center>
          </Navbar.Collapse>}

        </Container>
      </Navbar>
  )
}
  
export default NavLab
  