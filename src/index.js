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
            <h1><a href='/'>The Technomancers</a></h1>
            <h2>Welcome to our site! Plese click on a picture to see the resume.</h2>
            <div className='container'>
                <a href='/jones-c'>
                    <img className='picture-cj'
                        src={cj} alt='cj'
                    /> 
                    <p className='name'><button>Charles Jones</button></p>
                </a>
                <a href='./monique.html'>
                    <img className='picture-mo'
                        src={mo} alt='mo'
                    /> 
                    <p className='name'><button>Monique Jones</button></p>
                </a>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

export default App;