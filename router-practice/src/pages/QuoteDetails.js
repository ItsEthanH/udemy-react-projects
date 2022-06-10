import { useParams, Route } from 'react-router-dom';

import NoQuotesFound from '../components/quotes/NoQuotesFound';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ethan', text: 'I like coding' },
  { id: 'q2', author: 'Red', text: 'Get busy living, or get busy dying' },
];

function QuoteDetails() {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetails;
