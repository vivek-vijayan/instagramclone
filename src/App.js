import './App.css';
import AppBody from './AppBody/AppBody';
import AppHeader from './AppHeader/AppHeader'
import firebase from 'firebase'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [userProfileName, setuserProfileName] = useState();
  const [userActivated, setUserActivated] = useState(false);

  const loginUsingGoogleAuthentication = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((userLogin) => {
      setuserProfileName(userLogin.user.displayName)
      setUserActivated(true);
    })

  }
  const logout = () => {
    firebase.auth().signOut().then(() => {
      setUserActivated(false);
    })

  }

  var postScreen;
  if (userActivated === true) {
    postScreen = <div>
      <AppHeader logout={logout} userActivated={userActivated} userProfileName={userProfileName} ></AppHeader>
      <AppBody username = {userProfileName} ></AppBody>
    </div>
  }
  else {
    postScreen = <button onClick={loginUsingGoogleAuthentication}>Login</button>
  }

  return (
    <div>
      {postScreen}
    </div>
  );
}

export default App;
