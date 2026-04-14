import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader';
import CartBody from './components/CartBody';
import CartInfo from './components/CartInfo';
import Item from './components/Item';
import Member from './components/Member';

function App() {
  const user = {
    id: 1,
    name: 'Đàm Luận',
    age: 20,
  }

  function hello(name) {
    if (name) {
      return <p>Xin chào {name}</p>;
    }
    return <p>Xin chào</p>;
  }

  return (
    <>
      {/* <div className='text-center'>
        <h2>Thông tin sinh viên</h2>
        <p>Mã sinh viên: {user.id}</p>
        <p>Tên sinh viên: {user.name}</p>
        <p>Tuổi: {user.age}</p>
        {hello(user.name)}
      </div>
      <div>
        <hr></hr>
        <Item nguoidung={user} />
      </div>
      <hr></hr>
      <Member /> */}
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <CartHeader></CartHeader>
            <CartBody />
          </div>
        </div>
        <CartInfo />
      </div>
    </>
  );
}

export default App;
