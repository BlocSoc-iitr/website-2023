import React from "react";
import styles from "./Eventbody.module.css";
import EventCard from "../../components/Eventcard/Eventcard";
import List from "./Events_list";
import { motion } from "framer-motion";
const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const EventBody = (props) => {
  const list = List.Event_list;
  return (
    <div className={styles.Body}>
      <div className={styles.container}>
        {Array.isArray(list) &&
          list.map((m, index) => (
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{
                x: 0,
                y: 0,
                transition: {
                  type: "tween",
                  delay: 0.2,
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true }}
            >
              <EventCard
                name={m.eventName}
                date={m.date}
                desc={m.desc}
                link={m.link}
                image={m.image}
                index={index}
                key={m.eventName}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default EventBody;
