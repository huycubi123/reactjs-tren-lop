import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function StudentInfoComponent(props) {
  // gán giá trị props.action và props.student vào biến action và student để sử dụng trong component thay vì phải sử dụng props.action và props.student
  // (do props là một object nên khi có sự thay đổi của props sẽ làm cho component re-render lại, nếu sử dụng props.action và props.student thì sẽ phải truy cập vào props để lấy giá trị mỗi khi sử dụng, 
  // còn nếu gán vào biến action và student thì chỉ cần truy cập vào biến action và student để lấy giá trị mà không cần phải truy cập vào props nữa)
  const { action, student } = props;

  // biến khởi tạo để lưu thông tin sinh viên khi thêm mới hoặc sửa
  const [studentI, setStudentI] = useState({
    id: "",
    name: "",
    age: 0,
    sex: "Nam",
    birth: "",
    prov: "HN",
    adress: "",
  });
  // sử dụng useEffect để cập nhật thông tin student khi có sự thay đổi từ props.student
  useEffect(() => {
    if (student) {
      setStudentI(student);
    }
  }, [student]);

  // hàm xử lý khi có sự thay đổi thông tin trong form thông tin sinh viên
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentI({
      ...studentI,
      [name]: value,
    });
  };
  // hàm xử lý khi submit form thêm , sửa
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(action, studentI);
  };

  // hàm xử lý khi click vào nút close form thông tin 
  // (truyền onClose lên component cha để cập nhật lại trạng thái hiển thị form thông tin)
  const handlerClose = () => {
    props.onClose();
  };
  return (
    <>
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={studentI.id}
                    onChange={handleChange}
                    { ...action === "view" || action === "edit"? { disabled: true } : {} }
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={studentI.name}
                    onChange={handleChange}
                    { ...action === "view" ? { disabled: true } : {} }
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="age"
                    value={studentI.age}
                    onChange={handleChange}
                    { ...action === "view" ? { disabled: true } : {} }
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    name="sex"
                    value={studentI.sex}
                    onChange={handleChange}
                    className="form-control"
                    { ...action === "view" ? { disabled: true } : {} }
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nu">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    name="birth"
                    value={studentI.birth}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    { ...action === "view" ? { disabled: true } : {} }
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name="prov"
                    value={studentI.prov}
                    onChange={handleChange}
                    { ...action === "view" ? { disabled: true } : {} }
                  >
                    <option value="HN">Hà Nội</option>
                    <option value="HCM">TP. Hồ Chí Minh</option>
                    <option value="DN">Đà Nẵng</option>
                    <option value="QN">Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    name="adress"
                    value={studentI.adress}
                    onChange={handleChange}
                    className="form-control"
                    defaultValue={""}
                    { ...action === "view" ? { disabled: true } : {} }
                  />
                </div>
              </div>

              {action == "view" ? (
                <></>
              ) : (
                <>
                  <button
                    type="submit"
                    className="btn btn-primary me-2"
                    onClick={handleSubmit}
                  >
                    {action == "add" ? "Thêm" : "Cập nhật"}
                  </button>
                  <button className="btn btn-primary me-2">
                    Mặc định
                  </button>
                </>
              )}

              <button className="btn btn-secondary" onClick={handlerClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentInfoComponent;