import React from 'react'
import PropTypes from 'prop-types'
//import Camera from 'react-html5-camera-photo'
//import 'react-html5-camera-photo/build/css/index.css'
//import PhotoCapture from '../PhotoCapture'
import Us from './Us'
import History from './History'
import Marketing from './Marketing'
import Colaboradores from './Colaboradores'
import Redes from './Redes'
import Innovation from './Innovation'
//import Game from './ReactionGame'
import Game from './ReactionGame/index_local.js'
import Visitors from './Visitors'
import Extras from './Extras'

const Content = ({ display }) => {
  return (
    <div>
      {display==='us' && <Us />}
      {display==='history' && <History />}
      {display==='marketing' && <Marketing />}
      {display==='colaboradores' && <Colaboradores />}
      {display==='redes' && <Redes />}
      {display==='innovation' && <Innovation />}
      {display==='game' && <Game />}
      {display==='visitors' && <Visitors />}
      {display==='extras' && <Extras />}
    </div>
  )
}

Content.propTypes = {
  display: PropTypes.string,
}

export default Content
