import React, { useContext, useState } from 'react';
import mainContext from '../context/mainContext';

import InputName from './InputName';

function Filter() {
  const { filterInfo, toggleFilter,
    filter, filterByNumericValues, setOrder, setData,
    planetsData } = useContext(mainContext);
  const [column, columnHandler] = useState('population');
  const [comparison, operatorHandler] = useState('maior que');
  const [number, inputHandler] = useState(0);
  const [options, setOptions] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const [sort, selectSort] = useState([]);
  const [method, selectMethod] = useState('');

  const sortPlanets = () => {
    const withoutUnknown = planetsData.filter((planet) => planet[sort] !== 'unknown');
    const withUnknown = planetsData.filter((planet) => planet[sort] === 'unknown');
    if (method === 'ASC') {
      setData(
        [...withoutUnknown.sort((a, b) => Number(a[sort]) - Number(b[sort])),
          ...withUnknown],
      );
    }
    if (method === 'DESC') {
      setData(
        [...withoutUnknown.sort((a, b) => Number(b[sort]) - Number(a[sort])),
          ...withUnknown],
      );
    }
  };

  return (
    <header>
      {filter
    && (
      <div>
        <ul>
          {
            filterByNumericValues.map((current, index) => (
              <li data-testid="filter" key={ index }>
                column:
                {' '}
                {current.column}
                {' | '}
                comparison:
                {' '}
                {current.comparison}
                {' | '}
                number:
                {current.number}
                {' '}
                <button
                  type="button"
                  onClick={ () => {
                    filterInfo((prevInfo) => [...prevInfo
                      .filter((elem) => elem.column !== current.column)]);
                    setOptions((prevOptions) => [...prevOptions, current.column]);
                  } }
                >
                  X
                </button>
              </li>
            ))
          }
        </ul>
        <button
          data-testid="button-remove-filters"
          type="button"
          onClick={ () => {
            filterInfo([]);
          } }
        >
          Remover todas filtragens
        </button>
      </div>
    )}
      <InputName />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => columnHandler(target.value) }

      >
        {options.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => operatorHandler(target.value) }

      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>

      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ number }
        onChange={ ({ target }) => inputHandler(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          filterInfo((prevFilters) => [...prevFilters, { column, comparison, number }]);
          toggleFilter(true);
          setOptions((prevOptions) => [...prevOptions
            .filter((option) => option !== column)]);
        } }
      >
        Adicionar Filtro
      </button>
      <h3>Sort</h3>
      <select
        data-testid="column-sort"
        id="select"
        onChange={ ({ target }) => {
          selectSort(target.value);
        } }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <label data-testid="column-sort-input-asc" htmlFor="ascending">
        Ascending
        <input
          id="ascending"
          name="sort"
          value="ASC"
          onChange={ ({ target }) => {
            selectMethod(target.value);
          } }
          type="radio"
        />
      </label>
      <label data-testid="column-sort-input-desc" htmlFor="descending">
        Descending
        <input
          id="descending"
          name="sort"
          value="DESC"
          type="radio"
          onChange={ ({ target }) => {
            selectMethod(target.value);
          } }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setOrder({ order: { column: sort, sort: method } });
          sortPlanets();
        } }
      >
        Submit

      </button>

    </header>
  );
}

export default Filter;
