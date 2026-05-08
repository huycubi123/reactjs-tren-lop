import React from "react";
import { useState } from "react";

function StudentHeaderComponent(props) {
  const { inputSearch } = props;
  const [search, setSearch] = useState(inputSearch);
  const [sort, setSort] = useState("sv-asc");
  const handleAdd = () => {
    const evt = {
      action: "add",
      status: true,
      student: {
        id: "",
        name: "",
        age: 0,
        sex: "Nam",
        birth: "",
        prov: "HN",
        adress: "",
      },
    };

    props.onIsToogle(evt);
  };

  // ------------ Xử lý search ------------- 
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // FIX: check tồn tại trước khi gọi
    if (props.onSearch) {
      props.onSearch(value);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (props.onSearch) {
      props.onSearch(search);
    }
  };

// -------------Xử lý sắp xếp -------------\
const handleSort = (e) => {
  const value = e.target.value; // vd: "sv-asc"

  setSort(value);

  // tách chuỗi thành type và order
  const [type, order] = value.split("-");

  // gửi lên App
  if (props.onSort) {
    props.onSort({ type, order });
  }
};


  return (
    <>
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button
              type="button"
              onClick={handleAdd}
              className="btn btn-primary btn-icon-text"
            >
              Thêm mới sinh viên
            </button>
          </div>

          <div className="col-6 ">
            {/* FIX: thêm onSubmit */}
            <form className="search-form" onSubmit={handleSearch}>
              <i className="icon-search" />
              <input
                type="search"
                value={search}
                onChange={handleChange}
                className="form-control"
                placeholder="Search Here"
              />
              <button
                type="submit"
                className="btn btn-primary btn-icon-text"
              >
                Tìm kiếm
              </button>
            </form>
          </div>

          <div className="col-3 d-flex align-items-center">
            <select className="form-control" value={sort} onChange={handleSort}>
              <option value="sv-asc">Sắp xếp theo mã</option>
              <option value="sv-desc">Sắp xếp theo mã (ngược)</option>
              <option value="name-asc">Sắp xếp theo tên</option>
              <option value="name-desc">Sắp xếp theo tên (ngược)</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentHeaderComponent;