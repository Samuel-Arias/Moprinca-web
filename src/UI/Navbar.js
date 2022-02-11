import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeNavbar } from "../actions/UI";

const InvisibleDiv = styled.div`
    position: fixed;
    top: 0;
    left: ${ ({show}) =>  show ? '0' : '100%'};
    z-index: 2000;

    width: 100%;
    height: 100vh;
    transition: all .5s;
`

const NavbarStyled = styled.nav`
    width: 290px;
    height: 100%;
    padding: 63px 77px;
    background: linear-gradient(to bottom, #002270, #E96C01);
    margin-left: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;    

    a {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 20px;
        font-weight: 400;
    }
`

const Navbar = () => {

    const {open} = useSelector( state => state.UI.navbar );
    const dispatch = useDispatch();
    const handleClick = () => dispatch( closeNavbar() )

    return (
        <InvisibleDiv show={open} onClick={handleClick}>
            <NavbarStyled>
                <a href='#inicio' onClick={ handleClick }>Inicio</a>
                <a href='#sobre-nosotros' onClick={ handleClick }>Sobre nosotros</a>
                <a href='#servicios' onClick={ handleClick }>Servicios</a>
                <a href='#trabajos' onClick={ handleClick }>Trabajos</a>
                <a href='#contacto' onClick={ handleClick }>Contacto</a>
            </NavbarStyled>
        </InvisibleDiv>
    )
}

export default Navbar