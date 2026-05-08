import React from "react";

function StudentItemComponent(props) {
  const { key, student, index } = props;
  // sự kiện gọi khi click vào các nút xem, sửa, xóa
  const handerAction = (action, student) => {
    // console.log( "StudentItemComponent",  evt, stu);
    // tạo biến obj để chứa các thông tin cần truyền lên trên
    const evt = {
      action: action,
      status: true,
      student: student,
    };
    // thông qua props gọi hàm onAction để truyền thôn tin lên component cha là StudentBodyComponent
    props.onAction(evt);
  };

  return (
    <>
      <tr key={key}>
        <td>{index + 1}</td>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.sex}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => handerAction("view", student)}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={() => handerAction("edit", student)}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={() => handerAction("delete", student)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default StudentItemComponent;