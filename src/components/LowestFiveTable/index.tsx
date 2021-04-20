import { useContext } from 'react'
import { TeamsContext } from '../../TeamsContext'
import {Container, Content, TopFiveDiv, TeamDiv} from './styles'

export function LowestFiveTable(props : any){
    const {teams } = useContext(TeamsContext)
    const newTeam = [ ...teams ]

    newTeam.sort( ( a: any, b: any) =>{
        return a.Avg - b.Avg
    })

    const bottom5= newTeam.slice(0,5)
    
    return (
        <Container>
            <Content>
                <h3>{props.children}</h3>
                <TopFiveDiv>
                    {bottom5.map( time => (                    
                        <TeamDiv key={time.TeamName}>
                            <h2>{time.TeamName}</h2>
                            <h4>{time.Avg}</h4>
                        </TeamDiv>
                    ))}
                </TopFiveDiv>
            </Content>
        </Container>
    )
}

