import styled, { keyframes } from 'styled-components'

import logo from '../assets/Iconos/Moproinca-logo.svg'
import simpleLogo from '../assets/Iconos/Moproinca-simple-logo.svg'
import menu from '../assets/Iconos/menu.svg'
import { useDispatch ,useSelector } from 'react-redux'
import { openNavbar } from '../actions/UI'
import DescktopNavbar from '../UI/DescktopNavbar'

const ocultarLogo = keyframes`
    0% {
        transform: translateY(8px);
    }
    100% {
        transform: translateY(-66px);
    }
`

const mostrarLogo = keyframes`
    0% {
        transform: translateY(-66px);
    }
    100% {
        transform: translateY(8px);
    }
`

const ocultarLogoDesck = keyframes`
    0% {
        transform: translateY(16px);
    }
    100% {
        transform: translateY(-66px);
    }
`

const mostrarLogoDesck = keyframes`
    0% {
        transform: translateY(-66px);
    }
    100% {
        transform: translateY(16px);
    }
`

const mostrarHeader = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(48px);
    }
`

const ocultarHeader = keyframes`
    0% {
        transform: translateY(48px);
    }
    100% {
        transform: translateY(0);
    }
`

const StyledHeader = styled.div`
    width: 100%;

    .logoMobile {
        position: fixed;
        top: 0;
        z-index: 1000;

        width: 100%;
        display: flex;
        justify-content: center;

        animation: ${({ show }) => show ? ocultarLogo : mostrarLogo } .3s linear both;
        
        @media (min-width: 781px) {
            animation: none;
            animation: ${({ show }) => show ? ocultarLogoDesck : mostrarLogoDesck } .3s linear both;

            img {
                transform: scale(1.2);
            }
        }
    }

    .headerMobile {
        position: fixed;
        top: -48px;
        left: 0;
        z-index: 100;

        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        animation: ${ ({ show }) => show ? mostrarHeader : ocultarHeader } .3s linear both;
    }

    div:nth-child(3) {
        display: none;
    }

    @media (min-width: 781px) {
        div:nth-child(3){
            display: flex;
        }

        .headerMobile {
            display: none;
        }
    }
`


const Header = () => {

    const dispatch = useDispatch();

    const { hidden } = useSelector( state => state.UI.logo );
    const handleClick = () => dispatch( openNavbar() )

    return (
        <StyledHeader show={hidden}>
            <div className='logoMobile'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='headerMobile'>
                <a href='#inicio'>
                    <img src={simpleLogo} alt='logo' />
                </a>
                <div>
                    <img src={menu} alt='menu' onClick={handleClick}/>
                </div>
            </div>
            <DescktopNavbar show={hidden} />
        </StyledHeader>
    )
}

export default Header
