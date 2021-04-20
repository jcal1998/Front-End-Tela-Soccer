import {Container, DescriptionDiv} from './styles'
import {MyTeamsTable} from '../MyTeamsTable'
import {Link} from 'react-router-dom'

import {IoMdAdd} from 'react-icons/io'

export function MyTeams(){
    return (
        <Container>
            <DescriptionDiv>
                <h1>My Teams</h1>
                <Link to="/cadastro" className="button">
                    <h2><IoMdAdd /></h2>
                </Link>
            </DescriptionDiv>
            <MyTeamsTable />
        </Container>
    )
}
