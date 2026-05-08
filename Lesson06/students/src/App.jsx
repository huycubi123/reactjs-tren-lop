import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import StudentHeaderComponent from "./components/StudentHeaderComponent";
import StudentBodyComponent from "./components/StudentBodyComponent";
import StudentInfoComponent from "./components/StudentInfoComponent";

function App() {
  // ======================= LOCAL STORAGE =======================

  // hàm lấy dữ liệu từ localStorage
  const getLocalStorage = () => {
    let data = localStorage.getItem("students");

    if (data) {
      return JSON.parse(data);
    } else {
      return [
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
      ];
    }
  };

  // hàm lưu dữ liệu vào localStorage
  const setLocalStorage = (students) => {
    // chuyển dữ liệu sang JSON
    const data = JSON.stringify(students);

    // lưu vào localStorage
    localStorage.setItem("students", data);
  };

  // ======================= STATE =======================

  // khởi tạo state từ localStorage
  const [students, setStudents] = useState(() => getLocalStorage());

  
  // ======================= EFFECT =======================

  // mỗi khi students thay đổi thì lưu lại
  // và không cần set lại state students từ localStorage nữa vì đã khởi tạo state từ localStorage rồi
  // khi thêm , sửa , xóa chỉ cần thêm setStudents để cập nhật lại state students thì useEffect sẽ tự động chạy và lưu lại vào localStorage
  useEffect(() => {
    setLocalStorage(students);
  }, [students]);

  // ======================= FUNCTION =======================
  const [inputSearch, setInputSearch] = useState("");

  // xử lý khi click vào các nút thêm, sửa, xóa, xem
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

  // biến khởi tạo để lưu thông tin sinh viên khi thêm mới hoặc sửa (do khi thêm mới hoặc sửa thì thông tin sinh viên sẽ thay đổi nên cần phải có một biến để lưu thông tin sinh viên đó)
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: 0,
    sex: "Nam",
    birth: "",
    prov: "HN",
    adress: "",
  });

  // --------- Xử lý tìm kiếm --------
  // Dùng list này thay vì students để hiển thị danh sách sinh viên sau khi tìm kiếm
  // (do khi tìm kiếm thì danh sách sinh viên sẽ thay đổi nên cần phải có một biến để lưu danh sách sinh viên đó)
  const [list, setList] = useState(students);
  // list này khác list ở dưới
  const handleSearch = (value) => {
    let list_parse = students;
    // list_parse khác với list ở trên (do khi tìm kiếm thì danh sách sinh viên sẽ thay đổi nên cần phải có một biến để lưu danh sách sinh viên đó)
    list_parse = list_parse.filter((item) => {
      if (
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.id.toLowerCase().includes(value.toLowerCase())
      ) {
        return item;
      }
    });
    setList([...list_parse]);
    // cập nhật lại state list student sau khi tìm kiếm (do state không thể thay đổi trực tiếp nền phải tạo một list trung gian để cập nhật lại state)
  };
  // mỗi khi students thay đổi thì lưu lại vào localStorage và cập nhật lại state students từ localStorage để hiển thị lại danh sách sinh viên sau khi tìm kiếm

  // -------------Xử lý sắp xếp -------------\
  const [sort, setSort] = useState({
    type: "sv",
    order: "asc",
  });

const handleSort = (event) => {
  let newList = [...list]; // dùng list hiện tại
  let { type, order } = event;

  if (type === "sv") {
    newList.sort((a, b) =>
      order === "asc"
        ? a.id.localeCompare(b.id)
        : b.id.localeCompare(a.id)
    );
  } else if (type === "name") {
    newList.sort((a, b) =>
      order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  setList(newList);
};

  return (
    <>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <StudentHeaderComponent
              inputSearch={inputSearch}
              onSearch={handleSearch}
              onSort={handleSort}
              onIsToogle={(evt) => handerIsToogle(evt)}
            />
            <StudentBodyComponent
              students={list}
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
