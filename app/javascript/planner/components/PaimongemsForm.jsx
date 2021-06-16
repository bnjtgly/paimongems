import React from 'react';
import DateRange from './DateRange'

const PaimongemsForm = ({paimongemsChange}) => {
    const {start_date, end_date, welkin, bp, current_primogems} = paimongemsChange
    return (
        <div>
            {/* <form onSubmit={paimongemSubmit}> */}
                <div>
                    <DateRange />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div>
                                <input name='welkin' checked={welkin} type="checkbox" className="custom-control-input" id="welkinCheck" onChange={paimongemsChange} />
                                <label className="custom-control-label p-2">Blessing of the Welkin Moon</label>
                            </div>
                            <div>
                                <input name='bp' checked={bp}  type="checkbox" className="custom-control-input" id="bpCheck" onChange={paimongemsChange} />
                                <label className="custom-control-label p-2">Battle Pass</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input name='current_primogems' value={current_primogems}  className="form-control" type="number" placeholder="Current Primo" onChange={paimongemsChange} />
                        </div>
                        <div className="col">
                            {/* <input className="btn btn-light" type="submit" onClick={paimongemSubmit}/> */}
                        </div>
                    </div>
                </div>	
            {/* </form> */}
        </div>
    );
}

export default PaimongemsForm
