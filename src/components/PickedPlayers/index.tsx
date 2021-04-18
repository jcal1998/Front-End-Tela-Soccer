import {Container,Content, Player} from './styles'

export function PickedPlayers(){
    return (
        <Container>
            <Content>
                <h1>Most picked player</h1>
                <div>
                    <Player>CR</Player>
                    <h2>75%</h2>
                </div>
            </Content>
        </Container>
    )
}
