import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [googleData, setGoogleData] = useState(null);
  
  useEffect(() => {
    axios
      .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyC3lNwXJZaRdY3wFgpiqQsnrtHRbteB6FQs')
      .then(({ data }) => {
        setGoogleData(data);
      });
  }, []);

  console.log(googleData);


  return googleData ? (
    <div className="goggleList">
      {googleData.map(data => (
        <>
          <p>{data}</p>
        </>
      ))}
    </div>
  ) : null;
};

export default App;
