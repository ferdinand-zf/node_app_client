import React from 'react';
import HeimbachLogo from './HeimbachLogo.svg';
import './styles/App.css';
import { LoginPage } from './LoginPage';
import { UserContext } from './context/userContext';
import { UserContextType } from './@types/user';
import SonnenPage from './SonnenPage';


function App() {
  //const [user, setUser] = React.useState("");
  const { user } = React.useContext(UserContext) as UserContextType;

  return (
    <div className='App'>
      <header className='App-header'>
        <p className="item2" >Energie Cockpit Winzeln Heimbachstraße 6</p>
        <img className="item1" src={HeimbachLogo} alt="logo"/>
      </header>
      <div>
        {user.username === "" ? <LoginPage /> : <SonnenPage />}
      </div>
    </div>
  );
}

export default App;
