import React from "react";

function StudentItemComponent(props) {
const {key,student, index} = props
  return (
    <>
        <tr key ={key}>
          <td>{index+1}</td>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.sex}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text">
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
  );
}

export default StudentItemComponent;