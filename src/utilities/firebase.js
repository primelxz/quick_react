import { initializeApp } from 'firebase/app';
import { useEffect, useState, useCallback } from 'react';
import { getDatabase, onValue, ref, update} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDc1ctahFF6lLzb0Fv_4dZ8aAC0JFIaMVQ",
    authDomain: "quickreack.firebaseapp.com",
    databaseURL: "https://quickreack-default-rtdb.firebaseio.com",
    projectId: "quickreack",
    storageBucket: "quickreack.appspot.com",
    messagingSenderId: "121652376528",
    appId: "1:121652376528:web:7d10826405babd9eb2bfd5",
    measurementId: "G-RMTV7NGKCG"  
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};