import React from 'react'

function CartItem() {
    return (
        <tr>
            <td>1</td>
            <td>SV001</td>
            <td>Nguyễn Văn A</td>
            <td>20</td>
            <td>Nam</td>
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

export default CartItem