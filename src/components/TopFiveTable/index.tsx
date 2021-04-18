import {Container, Content, TopFiveDiv, TeamDiv} from './styles'

export function TopFiveTable(props : any){
    return (
        <Container>
            <Content>
                <h3>{props.children}</h3>
                <TopFiveDiv>
                    <TeamDiv>
                        <h2>Inter MIlan</h2>
                        <h4>31.9</h4>
                    </TeamDiv>
                    <TeamDiv>
                        <h2>APOEL NICOSIA</h2>
                        <h4>31.7</h4>
                    </TeamDiv>
                    <TeamDiv>
                        <h2>AC Milan</h2>
                        <h4>31.6</h4>
                    </TeamDiv>
                    <TeamDiv>
                        <h2>Besiktas JK</h2>
                        <h4>31.4</h4>
                    </TeamDiv>
                    <TeamDiv>
                        <h2>Olympiacos Piraeus</h2>
                        <h4>31.3</h4>
                    </TeamDiv>
                </TopFiveDiv>
            </Content>
        </Container>
    )
}
