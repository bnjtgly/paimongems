import React from 'react';

const Welkin = ({welkinClick}) => {
  return (
      <div  className="custom-control custom-checkbox mt-3">
        <input onClick={welkinClick} type="checkbox" className="custom-control-input big-checkbox" id="welkinCheck" />
        <label className="custom-control-label p-2">Blessing of the Welkin Moon</label>
      </div>
  );
}

export default Welkin