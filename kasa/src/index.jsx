import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './style/index.css';
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

export default function Home (){
    <div>
        <h1>Bienvenue sur la page d'acceuil</h1>
    </div>
}