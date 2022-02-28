import React, { useContext, useState } from 'react';
import mainContext from '../context/mainContext';
import InputName from './InputName';

function Filter() {
  const { filterInfo, toggleFilter } = useContext(mainContext);
  const [column, columnHandler] = useState('population');
  const [comparison, operatorHandler] = useState('maior que');
  const [number, inputHandler] = useState(0);

  return (
    <header>
      <InputName />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => columnHandler(target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
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
          filterInfo({ column, comparison, number });
          toggleFilter(true);
        } }
      >
        Adicionar Filtro
      </button>
    </header>
  );
}

export default Filter;
