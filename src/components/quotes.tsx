import {  useState } from "react";

type QuoteProps = {
  onSubmit: (quoteAmount: number) => void;
}
const Quotes = ({ onSubmit } : QuoteProps ) => {
  const [quoteAmount, setQuoteAmount] = useState<number>(1)
  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(quoteAmount);
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="1"
            max="25"
            value={quoteAmount}
            onChange={(e) => setQuoteAmount(e.target.valueAsNumber)}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
    </section>
  );
};

export default Quotes;
