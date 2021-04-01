import './App.css';
import AppBody from './AppBody/AppBody';
import AppHeader from './AppHeader/AppHeader'
import firebase from 'firebase'
import { useState } from 'react';


function App() {

  const [userActivated, setUserActivated] = useState(false);
  const [activeUsername, setactiveUsername] = useState();
  const [activeUserPhotoURL, setactiveUserPhotoURL] = useState()

  const loginUsingGoogleAuthentication = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((userLogin) => {
      setUserActivated(true);
      setactiveUsername(userLogin.user.displayName);
      setactiveUserPhotoURL(userLogin.user.photoURL);
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
      <AppHeader logout={logout} userActivated={userActivated} activeUsername={activeUsername} activeUserPhotoURL={activeUserPhotoURL} ></AppHeader>
      <AppBody activeUsername={activeUsername} activeUserPhotoURL={activeUserPhotoURL}></AppBody>
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
