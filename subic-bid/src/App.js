import './App.css';
import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import {Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <div className="App">
        <Switch>
        <Route path="/"exact/>
        <Route path="/login" component={Login} exact />
        <Route path="/newaccount" component={CreateAccount} />
        </Switch>
    </div>
    </main>
  );
}

export default App;
