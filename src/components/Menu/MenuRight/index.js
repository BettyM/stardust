import React from 'react'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'

const options = [
  {
    id: 'innovation',
    url: '/static/images/image1.jpg',
    title: "Innovación en Ingeniería",
    icon: "fa fa-fighter-jet",
    width: '40%',
  },
  {
    id: 'game',
    url: '/static/images/image1.jpg',
    title: 'Juego de Reacción',
    icon: "fa fa-gamepad",
    width: '30%',
  },
  {
    id: 'visitors',
    url: '/static/images/image1.jpg',
    title: 'Visitantes',
    icon: "fa fa-address-card",
    width: '30%',
  },
  {
    id: 'redes',
    url: '/static/images/image1.jpg',
    title: 'Redes Sociales',
    icon: "fa fa-comments",
    width: '30%',
  },
  {
    id: 'extras',
    url: '/static/images/image1.jpg',
    title: 'Extras',
    icon: "fa fa-video-camera",
    width: '30%',
  },
]

const MenuRight = ({ onClick }) => {
  return (
    <div>
      {options.map(item => (
        <Grid item xs={2} className="menu-item" key={item.title}>
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

MenuRight.propTypes = {
  onClick: PropTypes.func,
}

export default MenuRight
