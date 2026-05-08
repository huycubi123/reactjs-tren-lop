// ==============================
// IMPORT THƯ VIỆN / COMPONENT
// ==============================

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

import Header from "./components/Header";
import ListProduct from "./components/ListProduct";
import ListCart from "./components/ListCart";
import Alert from "./components/Alert";

// import './App.css'

function App() {
  // ==================================================
  // 1. QUẢN LÝ DANH SÁCH SẢN PHẨM
  // ==================================================

  // App là component cha giữ dữ liệu gốc của sản phẩm

  // Dữ liệu sẽ được truyền xuống theo luồng:
  // App -> ListProduct -> Product

  // useState dùng để:
  // - lưu dữ liệu sản phẩm
  // - khi dữ liệu thay đổi thì UI tự render lại

  // Hiện tại mới chỉ render danh sách sản phẩm
  // chưa xử lý localStorage, tìm kiếm, sắp xếp,...

  const [listProduct, setListProduct] = useState([
    {
      id: 1,
      name: "aplusautomation",
      price: 12,
      image: "/src/assets/images/aplusautomation.jpg",
      quantity: 10,
      status: true,
    },
    {
      id: 2,
      name: "aplus media",
      price: 12,
      image: "/src/assets/images/aplus-media.jpg",
      quantity: 0,
      status: true,
    },
    {
      id: 3,
      name: "robo fig combo",
      price: 12,
      image: "/src/assets/images/robo_fig_combo.jpg",
      quantity: 10,
      status: true,
    },
    {
      id: 4,
      name: "target leap frog",
      price: 12,
      image: "/src/assets/images/target-leap-frog.jpg",
      quantity: 10,
      status: true,
    },
  ]);

  // ==================================================
  // 2. QUẢN LÝ GIỎ HÀNG
  // ==================================================

  // listCart:
  // lưu danh sách sản phẩm đã mua

  // setListCart:
  // dùng để cập nhật lại state giỏ hàng

  // App giữ state giỏ hàng để:
  // - truyền xuống ListCart
  // - truyền xuống Alert
  // - đồng bộ dữ liệu toàn ứng dụng

  const [listCart, setListCart] = useState([]);

  // ==================================================
  // 3. NHẬN DỮ LIỆU MUA HÀNG TỪ COMPONENT CON
  // ==================================================

  // Luồng sự kiện:
  // Product -> ListProduct -> App

  // Khi click "Mua hàng":
  // Product sẽ gửi object cart lên App

  const handlerBuy = (cart) => {
    console.log("Sản phẩm được mua: ", cart);

    // ==================================================
    // KIỂM TRA SẢN PHẨM ĐÃ TỒN TẠI TRONG GIỎ HÀNG CHƯA
    // ==================================================

    // Tạo biến tạm để xử lý dữ liệu giỏ hàng

    // Không thao tác trực tiếp với state
    // mà tạo ra một mảng mới để xử lý

    let list = listCart;

    // findIndex():
    // - tìm vị trí sản phẩm trong mảng
    // - nếu không tìm thấy sẽ trả về -1

    let index = list.findIndex((item) => item.idProduct === cart.idProduct);

    // ==================================================
    // NẾU SẢN PHẨM ĐÃ TỒN TẠI
    // ==================================================

    // Cộng thêm số lượng mua mới

    if (index !== -1) {
      list[index].quantityBuy += cart.quantityBuy;
    }

    // ==================================================
    // NẾU SẢN PHẨM CHƯA TỒN TẠI
    // ==================================================

    // Thêm mới sản phẩm vào giỏ hàng
    else {
      list.push(cart);
    }

    console.log("List Cart: ", list);

    // ==================================================
    // CẬP NHẬT LẠI STATE GIỎ HÀNG
    // ==================================================

    setListCart(list);
  };

  return (
    <>
      <div className="container">
        {/* ==============================
            HEADER
        ============================== */}

        <Header />

        <div className="row">
          {/* ==============================
              DANH SÁCH SẢN PHẨM
          ============================== */}

          {/* 
            Truyền dữ liệu từ App xuống ListProduct

            listProduct:
            dữ liệu danh sách sản phẩm

            onBuy:
            hàm nhận dữ liệu mua hàng từ component con product
          */}

          <ListProduct listProduct={listProduct} onBuy={handlerBuy} />

          {/* ==============================
              GIỎ HÀNG VÀ THÔNG BÁO
          ============================== */}

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            {/* Hiển thị danh sách sản phẩm đã mua */}
            <ListCart />

            {/* Hiển thị thông báo mua hàng */}
            <Alert />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
