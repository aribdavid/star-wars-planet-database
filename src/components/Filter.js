import React, { useContext, useState } from 'react';
import mainContext from '../context/mainContext';
import ActiveFilters from './ActiveFilters';
import InputName from './InputName';

function Filter() {
  const { filterInfo, toggleFilter } = useContext(mainContext);
  const [column, columnHandler] = useState('population');
  const [comparison, operatorHandler] = useState('maior que');
  const [number, inputHandler] = useState(0);
  const [options, setOptions] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  return (
    <header>
      <ActiveFilters />
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
    </header>
  );
}

export default Filter;
