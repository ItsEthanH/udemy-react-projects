import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ethan', text: 'I like coding' },
  { id: 'q2', author: 'Red', text: 'Get busy living, or get busy dying' },
];

function Quotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default Quotes;
