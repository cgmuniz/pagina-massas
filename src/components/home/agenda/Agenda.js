import { Center } from "@chakra-ui/react"
import './Agenda.css'

function Agenda(){
    return(
        <div className='Agenda'>
            <Center style={{marginTop:60}}>
                <iframe 
                    title="agenda"
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTitle=0&src=bGVtYmlvLnVuaWZlc3BAZ21haWwuY29t&color=%23039BE5"
                    style={{border:0, width:900, height:600, frameborder:0, scrolling:"no"}}
                />
            </Center>
        </div>
    )
}

export default Agenda