import { Center, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import '../styles/equipamentos.css'
import Synapt from '../img/equipamentos/Synapt.jpg'
import micro from '../img/equipamentos/microTOFII.jpg'
import amazonETD from '../img/equipamentos/amazonETD.png'
import Modal from 'react-modal'

import data from '../data/components-mock.json'

import { CgClose } from "react-icons/cg"

Modal.setAppElement('#root')

function Equipamentos () {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const [imageEquip, setImage] = useState({ path: '', alt: '' });

    function openModal(newIndex, imageEquip = {}){
        setIsOpen(true);
        setIndex(newIndex);
        setImage(imageEquip);
        document.body.classList.add('modal-open');
    }

    function closeModal(){
        setIsOpen(false);
        document.body.classList.remove('modal-open');
    }

    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1200);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        function handleResize() {
        setIsTablet(window.innerWidth <= 1200);
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

    return(
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <p onClick={closeModal} className="x">
                    <CgClose size='35px' className="closeIcon"/>
                </p>
                <Center>
                    <Flex direction={tamanho < 3 && 'column'} id="flexEquip"
                        borderRadius={0}
                        borderLeftRadius={tamanho === 3 && 30}
                        borderTopRightRadius={tamanho < 3 && 30}
                        borderTopLeftRadius={30}
                    >
                        <Image
                            className="imgEquipModal"
                            src={imageEquip.path === 'Synapt' ? Synapt :
                            (imageEquip.path === 'amazonETD' ? amazonETD :
                            (imageEquip.path === 'micro' ? micro : ''))}
                            alt={imageEquip.alt}
                            w={400}
                            maxH={500}
                            objectFit={"cover"}
                            borderLeftRadius={tamanho === 3 && 30}
                            borderTopRightRadius={tamanho < 3 && 30}
                            borderTopLeftRadius={30}
                        />
                        <VStack
                        p={25}
                        spacing={16}
                        align={"flex-start"}
                        maxW={600} minW={200}
                        minH={300} maxH={480}
                        overflow="auto">
                            <Heading style={{fontSize: 25}}>{data.equipamentos[index].title}</Heading>
                            <Text
                            color={"#424242"}
                            lineHeight={2}
                            whiteSpace="pre-line"
                            overflowY={tamanho === 3 && "auto"}>
                                {data.equipamentos[index].content}
                            </Text>
                        </VStack>
                    </Flex>
                </Center>
            </Modal>
            <h2 className='categoriaTitle'>Equipamentos disponíveis</h2>
            <div>
                <Center className="centerEquips" flexDirection={tamanho < 3 && 'column'} style={{marginTop:100}}>
                    <Center className="englobaImgEquip"
                    onClick={()=>openModal(0, {path: 'Synapt', alt: 'Synapt G2 HDMS'})}>                     
                        <img 
                        height={340}
                        className="imgEquip"
                        src={Synapt}
                        alt="Synapt G2 HDMS"
                        />
                        <h5 className="h5img">Synapt G2 HDMS</h5>
                    </Center>                    
                    <Center className="englobaImgEquip"
                    onClick={()=>openModal(1, {path: 'amazonETD', alt: 'AmaZon ETD'})}> 
                        <img 
                        height={280}
                        className="imgEquip"
                        src={amazonETD}
                        alt="AmaZon ETD"
                        />
                        <h5 className="h5img">AmaZon ETD</h5>
                    </Center>                    
                    <Center className="englobaImgEquip"
                    onClick={()=>openModal(2, {path: 'micro', alt: 'micrOTOF II'})}> 
                        <img 
                        className="imgEquip"
                        src={micro}
                        alt="micrOTOF II"
                        />
                        <h5 className="h5img">micrOTOF II</h5>
                    </Center>
                </Center>
            </div>
        </div>
    )
}

export default Equipamentos