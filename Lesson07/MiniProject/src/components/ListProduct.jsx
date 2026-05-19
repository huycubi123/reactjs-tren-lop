import React from "react";
import Product from "./Product";

export default function ListProduct(props) {

  // ==================================================
  // NHẬN DỮ LIỆU TỪ APP
  // ==================================================

  // listProduct:
  // chứa danh sách sản phẩm được App truyền xuống

  const { listProduct } = props;

  // ==================================================
  // NHẬN SỰ KIỆN MUA HÀNG TỪ PRODUCT
  // ==================================================

  // Luồng sự kiện:
  // Product -> ListProduct -> App

  // Product gửi dữ liệu cart lên ListProduct
  // sau đó ListProduct truyền tiếp lên App

  const handleBuy = (cart) => {

    // truyền dữ liệu tiếp lên component App
    props.onBuy(cart);
  };

  

  // ==================================================
  // RENDER DANH SÁCH SẢN PHẨM
  // ==================================================

  // map():
  // duyệt qua từng phần tử trong mảng listProduct

  // mỗi phần tử sẽ render ra 1 component Product

  const renderListProduct = () => {

    return listProduct.map((product) => {

      return (
        <Product
          key={product.id}
          product={product}
          onBuy={handleBuy}
        />
      );
    });
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

      <div className="panel panel-primary">

        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>

        <div className="panel-body" id="list-product">

          {/* Hiển thị danh sách sản phẩm */}

          {renderListProduct()}

        </div>
      </div>
    </div>
  );
}