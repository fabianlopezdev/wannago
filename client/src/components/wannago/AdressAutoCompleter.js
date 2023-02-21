import { useEffect, useState } from 'react';

const AddressAutoCompleter = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      if (query.length > 0) {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${query}&dedupe=0`
        );
        const data = await response.json();
        setResults(data);
      } else {
        setResults([]);
      }
    };

    search();
  }, [query]);

  return (
    <div>
      <input
        type='text'
        name='where'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((result) => (
          <li
            key={result.place_id}
            onClick={() => setQuery(result.display_name)}
          >
            {result.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressAutoCompleter;

