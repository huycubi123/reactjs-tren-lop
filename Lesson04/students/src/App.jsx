import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import StudentHeaderComponent from "./components/StudentHeaderComponent";
import StudentBodyComponent from "./components/StudentBodyComponent";
import StudentInfoComponent from "./components/StudentInfoComponent";

function App() {
  const [students, setStudents] = useState([]);
  // Gán giá trị khi tải trang
  useEffect(() => {
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
      }
    ]);
  }, []);

  const [isToggle, setIsToggle] = useState(false);
  const [action, setAction] = useState("");
  const handerIsToogle = (evt) => {
    setIsToggle(evt.status);
    setAction(evt.action);
  };

  const handleChange = (act, stu) => {
    console.log(act, stu);
    if (action === "add") {
      //them student
      setStudents([...students, stu]);
      // render list
      // useEffect
    } else if (action === "edit") {
      // tim student trong list student
      // tạo list mơi rồi gán      
      // setStudents
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
            <StudentBodyComponent students={students} />
          </div>
        </div>
        {isToggle ? (
          <StudentInfoComponent
            action={action}
            student={student}
            onSubmit={(act, stu) => handleChange(act, stu)}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;