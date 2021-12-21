import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className='home'>
                <h1>The Technomancers</h1>
            </div>
        );
    }
}

ReactDOM.render(
    document.getElementById('root')
);