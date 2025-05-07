import Card from './Card';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const endDate = new Date('2025-06-27T10:00:00');

      const timeDifference = endDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTime({
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section>
        <h1>Countdown to Holiday</h1>
        <h4>School year ends on Friday, 27 June 2025, 10:00 AM</h4>

        <div className="cards">
          <Card number={time.days} type="Days" />
          <Card number={time.hours} type="Hours" />
          <Card number={time.minutes} type="Minutes" />
          <Card number={time.seconds} type="Seconds" />
        </div>
      </section>
    </main>
  );
};

export default App;
