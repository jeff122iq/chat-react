import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

firebase.initializeApp({
    apiKey: "AIzaSyAMDz_-gm-CH0cSIOe6Lb98iloMgpyenxA",
    authDomain: "chat-react-55048.firebaseapp.com",
    projectId: "chat-react-55048",
    storageBucket: "chat-react-55048.appspot.com",
    messagingSenderId: "795537876523",
    appId: "1:795537876523:web:c01ba875840dfbd64eec6e",
    measurementId: "G-Q6DZLER0N3"
});

const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
