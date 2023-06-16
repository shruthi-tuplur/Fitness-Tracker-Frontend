
import './App.css';
import DefaultHomepage from './components/app-default-home';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import React, {useState} from 'react'
import {
  Header,
  Login,
  Register
} from './components'
import { fetchFromAPI } from './api';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  
  const fetchActivities = async() => {
    const data = await fetchFromAPI({
      path: '/activities',
      token
    })

    if(data?.activities){
      setActivities(data.activities);
    }

  }




  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/'>
          <DefaultHomepage />
        </Route>
        <Route path = '/users/register'>
          <Register setToken = {setToken} setUser = {setUser}/>
        </Route>
        <Route path = '/users/login'>
          <Login />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
