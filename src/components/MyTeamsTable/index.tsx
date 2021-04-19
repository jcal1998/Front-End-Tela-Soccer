import {Container, NameDiv, Description, Team, TeamsDiv, TeamName, TeamDescription} from './styles'
import lixoImg from '../../assets/lixo.svg'
import editImg from '../../assets/editar.svg'

import { useState, useContext} from 'react'
import Modal from 'react-modal'
import { TeamsContext } from '../../TeamsContext'


export function MyTeamsTable(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const teams = useContext(TeamsContext);

    function handleOpenModal() {
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    return (
        <Container>
            <TeamsDiv>
                <NameDiv>
                    <h3>Name</h3>
                    <h3>🔽</h3>
                </NameDiv>
                <Description>
                    <h3>Description</h3>
                    <h3>🔽</h3>
                </Description>
            </TeamsDiv>
            {teams.map(team =>(
                <Team key={team.Name}>
                    <TeamName><h3>{team.Name}</h3></TeamName>
                    <TeamDescription>
                        <h3>{team.Description}</h3>
                        <div >
                            <button ><img src={lixoImg} alt="Delete" title="Delete"/></button>
                            <button onClick={handleOpenModal}><img src={editImg} alt="Edit" title="Edit"/></button>
                        </div>
                        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                            <h2>Editar time</h2>
                        </Modal>
                    </TeamDescription>
                </Team>
            ))}
        </Container>
    )
}
