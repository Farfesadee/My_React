import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quoteCount, setQuoteCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError('');
    setCopied(false);
    try {
      const response = await fetch('https://zenquotes.io/api/random');
      if (!response.ok) throw new Error('Failed to fetch quote');
      const data = await response.json();
      const result = data[0];
      setQuote({
        text: result.q,
        author: result.a,
        length: result.q.length,
      });
      setQuoteCount(prev => prev + 1);
    } catch (err) {
      setError(err.message);
      setQuote(null);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h2>💬 Daily Inspiration</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {quote && !loading && (
        <div>
          <blockquote style={{ fontStyle: 'italic' }}>"{quote.text}"</blockquote>
          <p>- {quote.author}</p>
          <p>Length: {quote.length} characters</p>
          <p>Quotes viewed: {quoteCount}</p>
          <button onClick={fetchQuote} style={{ marginRight: '1rem' }}>New Quote</button>
          <button onClick={copyToClipboard}>Copy Quote</button>
          {copied && <span style={{ marginLeft: '1rem', color: 'green' }}>Copied!</span>}
        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;