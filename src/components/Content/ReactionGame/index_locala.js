import React, { Component } from 'react'
import Template from './page.html'
//import Script from 'react-load-script'
//import client from '../../../static/js/client'
//import Camera from 'react-html5-camera-photo'
//import 'react-html5-camera-photo/build/css/index.css'
import PhotoCapture from '../../PhotoCapture'

export default class ReactionGame extends Component {
  componentDidMount() {


    // load any external scripts by creating
    // a script element with the script src
    console.log('heyyyy')
    const el = document.createElement('script')
    el.id = 'game-script'
    el.src = 'client.js'
    //el.src = client
    console.log('doc', document)
    console.log('el', el.src)
    document.getElementsByTagName('head')[0].appendChild(el)
    //Template.getElementsByTagName("body").appendChild(el)
    //document.getElementById('app').appendChild(el)
    //
    //const src = 'https://f1-start.glitch.me/client.js'
    /*
    const src = 'client.js'
    let addScript = document.createElement('script')
    addScript.setAttribute('src', src)
    addScript.setAttribute("type", "text/javascript")
    addScript.async = true
    addScript.id = 'game-script'
    console.log('Innn script', addScript)
    document.getElementsByTagName('head')[0].appendChild(addScript)
    */
  }

  componentDidUpdate(prevProps) {
    console.log('11', prevProps)
  }

  componentWillUnmount() {
    // removes external script that were added
    //const time = document.getElementsByClassName('time')[0].outerText
    document.getElementById('game-script').remove()
  }
  
  render() {
      //<iframe src="https://f1-start.glitch.me/" height="800" width="1000" title="game" ref="iframe" />
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: Template}}/>
      <PhotoCapture />
    </div>
  )
  }
}
