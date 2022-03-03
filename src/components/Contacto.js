import { useState } from "react"
import styled from "styled-components"

import { Titulo } from "../styles/components/globalStyles"

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 100px 1fr;
    grid-template-areas:
        "nombre nombre apellido apellido"
        "email email email email"
        "consulta consulta consulta consulta"
        ". boton boton ."
    ;
    grid-gap: 20px 12px;
    margin-bottom: 80px;

    div {
        &:nth-child(1) {
            grid-area: nombre;
        }
        &:nth-child(2) {
            grid-area: apellido;
        }
        &:nth-child(3) {
            grid-area: email;
        }
        &:nth-child(4) {
            grid-area: consulta;
        }
        
    }

    button {
        grid-area: boton;
        border: none;
        outline: none;
        height: 50px;
        background-color: #E96B00;
        border-radius: 20px;
        color: #FFFFFF;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        cursor: pointer;
    }

    @media (min-width: 781px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas:
            "nombre nombre consulta consulta"
            "apellido apellido consulta consulta"
            "email email consulta consulta"
            ". boton boton ."
        ;
    }

`
const ContInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
        font-size: 15px;
        font-weight: 300;
        color: #E96B00;
    }
    
    input {
        width: 100%;
        height: 30px;
        margin-top: 2px;
        border: none;
        outline: 1px solid #E96B00;
        border: 1px solid #E96B00;
        border-radius: 5px;
        padding-left: 4px;
        color: #002270;
    }

    textarea {
        width: 100%;
        height: 100%;
        margin-top: 2px;
        border: none;
        outline: 1px solid #E96B00;
        border: 1px solid #E96B00;
        border-radius: 5px;
        padding-top: 4px;
        padding-left: 4px;
        resize: none;
        color: #002270;
    }

    @media (min-width: 781px) {
        input {
            height: 40px;
        }
    }
`

const Contacto = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [consulta, setConsulta] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeConsulta = (e) => {
        setConsulta(e.target.value)
    }

    const resetName = () => {
        setName('')
    }
    const resetLastName = () => {
        setLastName('')
    }
    const resetEmail = () => {
        setEmail('')
    }
    const resetConsulta = () => {
        setConsulta('')
    }

    const onSubmit = e => {
        e.preventDefault()
        resetName()
        resetLastName()
        resetEmail()
        resetConsulta()
        window.location.href = `mailto:sariasm948@gmail.com?subject=Consulta-Moproinca&body=Nombre%3A%20${name+''+lastName}%0ACorreo%3A%20${email}%0AConsulta%3A%20${consulta}`
    }

    return (
        <div>

            <Titulo>
                <p>Contacto</p>
            </Titulo>

            <Form onSubmit={onSubmit}>

                <ContInput>
                    <label>Nombre</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChangeName}
                        required
                    />
                </ContInput>

                <ContInput>
                    <label>Apellido</label>
                    <input
                        type='text' name='lastName'
                        value={lastName}
                        onChange={onChangeLastName}
                        required
                    />
                </ContInput>

                <ContInput>
                    <label>Correo electronico</label>
                    <input
                        type='emai'
                        name='email'
                        value={email}
                        onChange={onChangeEmail}
                        required
                    />
                </ContInput>

                <ContInput>
                    <label>Motivo de consulta</label>
                    <textarea
                        name='consulta'
                        value={consulta}
                        onChange={onChangeConsulta}
                        required
                    />
                </ContInput>

                <button type='submit'>Enviar</button>

            </Form>

        </div>
    )
}

export default Contacto