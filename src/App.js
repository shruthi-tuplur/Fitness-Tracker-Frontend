
import './App.css';
import DefaultHomepage from './components/app-default-home';
import { BrowserRouter, Route } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {
  Header,
  Login,
  Register,
  PublicRoutines,
  Footer,
  ThankYouForRegistering,
  MyRoutines,
  Activities,
  
} from './components'
import {fetchFromAPI} from './api'


function App() {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [username, setUsername] = useState('');
  
  
  const fetchActivities = async() => {
    const data = await fetchFromAPI({
     path: '/activities',
      token
   })

    if(data){
      setActivities(data);
    }

    /*
    if (token && !user) {
      const data = await fetchFromAPI({
        path: '/users/me',
        token
      });

      console.log("token && !user data: ", data);

      if (token) {
        setUser(data);
        console.log("The user has been set", data);
      }
    }
      */

  }

  const logout = () => {
    setToken('');
    setUser('');
    localStorage.removeItem("token");
  }

  useEffect(() => {
      if(token){
        localStorage.setItem('token', token)
        console.log('token: ', token);
      } else {
        localStorage.removeItem("token");
      }
    fetchActivities();
    
}, [token])



  return (
    <BrowserRouter>
      <div className="App">
        <Header token = {token} setToken={setToken} logout={logout}/>
        <Route exact path='/'>
          <DefaultHomepage token={token}/>
        </Route>
        <Route path = '/users/register'>
          <Register setToken = {setToken} setUser = {setUser} />
        </Route>
        <Route path = '/users/login'>
          <Login setToken = {setToken} setUser = {setUser} user={user}/>
        </Route>
        <Route path = '/routines/publicroutines'>
          <PublicRoutines token={ token } />
        </Route>
        <Route path='/thankyou'>
          <ThankYouForRegistering />
        </Route>
        <Route path='/routines/myroutines'>
          <MyRoutines token={token} user={user}  />
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
