import React, { useContext } from 'react';
import mainContext from '../context/mainContext';

function ActiveFilters() {
  const { filterByNumericValues, filter, filterInfo } = useContext(mainContext);

  return (
    filter
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
    )
  );
}

export default ActiveFilters;
