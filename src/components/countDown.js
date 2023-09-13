import { useEffect, useState } from 'react';

export default function Counter(props) {

  const useCountdown = () => {
    const countDownDate = new Date(props.timestamp * 1000).getTime();

    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime() > 0 ? countDownDate - new Date().getTime() : 0
    );

    useEffect(() => {
      const interval = setInterval(() => {
        const current = countDownDate - new Date().getTime();
        if (current > 0) {
          setCountDown(current);
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
  };

  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, seconds] = useCountdown();

  return (
    <div>
      <span className="mx-3">Remaining Time : </span>
        <span className="time-1">{hours}</span>
        <span className="time-2"> : </span>
        <span className="time-3">{minutes}</span>
        <span className="time-4"> : </span>
        <span className="time-5">{seconds}</span>
    </div>
  );
}