import { Home } from './Pages/Home';
import {Register} from './Pages/Register'
import { GlobalStyle } from './styles/global'
import { TeamsProvider} from './TeamsContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



export function App() {
  return (
    <TeamsProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cadastro" component={Register}/>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </TeamsProvider>
  );
}

export default App;
