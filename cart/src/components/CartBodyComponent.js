import React from 'react'
import CartItemComponent from './CartItemComponent'
function CartBodyComponent(props) {
    const { carts } = props;
    const renderCartItem = () => {
        return carts.map((cart, index) => {
            return <CartItemComponent key={cart.id} cart={cart} index={index} />
        })
    }
    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCartItem()}
                        {/* <CartItemComponent />
                        <CartItemComponent />
                        <CartItemComponent /> */}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartBodyComponent