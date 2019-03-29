import React, { Component } from 'react'
//import Camera from 'react-html5-camera-photo'
//import 'react-html5-camera-photo/build/css/index.css'
import PhotoCapture from '../PhotoCapture'

export default class Content extends Component {
  render() {
        //<PhotoCapture />
    return (
      <div>
        <iframe src="https://f1-start.glitch.me/" height="800" width="1000" title="game" />
      </div>
    )
  }
}
