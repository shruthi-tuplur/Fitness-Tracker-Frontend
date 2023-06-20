
import './App.css';
import DefaultHomepage from './components/app-default-home';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {
  Header,
  Login,
  Register,
  PublicRoutines,
  Footer,
  ThankYouForRegistering,
  MyRoutines,
  Activities
} from './components'
import {fetchFromAPI} from './api'


function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [username, setUsername] = useState("");
  
  const fetchActivities = async() => {
    const data = await fetchFromAPI({
     path: '/activities',
      token
   })

    if(data){
      setActivities(data);
    }

  }

  useEffect(() => {
    fetchActivities();
    if(token){
      console.log('token: ', token);
      // setToken(localStorage.getItem('token'));
    }
    
}, [token])



  return (
    <BrowserRouter>
      <div className="App">
        <Header token = {token} setToken={setToken}/>
        <Route exact path='/'>
          <DefaultHomepage token={token}/>
        </Route>
        <Route path = '/users/register'>
          <Register setToken = {setToken} setUser = {setUser} setUsername={setUsername}/>
        </Route>
        <Route path = '/users/login'>
          <Login setToken = {setToken} setUser = {setUser} setUsername={setUsername} username = {username}/>
        </Route>
        <Route path = '/routines/publicroutines'>
          <PublicRoutines token={ token } />
        </Route>
        <Route path='/thankyou'>
          <ThankYouForRegistering />
        </Route>
        <Route path='/routines/myroutines'>
          <MyRoutines token={token} user={user}/>
        </Route>
        <Route path='/activities'>
          <Activities fetchActivities={fetchActivities} token={token} setActivities={setActivities} activities={activities}/>
        </Route>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
