
import './App.css';
import DefaultHomepage from './components/app-default-home';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {
  Header,
  Login,
  Register,
  PublicRoutines,
  Footer
} from './components'

import { fetchFromAPI } from './api';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  
  // const fetchActivities = async() => {
  //   const data = await fetchFromAPI({
  //     path: '/activities',
  //     token
  //   })

  //   if(data?.activities){
  //     setActivities(data.activities);
  //   }

  // }

  useEffect(() => {
    // fetchActivities();
    if(token){
      console.log('token: ', token);
      setToken(localStorage.getItem('token'));
    }
    
}, [token])



  return (
    <BrowserRouter>
      <div className="App">
        <Header token = {token}/>
        <Route exact path='/'>
          <DefaultHomepage />
        </Route>
        <Route path = '/users/register'>
          <Register setToken = {setToken} setUser = {setUser}/>
        </Route>
        <Route path = '/users/login'>
          <Login setToken = {setToken} setUser = {setUser}/>
        </Route>
        <Route path = '/routines/publicroutines'>
          <PublicRoutines />
        </Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
