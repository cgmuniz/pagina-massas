import React, { useState, useEffect } from 'react';
import { Center } from "@chakra-ui/react";
import { Slide, Slider } from "../commons/slider";
import SliderCards from "../commons/slider/SliderCards";

export function CardSlider({cards}){

    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1300);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        function handleResize() {
        setIsTablet(window.innerWidth <= 1300);
        setIsMobile(window.innerWidth <= 700);
        }

        // Adicione um ouvinte de evento para o redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Certifique-se de remover o ouvinte de evento quando o componente for desmontado
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const tamanho = isMobile ? 1 : (isTablet ? 2 : 3);

    if(cards.length === 1){
        return (
            <Center>
                <SliderCards card={cards[0]} />
            </Center>
        )
    }

    const settings = {
        spaceBetween: 35,
        slidesPerView: cards.length < tamanho ? cards.length : tamanho,
        navigation: cards.length >= tamanho,
        pagination: cards.length >= tamanho && {
            clickable: true
        },
        draggable: cards.length >= tamanho
    }

    return (
        <Slider settings={settings}>
            {cards.map((card) => (
                <Slide key={card.title}>
                    <SliderCards card={card} />
                </Slide>
            ))}
        </Slider>
    )
}