
import './App.css';
import DefaultHomepage from './components/app-default-home';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Header from './components/header';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/'>
          <DefaultHomepage />
        </Route>
        <Route path = '/users/register'>
          <Register />
        </Route>
        <Route path = '/users/login'>
          <Login />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
