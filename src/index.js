
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux import
import { Provider } from 'react-redux'
import { store } from "./store/configureStore";

/* react-intl import */
import { IntlProvider } from 'react-intl-redux'
import { addLocaleData } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import SwitchLocale from './components/SwitchLocale';
import Greeting from './components/Greeting';
addLocaleData(frLocaleData);

const UPDATE_LOCALES = 'UPDATE_LOCALES'

/*
import messages_fr from "./translation/fr.json"
import messages_en from "./translation/en.json"
const messages = {
  'fr': messages_fr,
  'en': messages_en
}
var locale = window.navigator.language;
var firstLocale = locale.split('-');
const language = firstLocale[0];
*/

var domain = "tavernofcho.com";

if(document.domain !== "https://127.0.0.1:8054/"){
  console.log('Salut les devs');
}else if(document.domain !== domain){
  document.location.href="https://tavernofcho.com/";
}
  

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

class MainApp extends React.Component {
  handleLoadlLocales = () => {
    store.dispatch({
      type: UPDATE_LOCALES,
      payload: {
        en: {
          'app.greeting': 'Hello!',
          "character": "Character",
          "character.helper": "Please fill your server and the name of your character.",
          "chotavern": "Cho's Tavern",
          "connection": "Connection",
          "disconnect": "Disconnect",
          "hello": "Hello",
          "homescreen": "Homescreen",
          "homescreen.welcome": "Let's choose the next achievement you want to do and find new friends",
          "herounit.description": "Welcome to the tavern of Cho !",
          "register": "Register",
          "welcome": "Welcome ",
          "mount": "Mount"
        },
        fr: {
          'app.greeting': 'Bonjour!',
          "character": "Personnage",
          "character.helper": "Veuillez sélectionner votre serveur et le nom de votre personnage.",
          "chotavern": "Taverne de Cho",
          "connection": "Connexion",
          "disconnect": "Déconnecter",
          "hello": "Bonjour",
          "homescreen": "Accueil",
          "homescreen.welcome": "Venez planifier vos prochains exploits et trouver d'autres aventuriers",
          "herounit.description": "Bienvenue dans la taverne de Cho !",
          "register": "Inscription",
          "welcome": "Bienvenue ",
          "mount": "Monture "
        },
      },
    })
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider>
          <div>
            <p>
              <Greeting />
              <button type="button" onClick={this.handleLoadlLocales}>
                Local locales
              </button>{' '}
              <SwitchLocale />
            </p>
          </div>
        </IntlProvider>
      </Provider>
    )
  }
};

ReactDOM.render(<MainApp />, document.getElementById('root'));

serviceWorker.register();
