import { useContext } from 'react'
import { TeamsContext } from '../../TeamsContext'
import {Container, Content, TopFiveDiv, TeamDiv} from './styles'

export function TopFiveTable(props : any){
    const {teams } = useContext(TeamsContext)
    const newTeam = [ ...teams ]

    newTeam.sort( ( a: any, b: any) =>{
        return b.Avg - a.Avg
    })

    const top5= newTeam.slice(0,5)
    
    return (
        <Container>
            <Content>
                <h3>{props.children}</h3>
                <TopFiveDiv>
                    {top5.map( time => (                    
                        <TeamDiv>
                            <h2>{time.TeamName}</h2>
                            <h4>{time.Avg}</h4>
                        </TeamDiv>
                    ))}
                </TopFiveDiv>
            </Content>
        </Container>
    )
}
