import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import StudentHeaderComponent from "./components/StudentHeaderComponent";
import StudentBodyComponent from "./components/StudentBodyComponent";
import StudentInfoComponent from "./components/StudentInfoComponent";

function App() {
  // khởi tạo state students để lưu trữ danh sách sinh viên
  const [students, setStudents] = useState([]);
  // Gán giá trị khi tải trang
  useEffect(() => {
    // khởi tạo một list student để hiển thị khi tải trang
    setStudents(...students, [
      {
        id: "SV01",
        name: "Nguyễn Văn A",
        age: 23,
        sex: "Nam",
        birth: "17/03/2006",
        prov: "HN",
        adress: "Hà Nội",
      },
      {
        id: "SV02",
        name: "Nguyễn Văn B",
        age: 24,
        sex: "Nam",
        birth: "17/04/2005",
        prov: "QN",
        adress: "Quảng Ninh",
      },
      {
        id: "SV03",
        name: "Nguyễn Văn C",
        age: 25,
        sex: "Nam",
        birth: "17/06/2004",
        prov: "DN",
        adress: "Đà Nẵng",
      },
      {
        id: "SV04",
        name: "Nguyễn Thị H",
        age: 23,
        sex: "Nu",
        birth: "17/03/2006",
        prov: "HN",
        adress: "Hà Nội",
      },
    ]);
  }, []);

  // biến khởi tạo để lưu trạng thái hiển thị form thông tin
  const [isToggle, setIsToggle] = useState(false);
  // biến khởi tạo để lưu trạng thái hành động (thêm, sửa, xem)
  const [action, setAction] = useState("");

  // xử lý khi click vào các nút thêm, sửa, xóa, xem
  const handerIsToogle = (evt) => {
    // nếu action là xóa thì thực hiện xóa student khỏi list student
    if (evt.action === "delete") {
      let list = students;
      // tìm kiếm sudent trong list và xóa student đó khỏi list
      // chỉ lấy những student có id khác với id của student cần xóa
      list = list.filter((item) => item.id != evt.student.id);
      // cập nhật lại state list student (do state không thể thay đổi trực tiếp nền phải tạo
      // một list trung gian để cập nhật lại state)
      setStudents([...list]);
    } else {
      // cập nhật lại trang thái hiển thị form thông tin
      setIsToggle(evt.status);
      // cập lại action (thêm, sửa, xem) và student được chọn để hiển thị thông tin
      setAction(evt.action);
      // cập nhật student được chọn để hiển thị thông tin
      setStudent(evt.student);
    }
  };

  // xử lý khi submit form thêm , sửa
  const handleChange = (act, stu) => {
    // console.log("AppJS:", act, stu);
    // kiểm tra nếu là action
    if (act === "add") {
      // nếu id là trông thì hiển thị báo lỗi
      if (stu.id == "") {
        alert("Mã Id không được để trống");
      } else {
        //thêm student (kiểm tra có trùng mã sinh viên hay không)
        // kiểm tra có tồn tại sinh viên đó hay chưa dựa vào msv
        let st = students.find((item) => item.id == stu.id);
        // nếu tồn tại thì hiển thị lỗi trùng mã sinh viên
        if (st) {
          alert("Trùng mã sinh viên");
        } else {
          // nếu không tồn tại thì thêm mới vào  students
          setStudents([...students, stu]);
          // đưa giá trị về mặc định
          setStudent({
            id: "",
            name: "",
            age: 0,
            sex: "Nam",
            birth: "",
            prov: "HN",
            adress: "",
          });
        }
      }
    } else if (act === "edit") {
      // console.log("AppJS stu: ",stu);
      // tim student trong list student
      let list = students;

      // tim kiếm sudent trong list và cập nhật lại thông tin student đó
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == stu.id) {
          list[i] = stu;
          break;
        }
      }
      // cập nhật lại state list student (do state không thể thay đổi trực tiếp nền phải tạo
      // một list trung gian để cập nhật lại state)
      setStudents([...list]);
      // đưa giá trị về mặc định
      setStudent({
        id: "",
        name: "",
        age: 0,
        sex: "Nam",
        birth: "",
        prov: "HN",
        adress: "",
      });
      // ẩn form thông tin sau khi sửa xong
      setIsToggle(false);
    }
  };
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: 0,
    sex: "Nam",
    birth: "",
    prov: "HN",
    adress: "",
  });
  return (
    <>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <StudentHeaderComponent onIsToogle={(evt) => handerIsToogle(evt)} />
            <StudentBodyComponent
              students={students}
              onActionBody={(evt) => handerIsToogle(evt)}
            />
          </div>
        </div>
        {isToggle ? (
          <StudentInfoComponent
            action={action}
            student={student}
            onSubmit={(act, stu) => handleChange(act, stu)}
            onClose={() => setIsToggle(false)}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;