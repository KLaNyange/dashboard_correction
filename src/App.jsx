import './App.css'
import Card from './components/Card/Card'
import SideBar from './components/SideBar/SideBar'


function App() {

  return (
    <>
      <div className='d-flex'>
        <SideBar/> 
        <Card/>       
      </div>
    </>
  )
}

export default App
