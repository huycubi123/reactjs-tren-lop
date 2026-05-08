import React from "react";
import { useState } from "react";

function Product(props) {
  // ==================================================
  // NHẬN DỮ LIỆU TỪ LISTPRODUCT
  // ==================================================

  // product:
  // chứa thông tin sản phẩm để hiển thị ra UI
  // lấy từ props được ListProduct truyền xuống
  const { product } = props;

  // ==================================================
  // QUẢN LÝ SỐ LƯỢNG MUA
  // ==================================================

  // quantityBuy:
  // lưu số lượng người dùng muốn mua

  // setQuantityBuy:
  // dùng để cập nhật lại số lượng mua

  const [quantityBuy, setQuantityBuy] = useState(1);

  // ==================================================
  // KIỂM SOÁT INPUT SỐ LƯỢNG
  // ==================================================

  // Xử lý khi người dùng thay đổi số lượng mua

  // Không cho:
  // - nhỏ hơn 1
  // - lớn hơn số lượng tồn kho

  const handlerChangeQuantity = (e) => {
    console.log("Số lượng mua: ", e.target.value);

    if (e.target.value < 1) {
      setQuantityBuy(1);
    } else if (e.target.value > product.quantity) {
      setQuantityBuy(product.quantity);
    } else {
      setQuantityBuy(e.target.value);
    }
  };

  // ==================================================
  // XỬ LÝ MUA HÀNG
  // ==================================================

  // Khi click "Mua hàng":
  // 1. tạo object cart
  // 2. gửi dữ liệu lên component cha

  const handleBuy = (e) => {
    // chặn reload trang do thẻ a gây ra
    e.preventDefault();

    // ==================================================
    // TẠO OBJECT GIỎ HÀNG
    // ==================================================

    // cart gồm:
    // - thông tin sản phẩm
    // - số lượng mua

    let cart = {
      quantityBuy: quantityBuy,

      product: product, // chứa toàn bộ thông tin sản phẩm ( id, name, price, image, quantity )
      // hoặc productID: product.id, productName: product.name, ... (tùy theo nhu cầu)
    };

    console.log("Giỏ hàng: ", cart);

    // ==================================================
    // TRUYỀN DỮ LIỆU LÊN COMPONENT CHA
    // ==================================================

    // Luồng sự kiện:
    // Product -> ListProduct -> App

    props.onBuy(cart);
  };

  // Thông tin sản phẩm được hiển thị ra UI dựa trên object product
  // được truyền từ ListProduct xuống qua props
  // return ra giao diện sản phẩm dựa trên thông tin trong object product
  return (
    <>
      {/* ==============================
          PRODUCT ITEM
      ============================== */}

      <div className="media product">
        <div className="media-left">
          <a href="#">
            <img
              className="media-object"
              src={product.image}
              alt={product.name}
            />
          </a>
        </div>

        <div className="media-body">
          <h4 className="media-heading">{product.name}</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
            asperiores veniam repellat unde debitis quisquam magnam magni ut
            deleniti!
          </p>

          {/* ==============================
              KIỂM TRA TÌNH TRẠNG SẢN PHẨM
          ============================== */}

          {/* 
            Nếu quantity > 0:
            hiển thị nút mua hàng

            Nếu hết hàng:
            chỉ hiển thị giá sản phẩm
          */}

          {product.quantity > 0 ? (
            <>
              {/* Input nhập số lượng mua */}

              <input
                name="quantity"
                type="number"
                value={quantityBuy} // giá trị của input được lấy từ state quantityBuy
                min={1} 
                max={product.quantity} // giới hạn số lượng mua tối thiểu là 1 và tối đa là số lượng tồn kho
                onChange={handlerChangeQuantity}
              />

              {/* Nút mua hàng */}

              <button
                data-product={1}
                className="btn btn-success"
                onClick={handleBuy} // gọi hàm handleBuy khi click vào nút mua hàng
              >
                Mua hàng
              </button>

              {/* Giá sản phẩm */}

              <a data-product={1} href="#" className="price">
                {product.price} USD
              </a>
            </>
          ) : (
            // Trường hợp sản phẩm hết hàng

            <span className="price">{product.price} USD</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
