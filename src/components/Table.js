import React, { useContext, useEffect, useState } from 'react';
import mainContext from '../context/mainContext';

function Table() {
  const { planetsData,
    filterByName,
    filterByNumericValues,
    filter } = useContext(mainContext);

  const [results, setResults] = useState([]);

  useEffect(() => {
    const flibs = () => {
      if (filter && filterByNumericValues[0].comparison === 'maior que') {
        const { column, number } = filterByNumericValues[0];
        setResults(planetsData
          .filter((elem) => Number(elem[column]) > number));
      } else if (filter && filterByNumericValues[0].comparison === 'menor que') {
        const { column, number } = filterByNumericValues[0];
        setResults(planetsData
          .filter((elem) => Number(elem[column]) < number));
      } else if (filter && filterByNumericValues[0].comparison === 'igual a') {
        const { column, number } = filterByNumericValues[0];
        setResults(planetsData
          .filter((elem) => Number(elem[column]) === Number(number)));
      } else {
        setResults(planetsData);
      }
    };
    flibs();
  }, [filter, filterByNumericValues, planetsData]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {results
          .filter((planet) => planet.name.includes(filterByName.name))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
      </tbody>
    </table>
  );
}

export default Table;
