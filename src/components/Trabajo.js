import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { MainContainer, Titulo } from '../styles/components/globalStyles'
import flecha from '../assets/Iconos/arrowBack.svg'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
`
const BackArrow = styled.div`
    width: 35px;
    height: 35px;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 20px;
    }
`

const Title = styled(Titulo)`
    width: 100%;
    text-align: center;
    margin-top: 18px;

    p {
        font-size: 20px;
    }

    &::after {
        display: none
    }
`

const Images = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`

const Image = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 10px;

    &:last-of-type {
        margin-bottom: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`

const Trabajo = () => {

    const { selected } = useSelector( state => state.UI.job )
    const navigate = useNavigate()

    const handleClick = () => navigate(-1)
    
    return (
        <Container>
            <BackArrow onClick={handleClick} ><img src={flecha} alt='back arrow'/></BackArrow>
            <MainContainer>
                <Title><p>{selected.tituloJobs}</p></Title>
                <Images>
                    {
                        selected.imgs.map((img, i) => (
                            <Image key={i}>
                                <img src={img} alt='img'/>
                            </Image>
                        ))
                    }
                </Images>
            </MainContainer>
        </Container>
    )
}

export default Trabajo