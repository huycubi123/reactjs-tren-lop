import React, { useRef, useState, useEffect } from 'react';

const TvcInputFocus = () => {
    const inputRef = useRef(null);
    const [val, setVal] = useState("");
    const prevVal = useRef("");

    useEffect(() => {
        prevVal.current = val;
    }, [val]);

    return (
        <div className="card p-3 shadow-sm">
            <input 
                ref={inputRef} 
                className="form-control mb-2" 
                value={val} 
                onChange={(e) => setVal(e.target.value)} 
                placeholder="Nhập nội dung..."
            />
            <p className="mb-1 text-muted">Hiện tại: {val}</p>
            <p className="text-danger">Lần nhập trước: {prevVal.current}</p>
            <button className="btn btn-info btn-sm" onClick={() => inputRef.current.focus()}>
                Focus vào ô nhập
            </button>
        </div>
    );
};

export default TvcInputFocus;