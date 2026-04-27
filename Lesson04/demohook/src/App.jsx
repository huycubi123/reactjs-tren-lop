import { createContext, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'  
import heroImg from './assets/hero.png'
import './App.css'
import Content from './components/Content'

export const ThemeContext = createContext();

function App() {
  //useState
  const lists = ['arr1', 'arr2']

  const [count, setCount] = useState(0)

  const [list, setList] = useState(lists)

  function handerList(){
    setList([
      ...list,
      parseInt(Math.random()*100)
    ])

  }
  //UseEffect

  // useEffect(()=>{
  //   console.log("Đây là useEffect thực hiện khi bắt đầu re-render components")
  // })

  // useEffect(()=>{
  //   console.log("Đây là useEffect chỉ thực hiện khi được mount")
  // },[])

  // useEffect(()=>{
  //   console.log("Đây là useEffect chỉ thực hiện khi biến count thay đổi")
  // },[count])


  //useContext
  const [theme,setTheme] = useState();
  const toggleTheme  = () =>{
      setTheme(theme == "text-black" ? "text-light" : "text-black")
  }
  //useRef
  const timeId = useRef()
  const handleStart =() =>{
    timeId.current = setInterval(()=>
    {
      setCount(prevCount => prevCount + 1)
       
    },1000)
    console.log("Start: ",timeId.current)
  }

  const handleStop =() =>{
    clearInterval(timeId.current)
    console.log("Stop: ",timeId.current)
  }


  return (
    <>
    <div>
        <h2>Tìm hiểu về useState</h2>
        <p>Số lần click {count}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>

        <button onClick={()=>setCount(count+1)}>Click count</button>
        <p>
          Danh sách list: {list.toString()}
        </p>
        <button onClick={handerList}>Add List</button>
    </div>
    <ThemeContext.Provider value={theme}>
      <div style={{padding:50,}}>
          <button onClick={toggleTheme}> toggle Theme</button>
          <Content></Content>
      </div>
    </ThemeContext.Provider>
    </>

  )
}

export default App