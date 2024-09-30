import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Events.css'

const events = [
  { id: 1, name: 'Science Fair', date: 'Oct 15, 2024' },
  { id: 2, name: 'Cultural Fest', date: 'Nov 22, 2024' },
];

function Events() {
  return (
    <div className="container">
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <FontAwesomeIcon className="icon" icon={faCalendarAlt} /> {event.name} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
