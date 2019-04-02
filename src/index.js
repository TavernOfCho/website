
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* react-intl import */
import { IntlProvider } from 'react-intl';
import messages_en from "./translation/en.json"

const messages = {
    'en': messages_en
}

const language = "en";

ReactDOM.render(
<IntlProvider locale={language} messages={messages[language]}>
    <App />
</IntlProvider>,
document.getElementById('root')
);

serviceWorker.register();
