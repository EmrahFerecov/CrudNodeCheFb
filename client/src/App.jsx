  import {React, useEffect, useState } from 'react';
  import axios from 'axios';
  import './App.css';

  function App() {
    const [card, setCard] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000');
          setCard(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, []);

    return (
      <div className="cards">
        {card && card.length > 0 ? (
          card.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <ul>
                <li>{item.name}</li>
                <li>{item.info}</li>
                <li>{item.price}</li>
              </ul>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }

  export default App;
