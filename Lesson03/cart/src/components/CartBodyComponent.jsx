import React from 'react'
import CartItemComponent from './CartItemComponent'
function CartBodyComponent(props) {
    const { carts } = props;
    const renderCartItem = () => {
        return carts.map((cart, index) => {
            return <CartItemComponent key={cart.id} cart={cart} index={index} 
            sendCart={(item) => handerView(item)}       
            />
        })
    }
    const handerView = (item) => {
        props.sendCart(item)
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
                            <th>Ngày sinh</th>
                            <th>Nơi sinh</th>
                            <th>Địa chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCartItem()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartBodyComponent