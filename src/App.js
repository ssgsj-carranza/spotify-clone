import './App.css';
import Login from './components/Login/Login';
import React, {useEffect, useState} from 'react';
import { getTokenFromUrl } from './spotify';


function App() {
  const [token, setToken] = useState(null);
  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      setToken(_token)
    }
    console.log("token is here", token)
  },[]);
  return (
    <div className="app">{token ? (<h1>Logged in</h1>) : (
        <Login />
      )}
    </div>
  );
}

export default App;
