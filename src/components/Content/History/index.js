import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'
import data from './data'

export default class History extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <div className="grid-root">
          <GridList cellHeight={160} className="grid-list" cols={3}>
            {data.map(tile => (
              <GridListTile
                key={tile.img}
                cols={tile.cols || 1}
                className="grid-tile"
              >
                {tile.title === "Image" &&
                <img
                  src={tile.img}
                  alt={tile.title}
                  className={tile.style || "content-image"}
                />}
                {tile.title === "Text" &&
                  <Typography component="p" align="justify" variant="h6">
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
