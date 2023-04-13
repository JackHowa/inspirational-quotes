import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quote, setQuote] = useState<Array<Quote> | undefined>();

  function updateQuoteFromFetchQuotes(quoteAmount: number) {
    fetchQuotes(quoteAmount).then(setQuote)

  }

  useEffect(() => {
    fetchQuotes(1).then(setQuote);
  }, []);

  if (!quote) return <Loading />;

  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      {quote.map(quote => (
        <InspirationalQuote key={quote.id} content={quote.content} source={quote.source} />
      ))}
      <Quotes
        onSubmit={updateQuoteFromFetchQuotes}
      >
        <div className="grid grid-cols-2 gap-4"></div>
      </Quotes>
    </main>
  );
};

export default Application;
