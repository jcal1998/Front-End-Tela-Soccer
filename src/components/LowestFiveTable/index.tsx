import { useContext } from 'react'
import { TeamsContext } from '../../TeamsContext'
import {Container, Content, TopFiveDiv, TeamDiv} from './styles'

export function LowestFiveTable(props : any){
    const {teams } = useContext(TeamsContext)

    const newTeam = [ ...teams ]

    newTeam.sort( ( a: any, b: any) =>{
        return a.Avg - b.Avg
    })

    return (
        <Container>
            <Content>
                <h3>{props.children}</h3>
                <TopFiveDiv>
                    <TeamDiv>
                        <h2>{newTeam[0].TeamName}</h2>
                        <h4>{newTeam[0].Avg}</h4>
                    </TeamDiv>
                    <TeamDiv>
                        <h2>{newTeam[1].TeamName}</h2>
                        <h4>{newTeam[1].Avg}</h4>
                    </TeamDiv>
                    <TeamDiv>
                        <h2>{newTeam[2].TeamName}</h2>
                        <h4>{newTeam[2].Avg}</h4>
                    </TeamDiv>
                    <TeamDiv>
                        <h2>{newTeam[3].TeamName}</h2>
                        <h4>{newTeam[3].Avg}</h4>
                    </TeamDiv>
                    <TeamDiv>
                        <h2>{newTeam[4].TeamName}</h2>
                        <h4>{newTeam[4].Avg}</h4>
                    </TeamDiv>
                </TopFiveDiv>
            </Content>
        </Container>
    )
}
