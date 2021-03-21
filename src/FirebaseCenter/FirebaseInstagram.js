import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDC2zoQBopunoCrwbtG2eBf_bB_VDsj3XI",
    authDomain: "instagram-clone-vivek.firebaseapp.com",
    projectId: "instagram-clone-vivek",
    storageBucket: "instagram-clone-vivek.appspot.com",
    messagingSenderId: "240121679119",
    appId: "1:240121679119:web:9fc1f5540a2aee0477827a"
};
// Initialize Firebase
const firebaseInsta = firebase.initializeApp(firebaseConfig);
export {firebaseInsta};
