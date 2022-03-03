import styled, { css } from 'styled-components'
import { useState } from 'react'

import { Titulo } from "../styles/components/globalStyles"
import { jobs } from '../data/trabajos'
import getImages from '../helpers/getImage'
import { useDispatch } from 'react-redux'
import { selectJob } from '../actions/UI'
import { useNavigate } from 'react-router-dom'

const ContJobs = styled.div`
    width: 100%;
    ${({ moreJobs }) => (
        moreJobs 
            ? css`
                height: min-content;

                @media (min-width: 600px) {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    height: 1250px;                
                }

                @media (min-width: 1100px) {
                    height: 1850px;                
                }

            ` 
            : css`
                height: 753px;
                overflow-y: hidden;

                @media (min-width: 508px) {
                    height: 745px;
                }
                
                @media (min-width: 600px) {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    height: 530px;
                }

                @media (min-width: 780px) {
                    height: 500px;
                }

                @media (min-width: 807px) {
                    height: 490px;
                }

                @media (min-width: 1100px) {
                    height: 735px;
                }
            `
    )
    }
`

const CardJob = styled.div`
    width: 100%;
    height: max-content;
    margin-bottom: 28px;
    overflow: hidden;
    cursor: pointer;
    
    img {
        width: 100%;
        height: 197px;
        object-fit: cover;
        object-position: center;        
        border-radius: 10px;
        box-shadow: 0px 4px 5px 0px rgba(0,0,0,.8);
    }

    p {
        width: 100%;
        font-weight: 300;
        font-size: 16px;
    }

    @media (min-width: 600px) {
        width: 47%;
    } 

    @media (min-width: 1100px) {
        img {
            height: 319px;
        }

        p {
            font-size: 18px;
        }
    } 
`

const MoreJobs = styled.p`
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 300;
    color: #002270;
    text-decoration: underline;
    margin-top: 25px;
    cursor: pointer;

    @media (min-width: 912px) {
        font-size: 15px;
    }

    @media (min-width: 1100px) {
        font-size: 18px;
    }
`

const Trabajos = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showMore, setShowMore] = useState(JSON.parse(localStorage.getItem('openJobs')) || false);

    getImages(require.context('../assets/Trabajos/portadaJob', false, /\.jpeg$/), jobs)

    const showMoreJobs = () => {
        localStorage.setItem('openJobs', String(!showMore))
        setShowMore(!showMore)
    }

    const handleClick = (object) => {
        localStorage.setItem('selectedObject', JSON.stringify(object))
        dispatch( selectJob(object) )
        navigate('/trabajo')
    }

    return (
        <div>

            <Titulo>
                <p>Trabajos</p>
            </Titulo>

            <ContJobs moreJobs={showMore}>

                {
                    jobs.map((job, i) => (
                        <CardJob key={i} onClick={() => handleClick(job)}>
                            <img src={job.img} alt={job.tituloJobs} />
                            <p>{job.tituloJobs}</p>
                        </CardJob>
                    ))
                }

            </ContJobs>

            <MoreJobs onClick={showMoreJobs}>{showMore ? 'mostrar menos trabajos' : 'mostrar mas trabajos'}</MoreJobs>

        </div>
    )
}

export default Trabajos
