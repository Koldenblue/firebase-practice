import React, { useEffect, useState } from 'react';
import Uploader from './components/Uploader';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tweets from './components/Tweets'
import Loading from './components/Loading';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import Update from './components/Update';
require("dotenv").config();
// cannot set functions as redux state
// import { selectDb, setDb } from './redux/firestoreSlice';

function App() {
  const [db, setDb] = useState('')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('init')
    console.log(firebase)
    console.log(firebase.firestore);

    console.log('initializing')
    var config = {
      // doesn't have to be secret, see https://firebase.google.com/docs/projects/api-keys
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

  useEffect(() => {
    console.log(loading)
    if (loading && db !== '') {
      setLoading(false)
    }
  }, [loading, db])

  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Loading loading={loading} db={db}>
            <Tweets db={db} />
          </Loading>
        </Route>

        <Route exact path='/update'>
          <Loading loading={loading} db={db}>
            <Update db={db}/>
          </Loading>
        </Route>

      </Switch>
    </Router>
  )
}
export default App;
