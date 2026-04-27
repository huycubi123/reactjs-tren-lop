import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function StudentInfoComponent(props) {
  const { action, student } = props;

  const [studentI, setStudentI] = useState({
    id: "",
    name: "",
    age: 0,
    sex: "Nam",
    birth: "",
    prov: "HN",
    adress: "",
  });
  useEffect(() => {
    if (student) {
      setStudentI(student);
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentI({
      ...studentI,
      [name]: value,
    });
  };
  const handleSubmit =(e)=>{
    e.preventDefault()
    props.onSubmit("add",studentI)
  }
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
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2"
                onClick={handleSubmit}
              >
                {action == "add" ? "Thêm" : "Cập nhật"}
              </button>
              <button className="btn btn-primary me-2">
                {action == "view" ? "Xóa" : "Mặc định"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentInfoComponent;