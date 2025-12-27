import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2026-12-31T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return { days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="md:mt-11 mt-3 px-6 py-3 rounded-full border border-white/10 
                    bg-white/5 backdrop-blur-md
                    text-white text-[16px] font-normal">
      {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes
    </div>
  );
};

export default Countdown;
