import { MyTeams } from '../MyTeams'
import { TopFive } from '../TopFive'
import {Container} from './styles'

export function Dashboard (){
  return(
    <Container>
      <MyTeams />
      <TopFive />
    </Container>
  )
}