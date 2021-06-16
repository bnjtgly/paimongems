import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
function DateRange({dateRangeStartChange}) {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format='dd MMM yyyy'
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="container">
          <div className='date-range'>
            <div className="row">
              <div className="col">
                <input id="start_date"
                  className={'input form-control' + (focus === START_DATE ? ' -focused' : '')}
                  {...startDateInputProps}
                  placeholder='Start date'
                />
              </div>
              <div className="col">
                <input id="end_date"
                  className={'input form-control' + (focus === END_DATE ? ' -focused' : '')}
                  {...endDateInputProps}
                  placeholder='End date'
                />
              </div>
            </div>
          </div>
        </div>	
      )}
    </DateRangePicker>
  )
}
export default DateRange