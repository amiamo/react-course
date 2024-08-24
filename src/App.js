import Button from "./Button"
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] =useState("")
  const onChange = (event) => setKeyword(event.target.value)
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time")
  useEffect(() => {
    console.log("i run only once")
  },[])
  useEffect(() => {
    console.log("i run when 'keyword' changes")},[keyword])

  useEffect(() => {
    console.log("i run when 'counter' changes")
  },[counter])
  useEffect(() => {
    console.log("i run when keyword & counter changes")
  },[keyword, counter])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
