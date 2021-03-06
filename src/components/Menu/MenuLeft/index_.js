import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const options = [
  {
    id: 'us',
    url: '/static/images/image1.jpg',
    title: "¿Quienes somos?",
    icon: "fa fa-rocket",
    width: '40%',
  },
  {
    id: 'history',
    url: '/static/images/image1.jpg',
    title: 'Historia del Proyecto Mercurio',
    icon: "fa fa-rocket",
    width: '30%',
  },
  {
    id: 'marketing',
    url: '/static/images/image1.jpg',
    title: 'Marketing',
    icon: "fa fa-bullhorn",
    width: '30%',
  },
  {
    id: 'colaboradores',
    url: '/static/images/image1.jpg',
    title: 'Colaboradores',
    icon: "fa fa-users",
    width: '30%',
  },
  {
    id: 'redes',
    url: '/static/images/image1.jpg',
    title: 'Redes Sociales',
    icon: "fa fa-comments",
    width: '30%',
  },
]

export default class MenuLeft extends Component {

  render() {
    const { onClick } = this.props
            //<img src={image.url} />
  return (
    <div>
      {options.map(image => (
        <Grid item xs={2} className="menu-item" key={image.title}>
          <ButtonBase
            focusRipple
            key={image.title}
            className="image"
            focusVisibleClassName="focus-visible"
              style={{
                width: image.width,
              }}
              onClick={e => onClick(e.target.id)}
          >
            <span
              className="image-src"
            >
            </span>
            <span className="image-backdrop" />
            <span className="image-button">
              <div className="icon">
                <i className={image.icon} />
              </div>
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

MenuLeft.propTypes = {
  onClick: PropTypes.func,
}
