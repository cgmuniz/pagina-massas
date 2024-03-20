import Form from '../components/home/form/Form';
import Agenda from '../components/home/agenda/Agenda';
import OpeningCarousel from '../components/carousels/OpeningCarousel';
import SobreCard from '../components/home/sobreLab/SobreCard';
import { Center } from '@chakra-ui/react';

import data from '../data/components-mock.json';
import { CardSlider } from '../components/carousels/CardCarousel';
import Livros from '../components/home/livros/Livros';

function Home(){
    return(
        <div>
            <div>
                <h1 className='Corpo' style={{textAlign:'center'}}>Laboratório de Espectrometria de Massas Aplicada à Biomoléculas (LEMBio)</h1>
                <OpeningCarousel />
            </div>
            <div style={{marginBottom:120}}>
                <Center>
                {data.sobre_cards.map((sobre_card) => (
                    <SobreCard
                    key={sobre_card.title}
                    card={sobre_card}
                    />
                ))}
                </Center>
            </div>
            <Livros />
            <div style={{marginTop:40, marginBottom:60}}>
                <div className='categoriaTitle'>
                    <h2>Notícias</h2>
                </div>
                {data.noticias && <CardSlider cards={data.noticias} />}
            </div>
            <div style={{marginTop:40, marginBottom:60}}>
                <div className='categoriaTitle'>
                    <h2>Últimos trabalhos publicados</h2>
                </div>
                {data.publicados && <CardSlider cards={data.publicados} />}
            </div>
            <div className='categoriaTitle'>
                <h2>Agenda de equipamentos</h2>
            </div>
            <div className='Corpo'>
                <Agenda />
            </div>
            <div>
                <div className='categoriaTitle'>
                    <h2>Fale conosco</h2>
                </div>
                <div className='Corpo'>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Home
