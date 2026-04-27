import React, { useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'INC': return { count: state.count + 1 };
        case 'DEC': return { count: state.count - 1 };
        default: return state;
    }
};

const TvcCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="alert alert-success">
            <h4>Giỏ hàng: {state.count} sản phẩm</h4>
            <button className="btn btn-sm btn-success me-2" onClick={() => dispatch({ type: 'INC' })}>+</button>
            <button className="btn btn-sm btn-warning" onClick={() => dispatch({ type: 'DEC' })}>-</button>
        </div>
    );
};

export default TvcCounter;