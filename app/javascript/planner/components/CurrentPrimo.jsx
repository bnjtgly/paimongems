import React from 'react';

const CurrentPrimo = ({primogemChange}) => {
  return (
      <input onChange={primogemChange} className="form-control" type="number" placeholder="Current Primo"  />
  );
}

export default CurrentPrimo
