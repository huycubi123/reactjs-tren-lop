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

  const [listCart, setListCart] = useState(() => {
    // Lấy dữ liệu giỏ hàng từ localStorage
    const saveCart = localStorage.getItem("cartData");

    // Nếu có dữ liệu thì parse chuỗi JSON về mảng , nếu không thì trả về mảng rỗng
    return saveCart ? JSON.parse(saveCart) : [];
  });

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

    let list = [...listCart];

    // findIndex():
    // - tìm vị trí sản phẩm trong mảng
    // - nếu không tìm thấy sẽ trả về -1

    let index = list.findIndex((item) => item.product.id === cart.product.id);

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
    // cập nhật lại localStorage với dữ liệu giỏ hàng mới
    localStorage.setItem("cartData", JSON.stringify(list));
    // ==================================================
    // CẬP NHẬT LẠI STATE GIỎ HÀNG
    // ==================================================

    setListCart(list);
    console.log("Giỏ hàng cập nhật: ", newListCart);
  };

  // ==================================================

  // --- BƯỚC 2.2: XỬ LÝ SỰ KIỆN XÓA SẢN PHẨM KHỎI GIỎ HÀNG ---
  const handlerDelete = (idProduct) => {
    // Tạo bản sao của listCart
    let newListCart = [...listCart];

    // Lọc bỏ sản phẩm có id trùng với id truyền lên
    newListCart = newListCart.filter((item) => item.product.id !== idProduct);

    // Đồng bộ localStorage và cập nhật State
    localStorage.setItem("cartData", JSON.stringify(newListCart));
    setListCart(newListCart);
  };
  // --- BƯỚC 2.3: XỬ LÝ SỰ KIỆN CẬP NHẬT SỐ LƯỢNG MUA TRONG GIỎ ---
  const handlerUpdate = (idProduct, newQuantity) => {
    let newListCart = [...listCart];

    // Tìm vị trí sản phẩm cần cập nhật số lượng
    let index = newListCart.findIndex((item) => item.product.id === idProduct);

    if (index !== -1) {
      // Cập nhật lại số lượng mua mới
      newListCart[index].quantityBuy = Number(newQuantity);

      // Đồng bộ localStorage và cập nhật State
      localStorage.setItem("CART_DATA", JSON.stringify(newListCart));
      setListCart(newListCart);
    }
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

            onDelete:
            hàm nhận dữ liệu xóa sản phẩm khỏi giỏ hàng từ component con cart
            
            onUpdate:
            hàm nhận dữ liệu cập nhật số lượng mua trong giỏ hàng từ component con cart
          */}

          <ListProduct
            listProduct={listProduct}
            onBuy={handlerBuy}
          />

          {/* ==============================
              GIỎ HÀNG VÀ THÔNG BÁO
          ============================== */}

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            {/* Hiển thị danh sách sản phẩm đã mua */}
            {/* Truyền dữ liệu từ App xuống ListCart để hiển thị */}
            {/*  */}
            <ListCart listCart={listCart} onDelete={handlerDelete} onUpdate={handlerUpdate}/>

            {/* Hiển thị thông báo mua hàng */}
            <Alert />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
