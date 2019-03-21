import React, { Component } from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const images = [
  {
    id: 0,
    url: '/static/images/image1.jpg',
    title: "Play",
    width: '40%',
  },
  {
    id: 1,
    url: '/static/images/image1.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    id: 2,
    url: '/static/images/image1.jpg',
    title: 'Camera',
    width: '30%',
  },
]

export default class Menu extends Component {
  handleOnClick = e => {
    console.log('event', e.target.id)
    if(e.target.id === '0') {
      return (
        <div>Play!!!</div>
      )
    }
  }

  render() {
    return (
      <div>
      {images.map(image => (
      <Grid item xs={2} className="menu-item" key={image.title}>
               <ButtonBase
                 focusRipple
                 key={image.title}
                 className="image"
                 focusVisibleClassName="focus-visible"
                 style={{
                   width: image.width,
                 }}
                 onClick={e => this.handleOnClick(e)}
               >
                 <span
                   className="image-src"
                   style={{
                      backgroundImage: `url(${image.url})`,
                   }}
                 />
                 <span className="image-backdrop" />
                 <span className="image-button">
                   <Typography
                     component="span"
                     variant="subtitle1"
                     color="inherit"
                     className="image-title"
                     id={image.id}
                   >
                     {image.title}
                     <span className="image-marked" />
                   </Typography>
                 </span>
               </ButtonBase>
               </Grid>
             ))}
      </div>
    )
  }
}
