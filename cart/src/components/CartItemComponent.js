import React from 'react'

function CartItemComponent(props) {
    var { key, cart, index } = props;
    return (
        <tr key={key}>
            <td>{index + 1}</td>
            <td>{cart.id}</td>
            <td>{cart.name}</td>
            <td>{cart.price}</td>
            <td>{cart.quantity}</td>
            <td>
                <div className="template-demo">
                    <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                    >
                        Xem
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                    >
                        Sửa
                    </button>
                    <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default CartItemComponent