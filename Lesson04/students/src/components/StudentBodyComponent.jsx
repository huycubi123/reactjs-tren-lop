import React from "react";
import StudentItemComponent from "./StudentItemComponent";

function StudentBodyComponent(props) {
  const { students } = props;
  const renderStudentItem = () => {
    return students.map((student, index) => {
      return (
        <StudentItemComponent
          key={student.id}
          student={student}
          index={index}
        />
      );
    });
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