import React from "react";
import Cart from "./Cart";

export default function ListCart(props) {

  // ==========================================
  // NHẬN DỮ LIỆU GIỎ HÀNG TỪ APP
  // ==========================================

  const { listCart, onDelete, onUpdate } = props;

  // ==========================================
  // RENDER DANH SÁCH CART
  // ==========================================

  const renderCart = () => {

    return listCart.map((item, index) => {

      return (
        <Cart
          key={item.product.id}
          item={item}
          index={index}
          onUpdate={onUpdate} // Truyền tiếp hàm cập nhật xuống Cart
          onDelete={onDelete} // Truyền tiếp hàm xóa xuống Cart
        />
      );
    });
  };

  // ==========================================
  // TÍNH TỔNG SỐ LƯỢNG SẢN PHẨM
  // ==========================================

  const totalItem = listCart.reduce((total, item) => {

    return total + Number(item.quantityBuy);

  }, 0);

  // ==========================================
  // TÍNH TỔNG TIỀN
  // ==========================================

  const totalPrice = listCart.reduce((total, item) => {

    return total + (
      item.product.price * item.quantityBuy
    );

  }, 0);

  return (
    <div className="panel panel-danger">

      <div className="panel-heading">
        <h1 className="panel-title">Your Cart</h1>
      </div>

      <div className="panel-body">

        <table className="table">

          {/* ==============================
              CART HEADER
          ============================== */}

          <thead>
            <tr>
              <th width="4%">#</th>
              <th>Pokemon</th>
              <th width="15%">Price</th>
              <th width="4%">Quantity</th>
              <th width="20%">Subtotal</th>
              <th width="25%">Action</th>
            </tr>
          </thead>

          {/* ==============================
              CART BODY
          ============================== */}

          <tbody id="my-cart-body">

            {renderCart()}

          </tbody>

          {/* ==============================
              CART FOOTER
          ============================== */}

          <tfoot id="my-cart-footer">

            {/* nếu chưa có sản phẩm */}

            {listCart.length === 0 ? (

              <tr>
                <th colSpan={6}>
                  Empty product in your cart
                </th>
              </tr>

            ) : (

              <tr>

                <td colSpan={4}>
                  There are <b>{totalItem}</b> items
                  in your shopping cart.
                </td>

                <td
                  colSpan={2}
                  className="total-price text-left"
                >
                  {totalPrice} USD
                </td>

              </tr>

            )}

          </tfoot>

        </table>
      </div>
    </div>
  );
}