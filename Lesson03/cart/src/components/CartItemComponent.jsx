import React from 'react'

function CartItemComponent(props) {
    var { key, cart, index } = props;
    const handerView = () => {
        props.sendCart(cart)
    }
    return (
        <tr key={key}>
            <td>{index + 1}</td>
            <td>{cart.id}</td>
            <td>{cart.name}</td>
            <td>{cart.age}</td>
            <td>{cart.sex}</td>
            <td>{cart.birthday}</td>
            <td>{cart.prov}</td>
            <td>{cart.address}</td>
            <td>
                <div className="template-demo">
                    <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                        // khai báo hàm nên phải dùng () => để gọi hàm handerView khi người dùng click vào nút "Xem"
                        onClick={handerView}
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