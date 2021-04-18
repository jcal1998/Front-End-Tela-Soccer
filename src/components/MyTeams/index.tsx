import {Container, DescriptionDiv} from './styles'
import {MyTeamsTable} from '../MyTeamsTable'


export function MyTeams(){
    return (
        <Container>
            <DescriptionDiv>
                <h1>My Teams</h1>
                <button type="button">
                    <h2>+</h2>
                </button>
            </DescriptionDiv>
            <MyTeamsTable />
        </Container>
    )
}

// import {Container, DescriptionDiv} from './styles'
// import lixoImg from '../../assets/lixo.svg'
// import editImg from '../../assets/editar.svg'

// export function MyTeams(){
//     return (
//         <Container>
//             <DescriptionDiv>
//                 <h1>My Teams</h1>
//                 <button type="button">
//                     <h2>+</h2>
//                 </button>
//             </DescriptionDiv>

//         </Container>
//     )
// }
