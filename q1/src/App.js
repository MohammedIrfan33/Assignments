import React, { useState } from 'react';
import './App.css';
import Login from './component/Login';
import Details from './component/Details';
import Home from './component/Home';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {

  //state for store details of user
  const[details,setDetails] = useState([]);

   //state for store username
   const[username,setUsername] = useState('');

   //loading
   const[loading,setloading] = useState(false);


  //methoad for add userDetails
  const addDetails = (userDetails) =>{
    setDetails([userDetails]);
  }

  //api calling when click login button in login page
  const login =  async() =>{
    const API_URL = 'https://testlogin.free.beeceptor.com/login'
    let response = await fetch(API_URL)
    let data = await response.json()
    
    //check login 
    data.status === "true" ? setloading(true) : setloading(false);
  }
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login  username={username} setUsername={setUsername} login={login} />}/>
           <Route exact path='/home' element={
            loading ? <Home addDetails={addDetails} details={details} username={username} />
            :
             <h2>loading</h2>} />
          <Route exact path='/Details' element={<Details details={details} username={username} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


