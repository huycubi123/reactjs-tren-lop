import React, { Component } from 'react'
import CartHeaderComponent from './components/CartHeaderComponent'
import CartBodyComponent from './components/CartBodyComponent'
import CartInfoComponent from './components/CartInfoComponent'

export default class App extends Component {
  constructor(props) {
    super(props); // gọi hàm khởi tạo của lớp cha (Component) để có thể sử dụng được this trong constructor
    this.state = {
      carts: [
        { id: 1, name: 'Nguyễn Văn A', age: 20, sex: "Nam", birthday: "01/01/2000", prov: "HN", address: "123 Đường ABC" },
        { id: 2, name: 'Trần Thị B', age: 22, sex: "Nữ", birthday: "02/02/2000", prov: "TPHCM", address: "456 Đường DEF" },
        { id: 3, name: 'Lê Văn C', age: 25, sex: "Nam", birthday: "03/03/2000", prov: "DN", address: "789 Đường GHI" },
      ],
      // biến isToggle để xác định xem form thông tin sinh viên có đang hiển thị hay không
      isToggle: false, 
      ItemCart : {
        id: "",
        name: "",
        age: "",
        sex: "",
        birthday: "",
        prov: "",
        address: ""
      }
    }
  }
  handerIsToggle = (status) => {
    this.setState(
      {
      isToggle: status,
      }
  )
  }
  handerView = (item) => {
    this.setState(
      {
      ItemCart: item,
      isToggle: true
      }
    )
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <CartHeaderComponent 
            // truyền hàm handerIsToggle từ component cha (App) xuống component con (CartHeaderComponent) thông qua props để có thể thay đổi giá trị của isToggle khi người dùng click vào nút "Thêm mới sinh viên"
            // trong ngoặc () là của phần khai báo hàm, còn trong ngoặc {} là của phần gọi hàm của component con (CartHeaderComponent)
            sendIsToggle={(status) => this.handerIsToggle(status)}
            />
            <CartBodyComponent carts={this.state.carts}
            sendCart={(item) => this.handerView(item)}
           />
          </div>
        </div>
        {
          // nếu isToggle là true thì hiển thị form thông tin sinh viên, ngược lại thì không hiển thị gì cả
          // Khi người dùng click vào nút "Thêm mới sinh viên" thì hàm handerIsToggle sẽ được gọi và thay đổi giá trị của isToggle thành true, 
          // từ đó form thông tin sinh viên sẽ được hiển thị
          this.state.isToggle ? <CartInfoComponent 
          renderCard={this.state.ItemCart}
          sendIsToggle={status => this.handerIsToggle(status)}
          /> : <></>
        }
      </div>
    )
  }
}