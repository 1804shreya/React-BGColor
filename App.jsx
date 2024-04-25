import { useState } from 'react'

import './App.css'

function App() {
  const handleClickFunction =(e)=>{
    const body=document.querySelector('body')
    body.style.background=getRandomColor()
    e.target.style.background=getRandomColor();
  };
  function getRandomColor(){
    let letters='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
      color+=letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }

  return (
    <>
      <div className='container'>
      <h1>Background Color Change</h1>
      <button className='btn' onClick={handleClickFunction}>click me</button>
      </div>
    </>
  )
}

export default App
