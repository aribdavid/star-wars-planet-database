import React, {useState, useEffect} from 'react';
import './App.css';
import mainContext from './context/mainContext';
import Table from './components/Table';

function App() {
  const [planetsData, setData] = useState([]);
  const contextValue = {
    planetsData,
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((data) => data.json());
      setData(response.results);
    };
    getData();
  }, []);
  
  return (
    <mainContext.Provider value={contextValue}>
      <Table />
    </mainContext.Provider>
  );
}

export default App;
