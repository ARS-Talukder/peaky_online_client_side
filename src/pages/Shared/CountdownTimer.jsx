import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ startTime, endTime }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const start = new Date(startTime).getTime();
        const end = new Date(endTime).getTime();

        if (now < start) {
            // Offer hasn't started yet
            return { status: 'notStarted', time: start - now };
        } else if (now > end) {
            // Offer ended
            return { status: 'ended', time: 0 };
        } else {
            // Offer running
            return { status: 'running', time: end - now };
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [startTime, endTime]);

    const formatTime = (milliseconds) => {
        let totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    if (timeLeft.status === 'notStarted') return <p className="text-blue-600 font-bold">Starts in: {formatTime(timeLeft.time)}</p>;
    if (timeLeft.status === 'ended') return <p className="text-red-600 font-bold">Offer ended</p>;
    return <p className="text-green-600 font-bold">Ends in: {formatTime(timeLeft.time)}</p>;
};

export default CountdownTimer;