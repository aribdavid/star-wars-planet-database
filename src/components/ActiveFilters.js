import React, { useContext } from 'react';
import mainContext from '../context/mainContext';

function ActiveFilters() {
  const { filterByNumericValues, filter } = useContext(mainContext);

  return (
    filter
    && (
      <div>
        <h1>Kleber</h1>
        <ol>
          {
            filterByNumericValues.map((current, index) => (
              <li key={ index }>
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
              </li>
            ))
          }
        </ol>
      </div>
    )
  );
}

export default ActiveFilters;
