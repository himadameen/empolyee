import React from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Details from './component/Details'
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import reducers from './reducers/index'


const App = () => {

  const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <div>
      <Provider store={store}>
        <Details />
      </Provider>
    </div>
  )
}

export default App
