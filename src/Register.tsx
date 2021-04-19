import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import { Footer } from './components/Footer';
import { CreateYourTeam } from './components/CreateYourTeam'

export function Register() {
  return (
    <>
      <Header /> 
      <CreateYourTeam />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default Register;
