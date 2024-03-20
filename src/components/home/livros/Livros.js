import React, { useState, useEffect } from 'react';
import { VStack, Image, Flex } from '@chakra-ui/react'
import './Livros.css'
import { Slider } from "../../commons/slider"
import { Swiper } from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { animated, useSpring } from '@react-spring/web'
import { Center } from "@chakra-ui/react";

import Peptidomics from '../../../img/livros/peptidomics.webp'
import Proteomics from '../../../img/livros/proteomics.jpg'
import Mass from '../../../img/livros/mass.webp'
import Bioscprt from '../../../img/livros/bioscrpt.png'

const Boop = ({
    x = 0,
    y = 0,
    rotation = 0,
    scale = 1,
    timing = 150,
    children,
  }) => {
    const [isBooped, setIsBooped] = React.useState(false);

    const style = useSpring({
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isBooped
          ? `translate(${x}px, ${y}px)
             rotate(${rotation}deg)
             scale(${scale})`
          : `translate(0px, 0px)
             rotate(0deg)
             scale(1)`,
        config: {
          tension: 300,
          friction: 10,
        },
      });

    React.useEffect(() => {
      if (!isBooped) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);

      return () => {
        window.clearTimeout(timeoutId);
      };

    }, [isBooped, timing]);

    const trigger = () => {
      setIsBooped(true);
    };
    
    return (
        <animated.span onMouseEnter={trigger} style={style}>
            {children}
        </animated.span>
    );
};

function Livros() {
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1300);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        function handleResize() {
        setIsTablet(window.innerWidth <= 1300);
        setIsMobile(window.innerWidth <= 600);
        }

        // Adicione um ouvinte de evento para o redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Certifique-se de remover o ouvinte de evento quando o componente for desmontado
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const tamanho = isMobile ? 1 : (isTablet ? 2 : 3);

    const settings = {
        spaceBetween: 35,
        slidesPerView: tamanho,
        navigation: true,
        pagination: true && {
            clickable: true
        },
        draggable: tamanho < 3
    }

    return(
        <div>
            <div className='categoriaTitle'>
                <h2>Aprenda mais sobre</h2>
            </div>
            <div  id='LivrosDiv' className={tamanho > 2 && 'Corpo'}>
                <Slider settings={settings}>
                    <Swiper modules={[]} {...settings}>
                        <SwiperSlide>
                            <Boop x={0} y={-10} scale={1} rotation={0} timing={150}>
                                <a className="linkLivros" href="https://bioscriptistica.com.br/" target="_blank" rel="noreferrer">
                                    <Flex className='Livro' direction={"column"}>
                                        <Image
                                            className="imgLivro"
                                            src={Bioscprt}
                                            alt='Bioscriptistica: linguagem R e Python com aplicações em bioinformática'
                                        />
                                        <VStack className="txtLivo" p={25} spacing={16}>
                                            <Center><h5 style={{textAlign:'center'}}>Bioscriptística: Python e R na bioinformática</h5></Center> 
                                        </VStack>        
                                    </Flex>
                                </a>
                            </Boop>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper modules={[]} {...settings}>
                        <SwiperSlide>
                            <Boop x={0} y={-10} scale={1} rotation={0} timing={150}>
                                <a className="linkLivros" href="https://link.springer.com/book/10.1007/978-1-4939-7537-2" target="_blank" rel="noreferrer">
                                    <Flex className='Livro' direction={"column"} >
                                        <Image
                                            className="imgLivro"
                                            src={Peptidomics}
                                            alt='Livro "Peptidomics: Methods and Strategies"'
                                        />
                                        <VStack className="txtLivo" p={25} spacing={16}>
                                            <Center><h5>Peptidômica</h5> </Center>
                                        </VStack>        
                                    </Flex>
                                </a>
                            </Boop>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper modules={[]} {...settings}>
                        <SwiperSlide>
                            <Boop x={0} y={-10} scale={1} rotation={0} timing={150}>
                                <a className="linkLivros" href="https://onlinelibrary.wiley.com/doi/book/10.1002/0471721980" target="_blank" rel="noreferrer">
                                    <Flex className='Livro' direction={"column"}>
                                        <Image
                                            className="imgLivro"
                                            src={Proteomics}
                                            alt='Livro "Protein Sequencing and Identification Using Tandem Mass Spectrometry"'
                                        />
                                        <VStack className="txtLivo" p={25} spacing={16}>
                                            <Center><h5>Proteômica</h5></Center> 
                                        </VStack>        
                                    </Flex>
                                </a>
                            </Boop>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper modules={[]} {...settings}>
                        <SwiperSlide>
                            <Boop x={0} y={-10} scale={1} rotation={0} timing={150}>
                                <a className="linkLivros" href="https://link.springer.com/book/10.1007/978-3-319-54398-7" target="_blank" rel="noreferrer">
                                    <Flex className='Livro' direction={"column"}>
                                        <Image
                                            className="imgLivro"
                                            src={Mass}
                                            alt='Livro "Mass Spectrometry: A Textbook"'
                                        />
                                        <VStack className="txtLivo" p={25} spacing={16}>
                                            <Center><h5 style={{textAlign:'center'}}>Espectrometria de Massas</h5></Center> 
                                        </VStack>        
                                    </Flex>
                                </a>
                            </Boop>
                        </SwiperSlide>
                    </Swiper>
                </Slider>
            </div>
        </div>
        
    )
}

export default Livros