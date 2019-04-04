import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import data from './data'

export default class Innovation extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <div className="grid-root">
          <GridList cellHeight={160} className="grid-list" cols={2}>
            {data.map(tile => (
              <GridListTile
                key={tile.img}
                cols={tile.cols || 1}
                className="grid-tile"
              >
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="content-image"
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Grid>
    )
  }
}
