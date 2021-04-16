import logoImg from '../../assets/logo.svg'

import {Container, Content, LogoDiv, JohnDoeDiv,ImageDiv} from './styles'

export function Header(){
  return(
    <Container>
      <Content>
        <LogoDiv>
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