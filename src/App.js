import React, { useState, useEffect } from 'react';
import './App.css';
import mainContext from './context/mainContext';
import Table from './components/Table';
import Input from './components/Input';

function App() {
  const [planetsData, setData] = useState([]);
  const [filterPlanets, filterData] = useState('');

  const contextValue = {
    planetsData,
    filterByName: { name: filterPlanets },
    filterData,
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
    <mainContext.Provider value={ contextValue }>
      <Input />
      <Table />
    </mainContext.Provider>
  );
}

export default App;
