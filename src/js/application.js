// @flow
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Container from './components/layouts/DefaultContainer';
import IndexPage from './components/pages/IndexPage';
import ErrorPage from './components/pages/ErrorPage';
import reducers from './reducers';

import 'bases/reset.css';

const store = createStore(
  combineReducers({
      ...reducers,
    routing: routerReducer
  })
);

ReactDOM.render((
  <Provider store={ store }>
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={ IndexPage } />
          <Route component={ ErrorPage } />
        </Switch>
      </Container>
    </Router>
  </Provider>
), document.getElementById("react"));
