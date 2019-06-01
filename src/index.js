
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux import
import Provider from "react-redux/es/components/Provider";
import { store } from "./store/configureStore";

/* react-intl import */
import { IntlProvider, addLocaleData } from 'react-intl';

import frLocaleData from 'react-intl/locale-data/fr';
import messages_fr from "./translation/fr.json"
import messages_en from "./translation/en.json"

addLocaleData(frLocaleData);

const messages = {
  'fr': messages_fr,
  'en': messages_en
}

var locale = window.navigator.language;
var firstLocale = locale.split('-');

var domain = "tavernofcho.com";

if(document.domain !== "https://127.0.0.1:8054/"){
  console.log('Salut les devs');
}else if(document.domain !== domain){
  document.location.href="https://tavernofcho.com/";
}
  
const language = firstLocale[0];

var rc1 = "color: #00cc95; font-size:26px;font-weight : bold;text-shadow: 1px 1px 5px rgba(0,0,0,.3);";
var rc2 = "color: #c5b212; font-size:26px;text-shadow: 1px 1px 5px rgba(0,0,0,.3);"
var rc3 = "color: #000000; font-size:16px;"
console.log("%c Cho's %c Tavern %c v0.0.8 ", rc1, rc2, rc3);

// Add new method to localstorage
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

// Add new method to localstorage
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}

ReactDOM.render(
<IntlProvider 
  locale={language} 
  messages={messages[language]}
>
  <Provider store={store}>
    <App />
  </Provider>
</IntlProvider>,
document.getElementById('root')
);

serviceWorker.register();
