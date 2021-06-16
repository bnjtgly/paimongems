import React from 'react';

const BattlePass = ({bpClick}) => {
  return (
      <div className="custom-control custom-checkbox mb-3">
        <input onClick={bpClick} type="checkbox" className="custom-control-input big-checkbox" id="bpCheck" />
        <label className="custom-control-label p-2">Battle Pass</label>
      </div>
  );
}

export default BattlePass