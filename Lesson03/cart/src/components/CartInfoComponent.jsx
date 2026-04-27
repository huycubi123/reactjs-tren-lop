import React from "react";

function CartInfoComponent(props) {
        const changeIsToggle = () => {
        // gọi hàm sendIsToggle được truyền từ component cha (App) để thay đổi giá trị của isToggle
        props.sendIsToggle(false);
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
                  <input type="text" className="form-control "
                   // phương thức nên khoongg có this
                   value={props.renderCard.id} 
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control"
                  value={props.renderCard.name}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" 
                   value={props.renderCard.age}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select className="form-control" value={props.renderCard.sex}>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input className="form-control" placeholder="dd/mm/yyyy" value={props.renderCard.birthday} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select className="form-control" value={props.renderCard.prov}>
                    <option value={"HN"}>Hà Nội</option>
                    <option value={"TPHCM"}>TP. Hồ Chí Minh</option>
                    <option value={"DN"}>Đà Nẵng</option>
                    <option value={"QN"}>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea className="form-control" defaultValue={""} value={props.renderCard.address} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button type="submit" className="btn btn-warning me-2" onClick={changeIsToggle}>
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartInfoComponent;
