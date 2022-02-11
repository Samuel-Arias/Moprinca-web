import styled, { keyframes } from 'styled-components'

import logo from '../assets/Iconos/Moproinca-logo.svg'
import simpleLogo from '../assets/Iconos/Moproinca-simple-logo.svg'
import menu from '../assets/Iconos/menu.svg'
import { useDispatch ,useSelector } from 'react-redux'
import { openNavbar, closeNavbar } from '../actions/UI'

const ocultarLogo = keyframes`
    0% {
        transform: translateY(74px);
    }
    100% {
        transform: translateY(0);
    }
`

const mostrarLogo = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(74px);
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

const Plogo = styled.div`
    position: fixed;
    top: -74px;
    left: 0;
    z-index: 1000;

    min-width: 100vw;
    padding-top: 8px;
    display: flex;
    justify-content: center;

    animation: ${({ hidden }) => hidden ? ocultarLogo : mostrarLogo} .3s linear both;
`

const MiniHeader = styled.div`
    position: fixed;
    top: -48px;
    left: 0;
    z-index: 1000;

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: ${({ hidden }) => hidden ? mostrarHeader : ocultarHeader} .3s linear both;
`


const Header = () => {

    const dispatch = useDispatch();

    const { hidden } = useSelector( state => state.UI.logo );
    const handleClick = () => dispatch( openNavbar() )

    return (
        <>
            <Plogo hidden={hidden}>
                <img src={logo} alt='Logo' />
            </Plogo>
            <MiniHeader hidden={hidden}>
                <div>
                    <img src={simpleLogo} alt='logo' />
                </div>
                <div>
                    <img src={menu} alt='menu' onClick={handleClick}/>
                </div>
            </MiniHeader>
        </>
    )
}

export default Header
