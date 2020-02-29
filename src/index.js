import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { loadData } from './redux/actions';

/*Loading currency value from server*/
(async () => {
    let getData =  fetch('https://api.jsonbin.io/b/5e53c2e5f3a8355590529463/1',{
            headers: {
                'secret-key': '$2b$10$FQn64OILJypX5/oP5CmtVubX8qhXEyvfuYHlHZ4qGklCsd1k2Yk3G'
            }
        })
       .then((response) => {
         return response.json();
       });

    let currencies = await getData;
    store.dispatch(loadData(currencies));
    ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
})();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
