import './App.css'
import Card from './components/Card/Card'
import SideBar from './components/SideBar/SideBar'
import data from '../data.json'
import { useState } from 'react'

function App() {

  const [time, setTime] = useState('weekly')

  console.log('Etat de time : ' + time);

  const daily = () =>{
    setTime('daily')
  }
  
  const weekly = () =>{
    setTime('weekly')
  }

  const monthly = () =>{
    setTime('monthly')
  }

  return (
    <>
      <div className='d-flex'>
        <SideBar daily={daily} weekly={weekly} monthly={monthly}  time={time} /> 
        <div className='wrap'>
        {
          data.map((data, index)=>(
            <div key={index}>
              <Card data={data} current={data.timeframes[time].current} previous={data.timeframes[time].previous} />       
            </div>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default App
