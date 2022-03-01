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