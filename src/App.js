
import './App.css';
import DefaultHomepage from './components/app-default-home';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import React, {useState} from 'react'
import {
  Header,
  Login,
  Register
} from './components'
import 

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  
  const fetchActivities = async() => {
    const data = await fetchFromAPI


  }


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
