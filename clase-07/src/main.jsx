import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Collection from './Collection.jsx';
import Query from './Query.jsx';
import Agregar from './Agregar.jsx';
import Actualizar from './Actualizar.jsx';
import Eliminar from './Eliminar.jsx';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Batch from './Batch.jsx';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe2TzNLscW-c3VTclF9bZS9JSegwy9898",
  authDomain: "ecommerce-60040.firebaseapp.com",
  projectId: "ecommerce-60040",
  storageBucket: "ecommerce-60040.appspot.com",
  messagingSenderId: "579649332007",
  appId: "1:579649332007:web:56971545c6f36d6fbbbf02"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <Query/>
    <App /> */}
    {/* <Agregar/> */}
    {/* <Actualizar/> */}
    {/* <Batch/> */}
    <Eliminar/>
    <Collection/>
  </>,
)
