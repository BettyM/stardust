import React from 'react'
import PropTypes from 'prop-types'
//import Camera from 'react-html5-camera-photo'
//import 'react-html5-camera-photo/build/css/index.css'
//import PhotoCapture from '../PhotoCapture'
import Us from './Us'
import Game from './ReactionGame'

const Content = ({ display }) => {
  return (
    <div>
      {display==='us' && <Us />}
      {display==='game' && <Game />}
    </div>
  )
}

Content.propTypes = {
  display: PropTypes.string,
}

export default Content
