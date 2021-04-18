import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import { Footer } from './components/Footer';
import { CreateYourTeam } from './components/CreateYourTeam'



export function App() {
  return (
    <>
      <Header />
      <CreateYourTeam />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
