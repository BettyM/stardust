import React, { Component } from 'react'
import Webcam from "react-webcam"

export default class PhotoCapture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenshot: null,
    }
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  capture = () => {
    console.log('INNN')
    const test = this.webcam.getScreenshot()
    this.setState({ screenshot: test })
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    }
    console.log('test', this.state.screenshot)

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        { this.state.screenshot ? <img alt="" src={this.state.screenshot} /> : null }
      </div>
    )
  }
}
