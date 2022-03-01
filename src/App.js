import React, { useState, useEffect } from 'react';
import './App.css';
import mainContext from './context/mainContext';
import Table from './components/Table';
import Filter from './components/Filter';

const ONE = 1;
const ONE_NEGATIVE = -1;

function App() {
  const [planetsData, setData] = useState([]);
  const [filterPlanets, filterData] = useState('');
  const [info, filterInfo] = useState([]);
  const [filter, toggleFilter] = useState(false);
  const [order, setOrder] = useState();

  const contextValue = {
    planetsData,
    filterByName: { name: filterPlanets },
    filterData,
    filterByNumericValues: info,
    filterInfo,
    filter,
    toggleFilter,
    info,
    order,
    setOrder,
    setData,
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://star-api-wars.herokuapp.com/')
        .then((data) => data.json());
      setData(response.results.sort((a, b) => {
        if (a.name < b.name) { return ONE_NEGATIVE; }
        if (a.firstname > b.firstname) { return ONE; }
        return 0;
      }));
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
