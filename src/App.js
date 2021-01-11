import React, { useEffect, useState } from 'react';
import Uploader from './components/Uploader';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


function App() {
  const [init, setInit] = useState(false)
  
  useEffect(() => {
    console.log('init')
    console.log(firebase)
    console.log(firebase.firestore);
    let db = firebase.firestore;
  }, [])


  return (
    <div className="App">
      <Uploader />
    </div>
  );
}

export default App;
