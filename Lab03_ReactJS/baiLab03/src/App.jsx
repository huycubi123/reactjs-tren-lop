import React from "react";
import TvcUseState from "./components/TvcUseState";
import TvcPostList from "./components/TvcPostList";
import TvcCounter from "./components/TvcCounter";
import TvcInputFocus from "./components/TvcInputFocus";
import TvcAutoCounter from "./components/TvcAutoCounter";
import TvcConfirmExit from "./components/TvcConfirmExit";
import TvcThemeProvider, { TvcThemedComponent } from "./components/TvcThemeProvider";
function App() {
  return (
    <div
      className="container py-5"
      style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}
    >
      {/* Header */}
      <header className="text-center mb-5 p-4 bg-white shadow-sm rounded border-top border-primary border-4">
        <h1 className="fw-bold text-dark">BÀI TẬP THỰC HÀNH REACT HOOKS</h1>
        <p className="text-muted">
          Họ tên: <span className="text-primary fw-bold">[Tên của bạn]</span> -
          Mã SV: <span className="text-primary fw-bold">[Mã SV của bạn]</span>
        </p>
      </header>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* BÀI 1 */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-primary text-white fw-bold">
              Bài 1: Quản lý trạng thái (useState)
            </div>
            <div className="card-body">
              <TvcUseState />
            </div>
          </div>

          {/* BÀI 2 */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-secondary text-white fw-bold">
              Bài 2: Gọi API và Hiển thị danh sách (useEffect)
            </div>
            <div className="card-body">
              <TvcPostList />
            </div>
          </div>

          {/* BÀI 3 */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-success text-white fw-bold">
              Bài 3: Logic phức tạp (useReducer)
            </div>
            <div className="card-body">
              <TvcCounter />
            </div>
          </div>

          {/* BÀI 4 */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-info text-white fw-bold">
              Bài 4: Tham chiếu DOM & Lưu giá trị cũ (useRef)
            </div>
            <div className="card-body">
              <TvcInputFocus />
            </div>
          </div>

          {/* BÀI 5 */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-warning text-dark fw-bold">
              Bài 5: Side Effect & Bộ đếm tự động (setInterval)
            </div>
            <div className="card-body">
              <TvcAutoCounter />
            </div>
          </div>
        </div>
      </div>
      {/* BÀI 6 - Thêm vào cuối danh sách trong App.jsx */}
      <div className="card mb-4 shadow-sm border-0">
        <div className="card-header bg-danger text-white fw-bold">
          Bài tập 6: Cảnh báo thoát trang (useEffect)
        </div>
        <div className="card-body">
          <TvcConfirmExit />
        </div>
        {/* BÀI 7 - Chuyển đổi theme bằng useContext */}
        <div className="card mb-4 shadow-sm border-0">
          <div className="card-header bg-dark text-white fw-bold">
            Bài tập 7: Chuyển đổi theme bằng useContext
          </div>
          <div className="card-body">
            {/* TvcThemeProvider đđể chứa dữ liệu và bao bọc component con */}
            <TvcThemeProvider>
              <TvcThemedComponent />
            </TvcThemeProvider>
          </div>
        </div>
      </div>
      <footer className="text-center mt-4 pb-4 text-muted"></footer>
    </div>
  );
}

export default App;
