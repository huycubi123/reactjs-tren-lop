import React, { useEffect } from 'react';

export default function TvcConfirmExit() {
    useEffect(() => {
        // Hàm xử lý sự kiện khi người dùng thoát trang
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            // Gán giá trị để trình duyệt kích hoạt hộp thoại xác nhận (chuỗi này thường bị trình duyệt ghi đè bằng thông báo mặc định)
            event.returnValue = "Bạn có chắc chắn muốn rời đi?";
        };

        // Đăng ký sự kiện "beforeunload" với cửa sổ trình duyệt
        window.addEventListener("beforeunload", handleBeforeUnload);

        
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload); // Cleanup function: Gỡ bỏ sự kiện khi component bị hủy (unmount)
        };
    }, []); // Chạy 1 lần duy nhất khi component mount

    return (
        <div className="alert alert-warning shadow-sm">
            <h4 className="fw-bold text-dark">Bài tập 6: Hiển thị cửa sổ xác nhận khi rời trang</h4>
            <p className="mb-0 text-muted">Hiển thị alert khi tải lại trang hoặc thoát </p>
        </div>
    );
}