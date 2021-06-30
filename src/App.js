import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import PageTemplate from './components/templates/pageTemplate';
import ErrorBoundary from './ErrorBoundary';

import './app.scss';

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PageTemplate>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </PageTemplate>
      </ErrorBoundary>
    </div>
  );
}
