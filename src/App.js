import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore, getHistory } from './modules/store'
import './App.css';

import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import ProductPage from './pages/ProductPage';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/brands">
            <BrandPage />
          </Route>
          <Route path="/products">
            <ProductPage />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;