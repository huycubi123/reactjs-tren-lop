import React from "react";
import { useState, useEffect } from "react";
function Cart(props) {
  // ==========================================
  // NHẬN DỮ LIỆU VÀ HÀM TỪ LISTCART
  // ==========================================

  const { item, index, onDelete, onUpdate } = props;

  // ==========================================
  // QUẢN LÝ SỐ LƯỢNG MUA TẠI DÒNG (LOCAL STATE)
  // ==========================================

  // Khởi tạo trạng thái số lượng riêng cho ô input dựa trên dữ liệu gốc ban đầu
  const [quantity, setQuantity] = useState(item.quantityBuy);

  // Cập nhật lại số lượng hiển thị trong ô input nếu dữ liệu từ App thay đổi
  useEffect(() => {
    setQuantity(item.quantityBuy);
  }, [item.quantityBuy]);

  // Xử lý sự kiện khi người dùng thay đổi số lượng trên ô input
  const handlerChangeQuantity = (e) => {
    let value = Number(e.target.value);

    // Kiểm tra tính hợp lệ của số lượng nhập vào
    if (value < 1) {
      setQuantity(1);
    } else if (value > item.product.quantity) {
      setQuantity(item.product.quantity);
    } else {
      setQuantity(value);
    }
  };

  // ==========================================
  // XỬ LÝ SỰ KIỆN CLICK ACTIONS
  // ==========================================

  // Xử lý khi nhấn nút Update
  const handleUpdate = (e) => {
    e.preventDefault(); // Chặn hành vi tải lại trang của thẻ a

    // Gọi hàm truyền từ App lên để cập nhật số lượng mới dựa trên id sản phẩm
    onUpdate(item.product.id, quantity);
  };

  // Xử lý khi nhấn nút Delete
  const handleDelete = (e) => {
    e.preventDefault(); // Chặn hành vi tải lại trang của thẻ a

    // Gửi id sản phẩm cần xóa ngược lên App xử lý
    onDelete(item.product.id);
  };

  return (
    <>
      <tr>
        {/* STT */}

        <th scope="row">{index + 1}</th>

        {/* TÊN SẢN PHẨM */}

        <td>{item.product.name}</td>

        {/* GIÁ */}

        <td>{item.product.price} USD</td>

        {/* SỐ LƯỢNG */}

        <td>
          <input
            name={`cart-item-${index}`}
            type="number"
            value={quantity} // giá trị của input được lấy từ state quantity
            min={1}
            max={item.product.quantity}
            onChange={handlerChangeQuantity}
          />
        </td>

        {/* THÀNH TIỀN */}

        <td>
          <strong>{item.product.price * item.quantityBuy} USD</strong>
        </td>

        {/* ACTION */}

        <td>
          <a className="label label-info update-cart-item" href="#"
            onClick={handleUpdate}
            >
            Update
          </a>{" "}
          <a className="label label-danger delete-cart-item" href="#"
            onClick={handleDelete}
            >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
}

export default Cart;
