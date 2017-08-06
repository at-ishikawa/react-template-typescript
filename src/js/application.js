import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import Container from './components/layouts/DefaultContainer';
import IndexPage from './components/pages/IndexPage';
import ErrorPage from './components/pages/ErrorPage';
import reducers from './reducers';

import 'bases/reset';

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
);

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ history }>
      <Container>
        <Route exact path="/" component={ IndexPage } />
        <Route component={ ErrorPage } />
      </Container>
    </Router>
  </Provider>
), document.getElementById("react"));
