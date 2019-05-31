
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* react-intl import */
import { IntlProvider } from 'react-intl';
import messages_fr from "./translation/fr.json"
import messages_en from "./translation/en.json"
// Redux import
import Provider from "react-redux/es/components/Provider";
import { store } from "./store/configureStore";

const messages = {
    'en': messages_en,
    'fr': messages_fr
}

var locale = window.navigator.language;
var firstLocale = locale.split('-');

var domain = "tavernofcho.com";

if(document.domain != domain)
  document.location.href="https://tavernofcho.com/";
  
const language = firstLocale[0];

var rc1 = "color: rgb(228, 38, 24); font-size:48px;font-weight : bold;text-shadow: 1px 1px 5px rgba(0,0,0,.3);";
var rc2 = "color: #999; font-size:48px;text-shadow: 1px 1px 5px rgba(0,0,0,.3);"
var rc3 = "color: #bbb; font-size:16px;"
console.log("%cCho's%cTavern %c  v0.0.8 ", rc1, rc2, rc3);

// Add new method to localstorage
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

// Add new method to localstorage
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}

ReactDOM.render(
<IntlProvider locale={language} messages={messages[language]}>
  <Provider store={store}>
    <App />
  </Provider>
</IntlProvider>,
document.getElementById('root')
);

serviceWorker.register();
