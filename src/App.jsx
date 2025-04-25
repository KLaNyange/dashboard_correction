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

  // Grace à cette fonction je ne dois plus utiliser les 3 fonctions daily, weekly et monthly
  const changeTime = (e) =>{
    setTime(e.target.innerText.toLowerCase())
  }

  return (
    <>
      <div className='d-flex'>
        <SideBar daily={daily} weekly={weekly} monthly={monthly} changeTime={changeTime}  time={time} /> 
        <div className='wrap'>
        {
          data.map((data, index)=>(
            <div key={index}>
              <Card data={data} current={data.timeframes[time].current} previous={data.timeframes[time].previous} time={time}  />       
            </div>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default App
