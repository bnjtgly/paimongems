import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

// const VersionCalendar = () => {
//     return (
//       <div>
//         <DayPicker
//           numberOfMonths={7}
//           month={new Date(2021, 5)}
//           fromMonth={new Date(2021, 5)}
//           toMonth={new Date(2021, 11)}
//           fixedWeeks
//         />;
//       </div>
//     );
// }
  
// export default VersionCalendar
import Calendar from 'react-awesome-calendar';
const events = [
  {
    id: 1,
    color: '#fd3153',
    from: '2021-07-21T18:00:00+00:00',
    to: '2021-07-21T19:00:00+00:00',
    title: 'Version 1.7/2.0'
}, 
{
  id: 2,
  color: '#1ccb9e',
  from: '2021-09-01T13:00:00+00:00',
  to: '2021-09-01T14:00:00+00:00',
  title: 'Version 1.8/2.1'
},
{
  id: 3,
  color: '#1ccb9e',
  from: '2021-10-13T13:00:00+00:00',
  to: '2021-10-13T14:00:00+00:00',
  title: 'Version 1.9/2.2'
},
{
  id: 4,
  color: '#1ccb9e',
  from: '2021-11-24T13:00:00+00:00',
  to: '2021-11-24T14:00:00+00:00',
  title: 'Version 2.3(?)'
},

];

class VersionCalendar extends React.Component {
  render() {
      return (
          <Calendar
              events={events}
          />
      );
  }
}

export default VersionCalendar