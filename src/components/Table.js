import React, { useContext, useEffect, useState } from 'react';
import mainContext from '../context/mainContext';

function Table() {
  const { planetsData,
    filterByName,
    filterByNumericValues,
    filter } = useContext(mainContext);

  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(planetsData);
    const flibs = () => {
      filterByNumericValues.forEach((value) => {
        if (filter && value.comparison === 'maior que') {
          const { column, number } = value;
          setResults((prevResults) => [...prevResults
            .filter((elem) => Number(elem[column]) > number)]);
        } else if (filter && value.comparison === 'menor que') {
          const { column, number } = value;
          setResults((prevResults) => [...prevResults
            .filter((elem) => Number(elem[column]) < number)]);
        } else if (filter && value.comparison === 'igual a') {
          const { column, number } = value;
          setResults((prevResults) => [...prevResults
            .filter((elem) => Number(elem[column]) === Number(number))]);
        } else {
          setResults(planetsData);
        }
      });
    };
    flibs();
  }, [filter, filterByNumericValues, planetsData]);

  return (
    <div>
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
                <td data-testid="planet-name">{planet.name}</td>
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
    </div>
  );
}

export default Table;
