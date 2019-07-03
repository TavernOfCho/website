import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import Drawer from './components/Drawer';
import { history } from "./helpers/history";
import * as serviceWorker from './serviceWorker';
import './redirection';

//Push notification
//import { messaging } from "./init-fcm";

// Redux import
import { Provider } from 'react-redux'
import { store } from "./store/configureStore";

/* react-intl import */
import { IntlProvider } from 'react-intl-redux'
import { addLocaleData } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import { updateIntl } from 'react-intl-redux'
import messages_fr from "./translation/fr.json"
import messages_en from "./translation/en.json"

addLocaleData(frLocaleData);
const UPDATE_LOCALES = 'UPDATE_LOCALES'

var locale = window.navigator.language;
var firstLocale = locale.split('-');
const navLang = firstLocale[0];

var rc1 = "color: #00cc95; font-size:26px;font-weight : bold;text-shadow: 1px 1px 5px rgba(0,0,0,.3);";
var rc2 = "color: #c5b212; font-size:26px;text-shadow: 1px 1px 5px rgba(0,0,0,.3);"
var rc3 = "color: #000000; font-size:16px;"
console.log("%cTavern of%c Cho%c v1.0.1 ", rc1, rc2, rc3);

// Add new method to localstorage
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

// Add new method to localstorage
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}

// Add the messages on the store
store.dispatch({
  type: UPDATE_LOCALES,
  payload: {
    en: messages_en,
    fr: messages_fr,
  },
});

// Init the first lang based on the navigator
store.dispatch(
  updateIntl({
    locale: navLang,
    messages: store.getState().locales[navLang],
  })
)

/* Push Notification
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Push notification available, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Push notification not available, error:", err);
    });
}
*/

class MainApp extends React.Component {

  componentDidMount() {

    // Wowhead script
    const scriptWowheadConfig = document.createElement("script");
    scriptWowheadConfig.innerHTML = "var whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};";
    document.head.appendChild(scriptWowheadConfig);

    const scriptWowhead = document.createElement("script");
    scriptWowhead.src = "https://wow.zamimg.com/widgets/power.js";
    document.head.appendChild(scriptWowhead);

    /* Push notification
    messaging.requestPermission()
    .then(async function() {
      const token = await messaging.getToken();
    })
    .catch(function(err) {
      console.log("Unable to get permission to notify.", err);
    });
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
    */

  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider>
          <div className="App">
            <Router history={history}>
                <Drawer/>
            </Router>
          </div>
        </IntlProvider>
      </Provider>
    )
  }
};

ReactDOM.render(<MainApp />, document.getElementById('root'));

serviceWorker.register();
