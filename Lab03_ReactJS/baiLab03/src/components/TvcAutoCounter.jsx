import React, { useState, useEffect } from 'react';

const TvcAutoCounter = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="text-center p-3 border border-primary rounded">
            <h2 className="display-4 text-primary">{seconds}s</h2>
            <button className={`btn ${isActive ? 'btn-danger' : 'btn-success'}`} onClick={() => setIsActive(!isActive)}>
                {isActive ? 'Dừng' : 'Bắt đầu'}
            </button>
        </div>
    );
};

export default TvcAutoCounter;