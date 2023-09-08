import './App.css'
import Friends from './Friends'
import Counter from './counter'
import Team from './team'
import Users from './user'

function App() {
  function handleClick(){
    alert ('button clicked')
  }
  const handleclick2 =()=>{
    alert('clicked')
  }

  const addToFive =(num)=>{
    alert(num + 5)
  }
  return (
    <>
      <h1>React Core Concept</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleclick2}>Click 2</button>
      <button onClick={()=>{alert('click3')}}>Click 3</button>
      <button onClick={()=>addToFive(3)}>click 4</button>
    </>
  )
}

export default App
