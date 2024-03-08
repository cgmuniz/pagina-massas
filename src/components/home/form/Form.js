import { useState } from 'react';
import './Form.css'
import emailjs from '@emailjs/browser'
import { Center } from '@chakra-ui/react';

function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();
        
        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_z6c5h7x", "template_cvolkcl", templateParams, "O-Iya3jqlAeZm8PsA")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')

            if(response.status === 200){
                alert("Mensagem enviada com sucesso!")
            }

        }, (err) => {
            console.log("ERRO: ", err)
        })
        
    }

    return(
        <Center>
            <div className = 'Form'>
            <form onSubmit={sendEmail}>
                <div className="InputForm">
                    <label className="labelInput">
                        Nome:
                        <br />
                        <input
                            type="name"
                            placeholder = "Digite seu nome" 
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </label>
                </div>
                <div className="InputForm">
                    <label className="labelInput">
                        Email:
                        <br />
                        <input className="inputlabel"
                            type="email"
                            placeholder = "Digite seu email" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                </div>
                <div className="InputForm">
                    <label className="labelInput">
                        Descrição:
                        <br />
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            rows={7}
                            cols={90}
                            placeholder="Descreva o que deseja"
                            wrap = "soft"
                            maxLength={500}
                        />
                    </label>
                </div>
                
                <div class="buttons">
                <button class="blob-btn" type='submit'>
                    Enviar
                    <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                    </span>
                    </span>
                </button>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                </defs>
                </svg>

            </form>
        </div>
        </Center>
        
    )
}

export default Form