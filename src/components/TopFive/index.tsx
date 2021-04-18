import {Container, DescriptionDiv, TableContainer, PickedPlayersContainer, BigContainer } from './styles'
import { TopFiveTable} from '../TopFiveTable'
import { PickedPlayers} from '../PickedPlayers'

export function TopFive(){
    return (
        <BigContainer>
            <Container>
                <DescriptionDiv>
                    <h1>Top 5</h1>
                </DescriptionDiv>
                <TableContainer>
                    <TopFiveTable>
                        Highest avg age
                    </TopFiveTable>
                    <TopFiveTable>
                        Lowest avg age
                    </TopFiveTable>
                </TableContainer>
                <PickedPlayersContainer>
                    <PickedPlayers />
                    <PickedPlayers />
                </PickedPlayersContainer>
            </Container>
        </BigContainer>
    )
}