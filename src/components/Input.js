import React, { useContext } from 'react';
import mainContext from '../context/mainContext';

function Input() {
  const { filterData } = useContext(mainContext);
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ (event) => {
        filterData(event.target.value);
      } }
    />
  );
}

export default Input;
