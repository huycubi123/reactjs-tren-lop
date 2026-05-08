import React from "react";
import StudentItemComponent from "./StudentItemComponent";

function StudentBodyComponent(props) {
  // gán giá trị props.students vào biến students để sử dụng
  const { students } = props;
  // hàm để render dnah sách sinh viên
  const renderStudentItem = () => {
    return students.map((student, index) => {
      return (
        <StudentItemComponent
        // truyền các tham số cần thiết cho component StudnetItemComponent
          key={student.id}
          student={student}
          index={index}
          // lấy thông tin sự kiện khi click vào các nút xem, sửa, xóa ở component StudentItemComponent
          onAction = {(evt)=> handerActionBody(evt)}
        />
      );
    });
  };
  // hàm xử lý khi có sự kiện từ  component StudentItemComponent truyền lên
  const handerActionBody = (evt) => {
    // console.log( "StudentItemBody",  evt, stu);
    // thông qua props gọi hàm onAction để truyền thôn tin lên component cha là App.jsx
    props.onActionBody(evt);
  };
  return (
    <>
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
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{renderStudentItem()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentBodyComponent;