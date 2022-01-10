import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import './index.css';
import cj from './images/cj_photo.jpg';
import mo from './images/mo_photo.jpg';

function App (props) {
    return ( 
       /* <BrowserRouter>
        <div>
            <Route component={AllPosts} path='/' exact />
            <Route component={OnePost} path='/:slug' />
        </div>
        </BrowserRouter> */

        <div className='home'>
            <h1 href='/'>The Technomancers</h1>
            <h2>Welcome to our site! Plese click on a picture to see the resume.</h2>
            <a href='/jones-c'>
                <img className='picture-cj'
                    src={cj} alt='cj'
                /> 
                <p>Charles Jones</p>
            </a>
            <a href='/jones-m'>
                <img className='picture-mo'
                    src={mo} alt='mo'
                /> 
                <p>Monique Jones</p>
            </a>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

export default App;