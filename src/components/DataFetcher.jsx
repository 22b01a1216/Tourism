/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000')  // Fetching data from backend
  .then(response => {
    setData(response.data);  // Store backend response in 'data'
  })
  .catch(error => {
    setError('There was an error making the request!');
    console.error(error);
  });

  }, []);

  if (error) return <div>{error}</div>;  // Display error if any
  if (!data) return <div>Loading...</div>;  // Show loading until data is fetched

  return (
    <div>
      <h2>Data from Backend:</h2>
      <pre>{data}</pre>  // Display the backend response
    </div>
  );
};

export default DataFetcher;
*/