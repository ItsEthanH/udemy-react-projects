import { useParams } from 'react-router-dom';

function QuoteDetails() {
  const params = useParams();
  return (
    <>
      <h1>Quote Details</h1>
      <p>{params.quoteId}</p>
    </>
  );
}

export default QuoteDetails;
