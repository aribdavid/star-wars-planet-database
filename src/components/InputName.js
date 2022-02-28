import React, { useContext } from 'react';
import mainContext from '../context/mainContext';

function InputName() {
  const { filterData } = useContext(mainContext);
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ ({ target }) => {
        filterData(target.value);
      } }
    />
  );
}

export default InputName;
