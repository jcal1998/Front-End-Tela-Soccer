import {Container, DescriptionDiv, NameDiv, Description, Team, TeamsDiv, TeamName, TeamDescription} from './styles'
import lixoImg from '../../assets/lixo.svg'
import editImg from '../../assets/editar.svg'

export function MyTeams(){
    return (
        <Container>
            <DescriptionDiv>
                <h1>My Teams</h1>
                <button type="button">
                    <h2>+</h2>
                </button>
            </DescriptionDiv>
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
            <Team>
                <TeamName><h3>Barcelona</h3></TeamName>
                <TeamDescription>
                    <h3>Barcelona Squad</h3>
                    <div >
                        <a href="https://www.google.com/"><img src={lixoImg} alt="Delete" title="Delete"/></a>
                        <a href="https://www.google.com/"><img src={editImg} alt="Edit" title="Edit"/></a>
                    </div>
                </TeamDescription>
            </Team>
            <Team>
                <TeamName><h3>Real Madrid</h3></TeamName>
                <TeamDescription>
                    <h3>Real Madrid Squad</h3>
                    <div >
                        <a href="https://www.google.com/"><img src={lixoImg} alt="Delete" title="Delete"/></a>
                        <a href="https://www.google.com/"><img src={editImg} alt="Edit" title="Edit"/></a>
                    </div>
                </TeamDescription>
            </Team>
            <Team>
                <TeamName><h3>Milan</h3></TeamName>
                <TeamDescription>
                    <h3>Milan Squad</h3>
                    <div >
                        <a href="https://www.google.com/"><img src={lixoImg} alt="Delete" title="Delete"/></a>
                        <a href="https://www.google.com/"><img src={editImg} alt="Edit" title="Edit"/></a>
                    </div>
                </TeamDescription>
            </Team>
            <Team>
                <TeamName><h3>Liverpool</h3></TeamName>
                <TeamDescription>
                    <h3>Liverpool Squad</h3>
                    <div >
                        <a href="https://www.google.com/"><img src={lixoImg} alt="Delete" title="Delete"/></a>
                        <a href="https://www.google.com/"><img src={editImg} alt="Edit" title="Edit"/></a>
                    </div>
                </TeamDescription>
            </Team>
            <Team>
                <TeamName><h3>Bayen</h3></TeamName>
                <TeamDescription>
                    <h3>Bayern Munich Squad</h3>
                    <div >
                        <a href="https://www.google.com/"><img src={lixoImg} alt="Delete" title="Delete"/></a>
                        <a href="https://www.google.com/"><img src={editImg} alt="Edit" title="Edit"/></a>
                    </div>
                </TeamDescription>
            </Team>
            <Team>
                <TeamName><h3>Lazio</h3></TeamName>
                <TeamDescription>
                    <h3>Lazio Squad</h3>
                    <div >
                        <a href="https://www.google.com/"><img src={lixoImg} alt="Delete" title="Delete"/></a>
                        <a href="https://www.google.com/"><img src={editImg} alt="Edit" title="Edit"/></a>
                    </div>
                </TeamDescription>
            </Team>
        </Container>
    )
}