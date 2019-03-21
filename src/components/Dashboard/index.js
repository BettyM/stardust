import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Menu from '../Menu'
import Content from '../Content'

export default class Dashboard extends Component {
  render() {
    return (
      <Grid container className="root" spacing={16}>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid item xs={10}>
          <Content />
        </Grid>
      </Grid>
    )
  }
}
