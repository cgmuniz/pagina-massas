import React, { useState, useEffect } from 'react';

import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import './sobreCard.css'
import sobreLabImg from '../../../img/home/LEMBio.jpeg'

function SobreCard ({card}) {
    const {image, title, content} = card

    const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        function handleResize() {
        setIsTablet(window.innerWidth <= 768);
        setIsMobile(window.innerWidth <= 480);
        }

        // Adicione um ouvinte de evento para o redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Certifique-se de remover o ouvinte de evento quando o componente for desmontado
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const tamanho = isMobile ? 1 : (isTablet ? 2 : 3);

    return (
        <Flex direction={tamanho < 3 && 'column'} className="flexSobre" >
            <Image
                className="imgSobre"
                src={sobreLabImg}
                alt={image.alt}
                w={400}
                maxH={500}
                objectFit={"cover"}
                borderLeftRadius={tamanho === 3 && 8}
                borderTopRightRadius={tamanho < 3 && 8}
                borderTopLeftRadius={8}
            />
            <VStack
             p={25}
             spacing={16}
             align={"flex-start"}
             maxW={900} minW={200}
             minH={300} maxH={480}
             overflow={tamanho < 3 && "auto"}>
                <Heading size={"lg"}>{title}</Heading>
                <Text color={"#424242"} lineHeight={2} whiteSpace="pre-line" overflowY={tamanho === 3 && "auto"}>{content}</Text>
            </VStack>
        </Flex>
    );
}

export default SobreCard