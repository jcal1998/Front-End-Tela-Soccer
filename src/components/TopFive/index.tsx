import {Container, DescriptionDiv, TableContainer, PickedPlayersContainer, BigContainer } from './styles'
import { TopFiveTable} from '../TopFiveTable'
import { PickedPlayers} from '../PickedPlayers'
import { LowestFiveTable} from '../LowestFiveTable'

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
                    <LowestFiveTable>
                        Lowest avg age
                    </LowestFiveTable>
                </TableContainer>
                <PickedPlayersContainer>
                    <PickedPlayers />
                    <PickedPlayers />
                </PickedPlayersContainer>
            </Container>
        </BigContainer>
    )
}