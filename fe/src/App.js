import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState(null);

  useEffect(() => {
    fetchMessage();
  }, []);

  function fetchMessage() {
    fetch('http://localhost:3001/api/v1/welcome')
      .then(response => {
        return response.json();
      }).then(json => {
        setWelcomeMessage(json.data.attributes.body);
      }).catch(error => {
        console.log(error);
        setWelcomeMessage("ERROR: Could not load welcome message. Check DevTools Console for additional information, and make sure the BE is running on localhost:3001.");
      })
  }

  return (
    <h1>{welcomeMessage}</h1>
  );
}

export default App;