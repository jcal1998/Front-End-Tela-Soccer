import {Container, NameDiv, Description, Team, TeamsDiv, TeamName, TeamDescription} from './styles'
import { useState, useContext} from 'react'
import Modal from 'react-modal'
import { TeamsContext } from '../../TeamsContext'
import lixoImg from '../../assets/lixo.svg'
import editImg from '../../assets/editar.svg'

import { BsChevronExpand }  from 'react-icons/bs'

export function MyTeamsTable(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {teams, setTeams } = useContext(TeamsContext);
    const [sortBool , setSortBool] = useState(false)
    const newTeam = [ ...teams ]

    function handleOpenModal() {
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    const handleSortBool = () => {
        setSortBool(!sortBool)
        if(sortBool){
            newTeam.sort( ( a: any, b: any) =>{
                let x = a.TeamName.toUpperCase()
                let y = b.TeamName.toUpperCase()
                return x===y ? 0 : x < y ? 1: -1;
            })
            setTeams(newTeam)
        }else{
            newTeam.sort( ( a: any, b: any) =>{
                let x = a.TeamName.toUpperCase()
                let y = b.TeamName.toUpperCase()
                return x===y ? 0 : x > y ? 1: -1;
            })
            setTeams(newTeam)
        }
    }

    const handleRemoveTeam = ( TeamNameToDelete :any ) => {
        setTeams(newTeam.filter( team => team.TeamName !== TeamNameToDelete))
        };

    return (
        <Container>
            <TeamsDiv onClick={handleSortBool}>
                <NameDiv>
                    <h3>Name</h3>
                    <h3><BsChevronExpand /></h3>
                </NameDiv>
                <Description>
                    <h3>Description</h3>
                    <h3><BsChevronExpand /></h3>
                </Description>
            </TeamsDiv>
            {newTeam.map(team =>(
                <Team key={team.TeamName}>
                    <TeamName><h3>{team.TeamName}</h3></TeamName>
                    <TeamDescription>
                        <h3>{team.Description}</h3>
                        <div >
                            <button onClick={(e) => handleRemoveTeam(team.TeamName)}><img src={lixoImg} alt="Delete" title="Delete"/></button>
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
