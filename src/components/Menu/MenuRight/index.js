import React from 'react'
import PropTypes from 'prop-types'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const options = [
  {
    id: 'innovation',
    url: '/static/images/image1.jpg',
    title: "Innovacion en Ingenieria",
    width: '40%',
  },
  {
    id: 'game',
    url: '/static/images/image1.jpg',
    title: 'Juego de Reaccion',
    width: '30%',
  },
  {
    id: 'visitors',
    url: '/static/images/image1.jpg',
    title: 'Visitantes',
    width: '30%',
  },
  {
    id: 'extras',
    url: '/static/images/image1.jpg',
    title: 'Extras',
    width: '30%',
  },
]

const MenuRight = ({ onClick }) => {
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

MenuRight.propTypes = {
  onClick: PropTypes.func,
}

export default MenuRight
