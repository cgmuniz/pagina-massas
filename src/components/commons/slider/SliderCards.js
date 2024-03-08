import React from "react";
import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import './slider.css'

function SliderCards ({card}) {
    const {image, publishDate, title, content, link} = card

    return (
        <Flex direction={"column"} className="flexCards" >
            <Image
                className="imgCards"
                src={image.url}
                alt={image.alt}
                maxW={450}
                objectFit={"cover"}
                borderTopRadius={8}
            />
            <VStack p={25} spacing={16} align={"flex-start"} maxW={700} h={400} overflow={"auto"}>
                <Text style={{color: "#757575",fontWeight: 'semibold', fontSize: '14px',}}>{publishDate}</Text>                
                <Heading style={{fontSize:23}}>{title}</Heading>
                <Text >{content}</Text>
                {link !== '' && <a href={link} target="_blank" rel="noreferrer">Ver mais</a>}
            </VStack>
        </Flex>
    );
}

export default SliderCards