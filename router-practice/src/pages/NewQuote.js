import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

function NewQuote() {
  const history = useHistory();

  function addQuoteHandler(quoteData) {
    history.push('/quotes');
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
