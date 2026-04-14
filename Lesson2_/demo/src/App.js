import React, { Component } from "react";
import EventParameter from "./components/EventParameter";
import EventNoParameter from "./components/EventNoParameter";
import Login from "./components/Login";
import Logout from "./components/Logout";
import LoginControl from "./components/LoginControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoTen: "Phi Gia Huy",
      tuoi: 22,
      scourse: "ReactJS",
      isLogin: false,
      number: [1,2,3,4,5]
    };
  }
  changeInfo = () => {
    this.setState({
      hoTen: "DevMaster",
      tuoi: 25,
      scourse: "ReactJS"
    }, () => {
      console.log("Họ và tên: ", this.state.hoTen, "Tuổi: ", this.state.tuoi, "Khóa học: ", this.state.scourse);
    });
  };  
  eventLinkHandler = (event) => {
    event.preventDefault(); 
    // Ngăn chặn hành vi mặc định của thẻ a (chuyển trang hoặc tải lại trang)
    console.log("Event Stop Link .");
  }
  handerChangeName = (event) => {
    this.setState({
      hoTen: event.target.value
    })
  }
  handlerChangeCourse = (event) => {
    this.setState({
      scourse: event.target.value
    })
  }

  // Lấy name của từng thẻ input và select để setState, tránh phải viết nhiều hàm onChange cho từng thẻ
  // Cơ chế: Khi người dùng thay đổi giá trị trong input hoặc select, hàm handerChange sẽ được gọi với đối tượng event chứa thông tin về sự kiện đó. 
  // Hàm sẽ lấy name và value từ event.target (thẻ đang thay đổi) và sử dụng chúng để cập nhật state tương ứng. 
  // Điều này giúp giảm thiểu số lượng hàm onChange cần viết, làm cho code gọn gàng hơn và dễ bảo trì hơn. */
  handerChange =(event) => {
     var name = event.target.name;
     var value = event.target.value;
     this.setState({
      [name]: value
     })  
  }  

  loginControl = () => {
      if(this.state.isLogin) {  
        return <Logout/>
      }else {
        return <Login/>
      }
  }
  handerChangeLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

    

  render() {
    const listNumber = this.state.number.map((number) => {
      return <li key={number}>{number}</li>
      // key: lấy ra giá trị của phần tử trong mảng để làm key, giúp React xác định phần tử nào đã thay đổi,

    })

    return (
      <>
      <div> 
        <h2>Login Control</h2>
        <LoginControl isLogin={this.state.isLogin} hvt={this.state.hoTen}/>
        {
          this.state.isLogin? <button onClick={this.handerChangeLogin}>Logout</button> :
           <button onClick={this.handerChangeLogin}>Login</button>
          // hoặc 
          // this.state.isLogin? <Logout/> : <Login/> (để hiển thị component tương ứng)
          // thay thế cho hàm loginControl() đã viết ở trên, nhưng cách này sẽ khiến cả 2 component Login và Logout đều được render mỗi khi state thay đổi, dù chỉ có một trong số chúng được hiển thị. Cách này không tối ưu về hiệu suất, đặc biệt nếu các component này có logic phức tạp hoặc nhiều state. Cách sử dụng hàm loginControl() sẽ giúp chỉ render component cần thiết dựa trên giá trị của isLogin, tránh việc render không cần thiết và cải thiện hiệu suất của ứng dụng.
        }
      </div> 
      <></>
      <></>
      <div>
        List Number
        <ul>
          {listNumber}
        </ul>
      </div>
        <h2>EventNoParameter</h2>
        <EventNoParameter />
        <h2>EventParameter</h2>
        <EventParameter />
        <div>
          <h2>Form Control</h2>
          <input type="text" placeholder="Nhập họ và tên" value={this.state.hoTen} onChange={this.handerChangeName} />
          <select name="scourse" value={this.state.scourse} onChange={this.handlerChangeCourse}>
            <option value="angular">Angular</option>
            <option value="vuejs">VueJS</option>
            <option value="nodejs">NodeJS</option>
            <option value="php">PHP</option>
          </select>
          <p>Họ và tên: {this.state.hoTen}</p>
          <p>Khóa học: {this.state.scourse}</p>
        </div>

        {/*  Sử dụng handChage cho tất cả  */}
        <div>
          <h2>Form Control</h2>
          <input type="text" placeholder="Nhập họ và tên" value={this.state.hoTen} onChange={this.handerChange} />
          <select name="scourse" value={this.state.scourse} onChange={this.handerChange}>
            <option value="angular">Angular</option>
            <option value="vuejs">VueJS</option>
            <option value="nodejs">NodeJS</option>
            <option value="php">PHP</option>
          </select>
          <p>Họ và tên: {this.state.hoTen}</p>
          <p>Khóa học: {this.state.scourse}</p>
        </div>

        <div>
        <h2>State</h2>
        <p>Họ và tên: {this.state.hoTen}</p>
        <p>Tuổi: {this.state.tuoi}</p>
        <p>Khóa học: {this.state.scourse}</p>
        <button onClick={this.changeInfo}>Change Info</button>
        <h2>Event Link Handler</h2> 
        <a href="https://devmaster.edu.vn/" onClick={this.eventLinkHandler}>Click me</a> 
        </div>      
      </>
    );
  }
}