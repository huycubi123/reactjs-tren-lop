import React, { useState } from 'react';

const TvcUseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="p-3 border rounded bg-light">
            <h3 className="text-dark">Count: {count}</h3>
            <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Tăng</button>
                <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Giảm</button>
                <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
};

export default TvcUseState;