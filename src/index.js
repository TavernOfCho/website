import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const element = <h1>Bonjour héro</h1>;
ReactDOM.render(element, document.getElementById('test'));

serviceWorker.register();
