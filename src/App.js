import React, { useState, useEffect } from 'react';
import './App.css';
import mainContext from './context/mainContext';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  const [planetsData, setData] = useState([]);
  const [filterPlanets, filterData] = useState('');
  const [info, filterInfo] = useState([]);
  const [filter, toggleFilter] = useState(false);

  const contextValue = {
    planetsData,
    filterByName: { name: filterPlanets },
    filterData,
    filterByNumericValues: info,
    filterInfo,
    filter,
    toggleFilter,
    info,
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://star-api-wars.herokuapp.com/')
        .then((data) => data.json());
      setData(response.results);
    };
    getData();
  }, []);

  return (
    <mainContext.Provider value={ contextValue }>
      <Filter />
      <Table />
    </mainContext.Provider>
  );
}

export default App;
