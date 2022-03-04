import styled from 'styled-components'

import insta from '../assets/Iconos/instagram.svg'
import face from '../assets/Logos/facebook.png'
import logo from '../assets/Iconos/Moproinca-logo.svg'
import { MainContainer } from '../styles/components/globalStyles'

const StyleFooter = styled.footer`
  width: 100%;
  background-color: #002270;

  .derechos {
    display: none;
    width: 100%;
    text-align: center;
    font-size: 11px;
    font-weight: 100;
    color: #FFFFFF;
  }

  @media (min-width: 580px) {
    padding-bottom: 9px;

    .derechos {
      display: block;
    }
  }
`
const ContainerFoo = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 9px 0;

  .logo {
    margin-bottom: 22px;
  }

  p {
    font-size: 11px;
    font-weight: 100;
    color: #FFFFFF;
  }

  @media (min-width: 580px) {
    flex-direction: row-reverse;
    margin: 0 0 20px 0;
    padding-bottom: 0;

    .logo {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0 50px 0 0;
    }

    p {
      display: none;
    }
  }
`

const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  padding: 0 30px;

  a {
    width: 30px;
    margin-right: 30px;

    &:last-of-type {
      margin: 0;
    }

    img {
      width: 100%;
    }    
  }

  @media (min-width: 580px) {
    width: 50%;
    justify-content: stretch;
    padding: 0;
    margin: 0;

    a {
      width: 40px;
    }
  }
`

const Footer = () => {
  return (

    <StyleFooter>

      <ContainerFoo>

        <Social>
          <a href='https://www.instagram.com/moproinca_/?hl=es'>
            <img src={insta} alt='Instagram'/>
          </a>
          <a href='https://www.facebook.com/moproinca'>
            <img src={face} alt='Twitter'/>
          </a>
        </Social>

        <a href='#inicio' className='logo'><img src={logo} alt='Moproinca Logo'/></a>

        <p>© Copyright 2021 by Samuel Arias. All rights reserved.</p>

      </ContainerFoo>

      <p className='derechos'>© Copyright 2021 by Samuel Arias. All rights reserved.</p>

    </StyleFooter>

  )

}

export default Footer;
