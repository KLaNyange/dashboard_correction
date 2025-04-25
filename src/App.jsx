import './App.css'
import Card from './components/Card/Card'
import SideBar from './components/SideBar/SideBar'
import data from '../data.json'

function App() {

  return (
    <>
      <div className='d-flex'>
        <SideBar/> 
        {
          data.map((data, index)=>(
            <div key={index}>
              <Card data={data}  />       
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
