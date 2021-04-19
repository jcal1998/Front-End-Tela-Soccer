import logoImg from '../../assets/logo.svg'

import {Container, Content, LogoDiv, JohnDoeDiv,ImageDiv} from './styles'
import {useHistory} from 'react-router-dom'

export function Header(){
  let history = useHistory();
  const handleHomePush = ()=> {
    history.push("/")
}

  return(
    <Container>
      <Content>
        <LogoDiv onClick={handleHomePush}>
          <img src={logoImg} alt="Squad Management Tool" />
          <h1>Squad Management Tool</h1>
        </LogoDiv>
        <JohnDoeDiv>
          <h1>José Carlos Lee</h1>
          <ImageDiv>JC</ImageDiv>
        </JohnDoeDiv>
      </Content>
    </Container>
  )
}