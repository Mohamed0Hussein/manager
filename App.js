import React ,{Component } from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import  Router  from './src/Router';
class App extends Component {

  UNSAFE_componentWillMount(){
    console.disableYellowBox = true; //hide warnings blocks
    const firebase = require('firebase');

    const config = {
      apiKey: "AIzaSyD5gycSyRw7-2s68Hx7_9SOPuyJcvegKUo",
      authDomain: "manager-8b50c.firebaseapp.com",
      databaseURL: "https://manager-8b50c.firebaseio.com",
      projectId: "manager-8b50c",
      storageBucket: "manager-8b50c.appspot.com",
      messagingSenderId: "332796967839"
    };
    firebase.initializeApp(config);
  
  }
  render(){
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
      <Router/>
      </Provider>
    );
  }
}



export default App;