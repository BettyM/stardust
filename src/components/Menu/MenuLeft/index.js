import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'

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
    return (
      <div>
        {options.map(item => (
          <Grid item xs={12} className="menu-item" key={item.title}>
            <Fab
              id={item.id}
              variant="extended"
              aria-label="label"
              className="menu-option"
              onClick={e => onClick(e.currentTarget.id)}
            >
              <Grid item xs={2}>
                <div className="icon">
                  <i className={item.icon} />
                </div>
              </Grid>
              <Grid item xs={10}>
                <div>{item.title}</div>
              </Grid>
            </Fab>
          </Grid>
        ))}
      </div>
    )
  }
}

MenuLeft.propTypes = {
  onClick: PropTypes.func,
}
