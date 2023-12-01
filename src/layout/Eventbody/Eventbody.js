import React from 'react';
import styles from './Eventbody.module.css';
import EventCard from '../../components/Eventcard/Eventcard';
import List from "./Events_list";




const EventBody = (props) => {
    const list = List.Event_list;
    return (
        <div className={styles.Body}>
          
            <div className={styles.container}>
            {Array.isArray(list) && list.map((m, index) => (
                    <EventCard
                        name={m.eventName}
                        date={m.date}
                        desc={m.desc}
                        link={m.link}
                        image={m.image}
                        index={index}
                        key={m.eventName}
                    />
                ))}
            </div>
        </div>
    );
};


export default EventBody;

















