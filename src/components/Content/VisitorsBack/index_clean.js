import React from 'react'
import 'react-html5-camera-photo/build/css/index.css'

const Visitors = () => {
  console.log('1', localStorage)
  console.log('2', localStorage.getItem('best'))
  console.log('3', localStorage.getItem('time'))

  return (
    <div>
      <h1>Visitors...</h1>
    </div>
  )
}

export default Visitors
