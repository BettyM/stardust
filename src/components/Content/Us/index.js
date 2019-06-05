import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import MercuryImg from '../../../static/images/mercury.jpg'

const Us = () => {
  return (
    <Grid item xs={12}>
      <div className="grid-root">
        <Card className="card">
          <CardMedia
            component="img"
            alt="mercury"
            className="card-media"
            height="140"
            image={MercuryImg}
            title="Mercury Team"
          />
          <CardContent>
            <Typography component="p" align="justify" variant="h6">
              Somos Mercury Project, una escudería inspirada por la ingeniería, ciencia y tecnología. Donde convergemos todos los integrantes aportando nuestras habilidades, actitudes y energía para lograr con éxito el desafío de F1 In Schools México.
          </Typography>
        </CardContent>
        </Card>
      </div>
    </Grid>
  )
}

export default Us
