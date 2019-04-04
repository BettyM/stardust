import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import MenuLeft from '../Menu/MenuLeft'
import MenuRight from '../Menu/MenuRight'
import Content from '../Content'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      content: 'us',
    }
  }

  handleOnClick = option => {
    console.log('click', option)
    this.setState({ content: option })
  }

  render() {
    const { content } = this.state
    return (
      <Grid container className="root" spacing={16}>
        <Grid item xs={2}>
          <MenuLeft onClick={this.handleOnClick}/>
        </Grid>
        <Grid item xs={8} className="content-root">
          <Content display={content} />
        </Grid>
        <Grid item xs={2}>
          <MenuRight onClick={this.handleOnClick} />
        </Grid>
      </Grid>
    )
  }
}
