import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Casino from './Components/Casino.js';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Casino}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;