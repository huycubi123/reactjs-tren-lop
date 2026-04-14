import React, { Component } from "react";

export default class EventParameter extends Component {
  eventHandlerClick1 = (param1) => {
    console.log("event Handler Click1",param1);
  };
  eventHandlerClick2(param2) {
    console.log("event Handler Click2",param2);
  }

  render() {
    return (
      <div>
        {/* function sẽ được gọi khi render (khác với trường hợp khoong có () khi ở bên kh có tham số kia ) */}
        {/* Khi dùng truyền tham số thì phải có () => để gọi hàm  */}
        {/* Cơ chế: Hàm sẽ bị gọi ngay lập tức khi component được render (vẽ ra), thay vì đợi người dùng click.
        Kết quả: onClick sẽ nhận giá trị trả về của hàm đó (thường là undefined) chứ không phải bản thân hàm.
        Điều này thường gây ra lỗi hoặc khiến hàm chạy tự động khi vừa load trang. */}
        <button onClick={ this.eventHandlerClick1("Parameter 1")}>Click Me</button>
        
        {/* Cơ chế: Đây là cách bọc hàm trong một arrow function. Nó tạo ra một "hàm bao" chờ sẵn.
        Kết quả: Hàm chỉ thực thi khi người dùng click vào nút. Đây là cách làm đúng và phổ biến nhất khi bạn muốn truyền tham số vào event handler trong React. */}
        <button onClick={() => this.eventHandlerClick2("Parameter 2")}>Click Me Too</button>
      </div>
    );
  }
}
