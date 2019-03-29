import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import MenuLeft from '../Menu/MenuLeft'
import MenuRight from '../Menu/MenuRight'
import Content from '../Content'

export default class Dashboard extends Component {
  render() {
    return (
      <Grid container className="root" spacing={16}>
        <Grid item xs={2}>
          <MenuLeft />
        </Grid>
        <Grid item xs={8}>
          <Content />
        </Grid>
        <Grid item xs={2}>
          <MenuRight />
        </Grid>
      </Grid>
    )
  }
}
