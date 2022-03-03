import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    height: min-content;
    padding: 0 35px;

    @media (min-width: 426px) {
        padding: 0 75px;
    }
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

        @media (min-width: 781px) {
            font-size: 30px;
        }
    }

    p {
        font-size: 25px;
        color: #E96B00;
        font-family: 'Poppins', sans-serif;
    }

    @media (min-width: 781px) {
        width: 260px;

        p {
            font-size: 30px;
        }
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

    @media (min-width: 515px) {
        width: 40%;
    }

    @media (min-width: 685px) {
        font-size: 16px;
    }

    @media (min-width: 838px) {
        font-size: 19px;
    }

    @media (min-width: 1154px) {
        font-size: 21px;
    }
`