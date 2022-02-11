import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 290px;
    height: min-content;
    margin: 0 auto;
`

export const Titulo = styled.div`
    width: 230px;
    height: max-content;
    position: relative;
    margin-bottom: 25px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #E96B00;
    }

    p {
        font-size: 25px;
        color: #E96B00;
        font-family: 'Poppins', sans-serif;
    }
`

export const DivSeparacion = styled.div`
    width: 100%;
    height: 50px;
    background-color: transparent;
`

export const Texto = styled.p`
    font-size: 15px;
    font-weight: 300;
    text-align: justify;
`