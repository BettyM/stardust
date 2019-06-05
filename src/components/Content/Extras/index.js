import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'
import videos from './videos'

export default class Extras extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <div className="grid-root">
          <GridList cellHeight={160} className="grid-list" cols={1}>
            {videos.map(tile => (
              <GridListTile
                key={tile.img}
                cols={tile.cols || 1}
                className="grid-tile"
              >
                {tile.title === "Video" &&
                <video
                  controls
                  src={tile.img}
                  alt={tile.title}
                  className="content-image"
                >
                  <source
                    type="video/mp4"
                    src={tile.img}
                  />
                </video>}
                {tile.title === "Text" &&
                  <Typography
                    component="span"
                    align="center"
                    variant="h6"
                    className={tile.style || "phrase"}
                  >
                    {tile.img}
                  </Typography>
                }
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Grid>
    )
  }
}
