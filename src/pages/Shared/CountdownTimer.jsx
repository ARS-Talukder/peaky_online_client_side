import React, { useEffect, useState } from "react";

const CountdownTimer = ({ startTime, endTime }) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const start = new Date(startTime).getTime();
            const end = new Date(endTime).getTime();

            let distance;
            if (now < start) {
                distance = start - now; // Countdown to start
            } else {
                distance = end - now; // Countdown to end
            }

            if (distance <= 0) {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
            } else {
                setTimeLeft({
                    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((distance / (1000 * 60)) % 60),
                    seconds: Math.floor((distance / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [startTime, endTime]);

    return (
        <div className="text-red-600 font-bold text-lg">
            {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </div>
    );
};

export default CountdownTimer;