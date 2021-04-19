import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import { Footer } from './components/Footer';
import { Dashboard} from './components/Dashboard'

export function Home() {
  return (
    <>
      <Header /> 
      <Dashboard />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default Home;
