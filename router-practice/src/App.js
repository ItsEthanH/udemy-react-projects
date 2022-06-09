import { Switch, Route, Redirect } from 'react-router-dom';

import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import Quotes from './pages/Quotes';

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
