import React, { useEffect, useState } from 'react';
import Uploader from './components/Uploader';
import { useDispatch, useSelector } from 'react-redux';
import Tweets from './components/Tweets'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


// cannot set functions as redux state
import { selectDb, setDb } from './redux/firestoreSlice';

function App() {
  const dispatch = useDispatch();
  const [db, setDb] = useState()
  const [tweets, setTweets] = useState(<></>)

  useEffect(() => {
    console.log('init')
    console.log(firebase)
    console.log(firebase.firestore);

    console.log('initializing')
    var config = {
      apiKey: 'AIzaSyBUpH72-HtwHUmFUYFFgq79OBfC4mzrKLA',
      authDomain: 'practice-98633.firebaseapp.com',
      projectId: 'practice-98633'
    }
    
    firebase.initializeApp(config);
    var initdb = firebase.firestore();
    console.log(initdb)
    
    // db can now be passed as a prop to any child components. Note: redux can't do this, but perhaps context can.
    setDb(initdb)
    console.log('initialized firebase')

  }, [])


  return (
    <div className="App">
      {/* <Uploader db={db}/> */}
      <Tweets db={db} />
    </div>
  );
}

export default App;
