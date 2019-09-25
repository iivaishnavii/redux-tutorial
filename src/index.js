import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { combineReducers,createStore} from 'redux';
import ProductReducer from './reducers/product-reducer'
import UserReducer from './reducers/user-reducer'


const allReducers = combineReducers({
    products : ProductReducer,
    users : UserReducer
})
const store = createStore(allReducers,{
    products : [{name : 'iPhone'}],
    users : 'Vaish'
},
window.devToolsExtension && window.devToolsExtension()
);

const updateUseraction = {
    type : 'updateUser',
    payload : {
        users : 'Ramesh'
    }
}
store.dispatch(updateUseraction)
ReactDOM.render(
<Provider store={store}><App /></Provider>
, document.getElementById('root'));

console.log(store.getState())
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
