import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card'
import places from './data'

const App = () => {
  return (

    <div className="cards">
      {places.map((place)=>{

        return <Card key = {place.id} place = {place} />
      }
       
      )}
      </div>
   
  )
}

export default App
