import { useState } from 'react';
import './App.css';
import AppBody from './AppBody/AppBody';
import AppHeader from './AppHeader/AppHeader'
import firebase from 'firebase'


function App() {
  const [activeUserName, setActiveUserName] = useState();
  const [activeUserProfilePictureURL, setActiveUserProfilePictureURL] = useState();
  const [activeUserEmailID, setactiveUserEmailID] = useState();
  const [isUserActive, setIsUserActive] = useState(false);

  // Google provider creation
  var provider = new firebase.auth.GoogleAuthProvider();

  const GoogleLoginAuthentication = () => {
    firebase.auth().signInWithPopup(provider).then((userprofile) => {
      setActiveUserName(userprofile.user.displayName)
      setActiveUserProfilePictureURL(userprofile.user.photoURL)
      setactiveUserEmailID(userprofile.user.email)
      setIsUserActive(true);
    })
  }

  const login = () => {
    GoogleLoginAuthentication();
  }

  const logout = () => {
    firebase.auth().signOut().then(() => {
        setactiveUserEmailID("")
        setActiveUserProfilePictureURL("")
        setActiveUserName("")
        setIsUserActive(false);
    })
  }
  return (
    <div>
      <AppHeader username = {activeUserName} profilepicture = {activeUserProfilePictureURL} logout = {logout} login = {login} isUser = {isUserActive} ></AppHeader>
      <AppBody username={activeUserName} profilepicture={activeUserProfilePictureURL} emailID={activeUserEmailID} logout={logout}></AppBody>
    </div>
  );
}

export default App;
