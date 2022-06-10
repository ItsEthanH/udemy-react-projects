import { useParams, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

import NoQuotesFound from '../components/quotes/NoQuotesFound';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ethan', text: 'I like coding' },
  { id: 'q2', author: 'Red', text: 'Get busy living, or get busy dying' },
];

function QuoteDetails() {
  const params = useParams();
  const quoteId = params.quoteId;
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat">
            View Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetails;
