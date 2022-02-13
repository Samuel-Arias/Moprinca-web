import styled, { css } from 'styled-components'
import { useState } from 'react'

import { Titulo } from "../styles/components/globalStyles"
import data from '../data/trabajos.json'
import getImages from '../helpers/getImage'

const ContJobs = styled.div`
    width: 100%;
    ${({ moreJobs }) => (
        moreJobs ? 'height: min-content' : css`
                height: 753px;
                overflow-y: hidden;
            `
    )
    }
`

const CardJob = styled.div`
    width: 100%;
    height: max-content;
    margin-bottom: 28px;
    overflow: hidden;
    
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
`

const MoreJobs = styled.p`
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 300;
    color: #002270;
    text-decoration: underline;
    margin-top: 25px;
`

const Trabajos = () => {

    const [showMore, setShowMore] = useState(false);
    const dataJobs = data.jobs

    getImages(require.context('../assets/Trabajos/portadaJob', false, /\.jpeg$/), dataJobs)

    const showMoreJobs = () => setShowMore(!showMore)

    return (
        <div>

            <Titulo>
                <p>Trabajos</p>
            </Titulo>

            <ContJobs moreJobs={showMore}>

                {
                    dataJobs.map((job, i) => (
                        <CardJob key={i}>
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
